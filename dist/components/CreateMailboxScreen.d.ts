/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Create mailbox dialog component
 */
interface CreateMailboxScreenProps {
    domainName: string;
    onBack: () => void;
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
}
export declare function CreateMailboxScreen({ domainName, onBack, onSuccess, onError, }: CreateMailboxScreenProps): JSX.Element;
export {};
//# sourceMappingURL=CreateMailboxScreen.d.ts.map