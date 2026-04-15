/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Delete confirmation dialog component
 */
import { Mailbox } from "../types/index.js";
interface DeleteConfirmScreenProps {
    domainName: string;
    mailbox: Mailbox;
    onBack: () => void;
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
}
export declare function DeleteConfirmScreen({ domainName, mailbox, onBack, onSuccess, onError, }: DeleteConfirmScreenProps): JSX.Element;
export {};
//# sourceMappingURL=DeleteConfirmScreen.d.ts.map