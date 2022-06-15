package com.wizard_assassin;

import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public class Main extends JavaPlugin {
    @Override
    public void onEnable() {
        Bukkit.getLogger().info("Starting...");

        Bukkit.getPluginManager().registerEvents(new PingAFK(this), this);
    }

    @Override
    public void onDisable() {
        Bukkit.getLogger().info("Stopping...");
    }
}
