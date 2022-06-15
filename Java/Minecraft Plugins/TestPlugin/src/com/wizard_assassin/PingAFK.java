package com.wizard_assassin;

import java.util.concurrent.ConcurrentHashMap;
import java.util.UUID;

import org.bukkit.Bukkit;
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

    public PingAFK(Plugin plugin) {
        this.plugin = plugin;
        this.pingTimes = new ConcurrentHashMap<UUID, Long>();
        this.afkTimes = new ConcurrentHashMap<UUID, Long>();

        ProtocolManager manager = ProtocolLibrary.getProtocolManager();
        PacketListener listenerServer = new PacketAdapter(plugin, ListenerPriority.NORMAL,
                PacketType.Play.Server.KEEP_ALIVE) {
            @Override
            public void onPacketSending(PacketEvent event) {
                Long startPing = System.currentTimeMillis();
                Player player = event.getPlayer();
                UUID uuid = player.getUniqueId();
                if (!pingTimes.containsKey(uuid)) {
                    Bukkit.getLogger().warning("KEEP_ALIVE executed before PlayerJoinEvent.");
                    // return;
                }
                pingTimes.put(uuid, startPing);
            }
        };
        PacketListener listenerClient = new PacketAdapter(plugin, ListenerPriority.NORMAL,
                PacketType.Play.Client.KEEP_ALIVE) {
            @Override
            public void onPacketReceiving(PacketEvent event) {
                Long endPing = System.currentTimeMillis();
                Player player = event.getPlayer();
                UUID uuid = player.getUniqueId();
                Long totalPing = endPing - pingTimes.get(uuid);
                Bukkit.getScheduler().runTask(plugin, new Runnable() {
                    @Override
                    public void run() {
                        if (!player.isOnline()) {
                            plugin.getLogger().warning("Player is offline before main task.");
                            return;
                        }
                        Long lastAFK = afkTimes.get(uuid);
                        Boolean isAFK = endPing - lastAFK > 60000;
                        tablistDisplay(player, totalPing, isAFK);
                    }
                });
            }
        };
        manager.addPacketListener(listenerServer);
        manager.addPacketListener(listenerClient);
    }

    public void tablistDisplay(Player player, Long totalPing, Boolean isAFK) {
        String format = "&7[&a%ping%ms,%vanillaping%ms&7]&r %name%";
        if (isAFK) {
            format += " &eAFK&r";
        }

        String name = player.getName();
        String vanillaPing = "" + player.getPing();
        // plugin.getLogger()
        // .info(name + " | Ping: " + totalPing + " | isAFK: " + isAFK + " | playerPing:
        // " + vanillaPing);
        format = format.replace("%name%", name).replace("%displayname%", player.getDisplayName())
                .replace("%ping%", totalPing.toString()).replace("%vanillaping%", vanillaPing);
        player.setPlayerListName(ChatColor.translateAlternateColorCodes('&', format));
    }

    @EventHandler
    public void onPlayerMove(PlayerMoveEvent event) {
        Long lastMove = System.currentTimeMillis();
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();
        Long lLastMove = afkTimes.get(uuid);
        afkTimes.put(uuid, lastMove);
        Boolean wasAFK = lastMove - lLastMove > 60000;
        if (wasAFK) {
            // plugin.getLogger().info(player.getPlayerListName());
            String format = player.getPlayerListName();
            player.setPlayerListName(format.substring(0, format.lastIndexOf(" ")));
        }
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        Long lastMove = System.currentTimeMillis();
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();
        if (pingTimes.containsKey(uuid)) {
            plugin.getLogger().warning("pingTimes has key before PlayerJoinEvent.");
            return;
        }
        pingTimes.put(uuid, -1L);
        afkTimes.put(uuid, lastMove);
        tablistDisplay(player, -1L, false);
    }

    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();
        pingTimes.remove(uuid);
        afkTimes.remove(uuid);
    }
}
