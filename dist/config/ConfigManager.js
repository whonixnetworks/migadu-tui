/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Configuration management using Conf
 */
import Conf from "conf";
const CONFIG_KEY = "migadu-cli";
// shouldn't fail silently - validate config on load
export class ConfigManager {
    static instance = null;
    static getInstance() {
        if (!this.instance) {
            this.instance = new Conf({
                projectName: CONFIG_KEY,
                defaults: {
                    email: "",
                    apiKey: "",
                },
            });
        }
        return this.instance;
    }
    static load() {
        const conf = this.getInstance();
        return {
            email: conf.get("email") || "",
            apiKey: conf.get("apiKey") || "",
        };
    }
    static save(config) {
        const conf = this.getInstance();
        conf.set("email", config.email);
        conf.set("apiKey", config.apiKey);
    }
    static exists() {
        const config = this.load();
        return !!config.email && !!config.apiKey;
    }
    static clear() {
        const conf = this.getInstance();
        conf.clear();
    }
}
//# sourceMappingURL=ConfigManager.js.map