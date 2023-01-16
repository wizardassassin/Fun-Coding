package com.wizard_assassin;

import java.util.concurrent.ConcurrentHashMap;
import java.text.DecimalFormat;
import java.text.MessageFormat;
import java.util.UUID;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerMoveEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.plugin.Plugin;

import com.comphenix.protocol.PacketType;
import com.comphenix.protocol.ProtocolLibrary;
import com.comphenix.protocol.ProtocolManager;
import com.comphenix.protocol.events.ListenerPriority;
import com.comphenix.protocol.events.PacketAdapter;
import com.comphenix.protocol.events.PacketEvent;
import com.comphenix.protocol.events.PacketListener;

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
        String name = player.getName();
        String units = (doUnits) ? "ms" : "";
        String keepAlivePing = formatPing(totalPing);
        String keepAlivePingWrap = keepAlivePing + units;
        String vanillaPing = "" + player.getPing();
        String vanillaPingWrap = (doVanillaPing) ? "," + vanillaPing + units : "";
        String afkString = (doAfk && isAFK) ? " &eAFK&r" : "";
        String format = MessageFormat.format("&7[&a{0}{1}&7]&r {2}{3}", keepAlivePingWrap, vanillaPingWrap, name,
                afkString);
        // plugin.getLogger()
        // .info(name + " | Ping: " + totalPing + " | isAFK: " + isAFK + " |
        // playerPing:" + vanillaPing);
        player.setPlayerListName(ChatColor.translateAlternateColorCodes('&', format));
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
        Boolean wasAFK = (lastMove - lLastMove) / 1000000 >= maxAfkTime;
        if (wasAFK) {
            // plugin.getLogger().info(player.getPlayerListName());
            String format = player.getPlayerListName();
            if (!format.endsWith(" §eAFK§r")) {
                plugin.getLogger().warning("Unexpected PlayerListName - " + format);
            }
            plugin.getLogger().info(format);
            player.setPlayerListName(format.substring(0, format.lastIndexOf(" ")));
        }
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
