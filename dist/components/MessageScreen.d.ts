/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Message/notification screen component
 */
interface MessageScreenProps {
    message: string;
    type: "success" | "error";
    onContinue: () => void;
}
export declare function MessageScreen({ message, type, onContinue }: MessageScreenProps): JSX.Element;
export {};
//# sourceMappingURL=MessageScreen.d.ts.map