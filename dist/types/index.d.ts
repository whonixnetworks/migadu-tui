/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Type definitions for Migadu API and TUI components
 */
export interface Domain {
    name: string;
    state: string;
    activated_at?: string;
    can_send?: boolean;
    can_receive?: boolean;
    created_at?: string;
}
export interface Mailbox {
    local_part: string;
    address: string;
    name: string;
    is_internal?: boolean;
    may_send?: boolean;
    may_receive?: boolean;
    may_access_imap?: boolean;
    may_access_pop3?: boolean;
    may_access_manage_sieve?: boolean;
    password_method?: string;
    storage_usage?: number;
    password?: string;
}
export interface Config {
    email: string;
    apiKey: string;
}
export type Screen = "domains" | "domain-details" | "create-mailbox" | "edit-mailbox" | "delete-confirm" | "reset-password" | "message" | "error";
export declare const Colors: {
    readonly RED: "\u001B[0;31m";
    readonly GREEN: "\u001B[0;32m";
    readonly YELLOW: "\u001B[1;33m";
    readonly BLUE: "\u001B[0;34m";
    readonly CYAN: "\u001B[0;36m";
    readonly MAGENTA: "\u001B[0;35m";
    readonly WHITE: "\u001B[1;37m";
    readonly GRAY: "\u001B[0;90m";
    readonly BOLD: "\u001B[1m";
    readonly DIM: "\u001B[2m";
    readonly NC: "\u001B[0m";
};
//# sourceMappingURL=index.d.ts.map