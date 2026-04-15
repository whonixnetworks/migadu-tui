#!/usr/bin/env node
/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 */
// CONFIGURATION variables
const API_BASE_URL = "https://api.migadu.com/v1/"; // Migadu API endpoint
const API_TIMEOUT = 30000; // Request timeout in ms
const CONFIG_KEY = "migadu-cli"; // Config storage key
import React from "react";
import { render } from "ink";
import { App } from "./components/App.js";
import { SetupScreen } from "./components/SetupScreen.js";
import { HelpScreen } from "./components/HelpScreen.js";
import { ConfigManager } from "./config/ConfigManager.js";
// Helper functions
function showVersion() {
    console.log("Migadu CLI TUI Manager v0.2.0");
}
function die(message) {
    console.error(`FATAL: ${message}`);
    process.exit(1);
}
// Main execution
async function main() {
    const args = process.argv.slice(2);
    if (args.length > 0) {
        const arg = args[0];
        switch (arg) {
            case "--help":
            case "-h":
                render(React.createElement(HelpScreen, null));
                return;
            case "--version":
            case "-v":
                showVersion();
                return;
            case "--setup":
                render(React.createElement(SetupScreen, null));
                return;
            default:
                console.error(`Unknown option: ${arg}`);
                render(React.createElement(HelpScreen, null));
                process.exit(1);
        }
    }
    // shouldn't fail silently - verify credentials before starting TUI
    const config = ConfigManager.load();
    if (!config.email || !config.apiKey) {
        console.error("No credentials found. Please run 'migadu-tui --setup' first.");
        process.exit(1);
    }
    render(React.createElement(App, null));
}
main().catch((error) => {
    die(String(error));
});
export { API_BASE_URL, API_TIMEOUT, CONFIG_KEY };
//# sourceMappingURL=index.js.map