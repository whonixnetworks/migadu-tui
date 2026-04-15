/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Centralized theme configuration for consistent, beautiful styling
 */
export declare const Theme: {
    readonly primary: "#00D9FF";
    readonly primaryDark: "#0099CC";
    readonly secondary: "#FF6B9D";
    readonly accent: "#FFE66D";
    readonly success: "#00E676";
    readonly successBg: "#00C853";
    readonly error: "#FF5252";
    readonly errorBg: "#D32F2F";
    readonly warning: "#FFD740";
    readonly info: "#448AFF";
    readonly text: "#ECEFF1";
    readonly textMuted: "#B0BEC5";
    readonly textDim: "#78909C";
    readonly border: "#37474F";
    readonly borderActive: "#00D9FF";
    readonly bg: "#263238";
    readonly bgLight: "#37474F";
    readonly highlight: "#E040FB";
    readonly gradientStart: "#00D9FF";
    readonly gradientEnd: "#FF6B9D";
};
export declare const Borders: {
    readonly default: "single";
    readonly active: "double";
    readonly error: "double";
    readonly success: "round";
    readonly panel: "single";
};
export declare function getColor(color: keyof typeof Theme): string;
export declare const Shadows: {
    readonly none: undefined;
    readonly subtle: {
        readonly backgroundColor: "#263238";
    };
    readonly elevated: {
        readonly backgroundColor: "#37474F";
    };
};
//# sourceMappingURL=theme.d.ts.map