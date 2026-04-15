/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Centralized theme configuration for consistent, beautiful styling
 */
// Vibrant color palette using hex codes for better terminal support
export const Theme = {
    // Primary colors
    primary: '#00D9FF', // Cyan - main accent
    primaryDark: '#0099CC', // Darker cyan
    secondary: '#FF6B9D', // Pink - secondary accent
    accent: '#FFE66D', // Yellow - highlights
    // Semantic colors
    success: '#00E676', // Bright green
    successBg: '#00C853', // Success background
    error: '#FF5252', // Bright red
    errorBg: '#D32F2F', // Error background
    warning: '#FFD740', // Amber
    info: '#448AFF', // Blue
    // Neutral colors
    text: '#ECEFF1', // Off-white text
    textMuted: '#B0BEC5', // Muted text
    textDim: '#78909C', // Dim text (hints)
    border: '#37474F', // Subtle border
    borderActive: '#00D9FF', // Active border
    bg: '#263238', // Dark background
    bgLight: '#37474F', // Lighter background
    // Special
    highlight: '#E040FB', // Purple highlight
    gradientStart: '#00D9FF', // Gradient start
    gradientEnd: '#FF6B9D', // Gradient end
};
// Border styles for different contexts
export const Borders = {
    default: 'single',
    active: 'double',
    error: 'double',
    success: 'round',
    panel: 'single',
};
// Helper to get color with fallback
export function getColor(color) {
    return Theme[color];
}
// Box shadow effect using background colors
export const Shadows = {
    none: undefined,
    subtle: { backgroundColor: Theme.bg },
    elevated: { backgroundColor: Theme.bgLight },
};
//# sourceMappingURL=theme.js.map