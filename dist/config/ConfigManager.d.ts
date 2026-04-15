/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Configuration management using Conf
 */
import { Config } from "../types/index.js";
export declare class ConfigManager {
    private static instance;
    private static getInstance;
    static load(): Config;
    static save(config: Config): void;
    static exists(): boolean;
    static clear(): void;
}
//# sourceMappingURL=ConfigManager.d.ts.map