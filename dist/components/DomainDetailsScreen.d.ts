/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Domain details screen with mailbox management
 */
import { Domain, Mailbox } from "../types/index.js";
interface DomainDetailsScreenProps {
    domain: Domain;
    onBack: () => void;
    onCreateMailbox: () => void;
    onEditMailbox: (mailbox: Mailbox) => void;
    onDeleteMailbox: (mailbox: Mailbox) => void;
    onResetPassword: (mailbox: Mailbox) => void;
}
export declare function DomainDetailsScreen({ domain, onBack, onCreateMailbox, onEditMailbox, onDeleteMailbox, onResetPassword, }: DomainDetailsScreenProps): JSX.Element;
export {};
//# sourceMappingURL=DomainDetailsScreen.d.ts.map