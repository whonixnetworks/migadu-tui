/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Domains list screen component
 */
import { Domain } from "../types/index.js";
interface DomainsScreenProps {
    onSelectDomain: (domain: Domain) => void;
}
export declare function DomainsScreen({ onSelectDomain }: DomainsScreenProps): JSX.Element;
export {};
//# sourceMappingURL=DomainsScreen.d.ts.map