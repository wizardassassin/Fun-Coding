package com.wizard_assassin;

import java.util.concurrent.ConcurrentHashMap;
import java.text.DecimalFormat;
import java.util.UUID;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerMoveEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.plugin.Plugin;
import org.bukkit.scoreboard.Team;

import com.comphenix.protocol.PacketType;
import com.comphenix.protocol.ProtocolLibrary;
import com.comphenix.protocol.ProtocolManager;
import com.comphenix.protocol.events.ListenerPriority;
import com.comphenix.protocol.events.PacketAdapter;
import com.comphenix.protocol.events.PacketEvent;
import com.comphenix.protocol.events.PacketListener;

import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.JoinConfiguration;
import net.kyori.adventure.text.format.NamedTextColor;
import net.kyori.adventure.text.format.TextColor;

public class PingAFK implements Listener {
    private Plugin plugin;

    private ConcurrentHashMap<UUID, Long> pingTimes;
    private ConcurrentHashMap<UUID, Long> afkTimes;
    private ProtocolManager manager;
    private int maxAfkTime;
    private boolean doVanillaPing;
    private boolean doAfk;
    private boolean doUnits;

    public PingAFK(Plugin plugin) {
        this.plugin = plugin;
        this.pingTimes = new ConcurrentHashMap<UUID, Long>();
        this.afkTimes = new ConcurrentHashMap<UUID, Long>();
        this.manager = ProtocolLibrary.getProtocolManager();
        this.maxAfkTime = 300000;
        this.doVanillaPing = false;
        this.doAfk = true;
        this.doUnits = true;

        addListeners();
    }

    public void tablistDisplay(Player player, Double totalPing, Boolean isAFK) {
        Component nameComponent = getPlayerColor(player);

        String units = (doUnits) ? "ms" : "";
        String keepAlivePing = formatPing(totalPing);
        String keepAlivePingWrap = keepAlivePing + units;
        String vanillaPing = "" + player.getPing();
        String vanillaPingWrap = (doVanillaPing) ? "," + vanillaPing + units : "";
        Component pingPrefix = Component.text("[").color(NamedTextColor.GRAY);
        Component pingSuffix = Component.text("]").color(NamedTextColor.GRAY);
        Component pingContent = Component.text(keepAlivePingWrap + vanillaPingWrap).color(NamedTextColor.GREEN);
        Component pingComponent = Component.empty().append(pingPrefix).append(pingContent)
                .append(pingSuffix);

        String afkString = (doAfk && isAFK) ? " AFK" : "";
        Component afkComponent = Component.text(afkString).color(NamedTextColor.YELLOW);

        JoinConfiguration formatSeperator = JoinConfiguration.separators(Component.space(), Component.empty());
        Component formatComponent = Component.join(formatSeperator, pingComponent, nameComponent, afkComponent);

        player.playerListName(formatComponent);
    }

    public Component getPlayerColor(Player player) {
        Component name = player.name();
        try {
            // Vanilla team support
            Team team = player.getScoreboard().getEntityTeam(player);
            TextColor color = team.color();
            Component prefix = team.prefix();
            Component suffix = team.suffix();
            name = Component.empty().append(prefix).append(name.color(color)).append(suffix);
        } catch (Exception e) {
            // Ignore
        }
        return name;
    }

    public String formatPing(Double totalPing) {
        if (totalPing < 10) {
            return new DecimalFormat("0.00").format(totalPing);
        }
        if (totalPing < 100) {
            return new DecimalFormat("0.0").format(totalPing);
        }
        return new DecimalFormat("0").format(totalPing);
    }

    public void addListeners() {
        PacketListener listenerServer = new PacketAdapter(plugin, ListenerPriority.NORMAL,
                PacketType.Play.Server.KEEP_ALIVE) {
            @Override
            public void onPacketSending(PacketEvent event) {
                Long startPing = System.nanoTime();
                Player player = event.getPlayer();
                UUID uuid = player.getUniqueId();
                if (!pingTimes.containsKey(uuid)) {
                    this.plugin.getLogger().warning("KEEP_ALIVE executed before PlayerJoinEvent.");
                    // return;
                }
                pingTimes.put(uuid, startPing);
            }
        };
        PacketListener listenerClient = new PacketAdapter(plugin, ListenerPriority.NORMAL,
                PacketType.Play.Client.KEEP_ALIVE) {
            @Override
            public void onPacketReceiving(PacketEvent event) {
                Long endPing = System.nanoTime();
                Player player = event.getPlayer();
                UUID uuid = player.getUniqueId();
                Double totalPing = (endPing - pingTimes.get(uuid)) / 1000000.0;
                if (!player.isOnline()) {
                    PingAFK.this.plugin.getLogger().warning("Player is offline before main task.");
                    return;
                }
                Long lastAFK = afkTimes.get(uuid);
                Boolean isAFK = (endPing - lastAFK) / 1000000 >= maxAfkTime;
                tablistDisplay(player, totalPing, isAFK);
            }
        };
        manager.addPacketListener(listenerServer);
        manager.addPacketListener(listenerClient);
    }

    @EventHandler
    public void onPlayerMove(PlayerMoveEvent event) {
        Long lastMove = System.nanoTime();
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();
        Long lLastMove = afkTimes.get(uuid);
        if ((lastMove - lLastMove) / 1000000 < 5000) {
            return;
        }
        afkTimes.put(uuid, lastMove);
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        Long lastMove = System.nanoTime();
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();
        if (pingTimes.containsKey(uuid)) {
            plugin.getLogger().warning("pingTimes has key before PlayerJoinEvent.");
            return;
        }
        pingTimes.put(uuid, -1L);
        afkTimes.put(uuid, lastMove);
        tablistDisplay(player, -1D, false);
    }

    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();
        pingTimes.remove(uuid);
        afkTimes.remove(uuid);
    }
}
