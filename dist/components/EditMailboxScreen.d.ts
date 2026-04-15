/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Edit mailbox dialog component
 */
import { Mailbox } from "../types/index.js";
interface EditMailboxScreenProps {
    domainName: string;
    mailbox: Mailbox;
    onBack: () => void;
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
}
export declare function EditMailboxScreen({ domainName, mailbox, onBack, onSuccess, onError, }: EditMailboxScreenProps): JSX.Element;
export {};
//# sourceMappingURL=EditMailboxScreen.d.ts.map