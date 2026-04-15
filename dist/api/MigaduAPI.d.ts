/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Migadu API client
 */
import { Domain, Mailbox } from "../types/index.js";
export declare class MigaduAPI {
    private client;
    constructor(email: string, apiKey: string);
    getDomains(): Promise<Domain[]>;
    getDomain(domainName: string): Promise<Domain>;
    getMailboxes(domainName: string): Promise<Mailbox[]>;
    getMailbox(domainName: string, localPart: string): Promise<Mailbox>;
    createMailbox(domainName: string, data: {
        local_part: string;
        name: string;
        password: string;
    }): Promise<Mailbox>;
    updateMailbox(domainName: string, localPart: string, data: Partial<Mailbox>): Promise<Mailbox>;
    deleteMailbox(domainName: string, localPart: string): Promise<void>;
}
//# sourceMappingURL=MigaduAPI.d.ts.map