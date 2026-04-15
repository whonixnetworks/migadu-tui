/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Message/notification screen component
 */
import React from "react";
import { Box, Text, useInput } from "ink";
import { Theme } from "../theme.js";
export function MessageScreen({ message, type, onContinue }) {
    useInput(() => {
        onContinue();
    });
    const isSuccess = type === "success";
    return (React.createElement(Box, { flexDirection: "column", padding: 2, borderStyle: "round", borderColor: isSuccess ? Theme.success : Theme.error },
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: isSuccess ? Theme.success : Theme.error, bold: true }, isSuccess ? "✓ Success" : "✗ Error")),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.text }, message)),
        React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.textDim }, "Press any key to continue..."))));
}
//# sourceMappingURL=MessageScreen.js.map