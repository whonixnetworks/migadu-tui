/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Help screen component
 */
import React from "react";
import { Box, Text, useInput } from "ink";
import { Theme } from "../theme.js";
export function HelpScreen() {
    useInput(() => {
        process.exit(0);
    });
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.primary, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.primary, bold: true }, "\uD83D\uDCE7 Migadu CLI TUI Manager v0.2.0")),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.secondary, bold: true }, "Usage:"),
            React.createElement(Text, { color: Theme.text }, "  migadu-tui [OPTIONS]")),
        React.createElement(Box, { marginBottom: 1, borderStyle: "single", borderColor: Theme.secondary, paddingX: 1 },
            React.createElement(Text, { color: Theme.secondary, bold: true }, "Flags")),
        React.createElement(Box, { flexDirection: "column", marginBottom: 1 },
            React.createElement(Box, null,
                React.createElement(Text, { color: Theme.success }, "\u2713"),
                React.createElement(Text, null, " "),
                React.createElement(Text, { color: Theme.accent }, "--setup"),
                React.createElement(Text, { color: Theme.text }, "          Configure API credentials")),
            React.createElement(Box, null,
                React.createElement(Text, { color: Theme.info }, "\u2139"),
                React.createElement(Text, null, " "),
                React.createElement(Text, { color: Theme.accent }, "-h, --help"),
                React.createElement(Text, { color: Theme.text }, "       Show this help")),
            React.createElement(Box, null,
                React.createElement(Text, { color: Theme.info }, "\u2139"),
                React.createElement(Text, null, " "),
                React.createElement(Text, { color: Theme.accent }, "-v, --version"),
                React.createElement(Text, { color: Theme.text }, "    Show version"))),
        React.createElement(Box, { marginBottom: 1, borderStyle: "single", borderColor: Theme.accent, paddingX: 1 },
            React.createElement(Text, { color: Theme.accent, bold: true }, "Examples")),
        React.createElement(Box, { flexDirection: "column", marginBottom: 1 },
            React.createElement(Text, { color: Theme.textDim }, "  migadu-tui --setup"),
            React.createElement(Text, { color: Theme.textDim }, "  migadu-tui")),
        React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.textDim }, "Press any key to exit..."))));
}
//# sourceMappingURL=HelpScreen.js.map