/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Reset password dialog component
 */
import { Mailbox } from "../types/index.js";
interface ResetPasswordScreenProps {
    domainName: string;
    mailbox: Mailbox;
    onBack: () => void;
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
}
export declare function ResetPasswordScreen({ domainName, mailbox, onBack, onSuccess, onError, }: ResetPasswordScreenProps): JSX.Element;
export {};
//# sourceMappingURL=ResetPasswordScreen.d.ts.map