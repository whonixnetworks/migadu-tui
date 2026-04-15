/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Setup screen for configuring API credentials
 */
import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function SetupScreen() {
    const [email, setEmail] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [activeField, setActiveField] = useState("email");
    const [saved, setSaved] = useState(false);
    const handleSave = () => {
        if (!email.trim() || !apiKey.trim()) {
            return;
        }
        ConfigManager.save({ email, apiKey });
        setSaved(true);
    };
    useInput((input, key) => {
        if (key.escape) {
            process.exit(0);
            return;
        }
        if (key.return) {
            if (activeField === "email") {
                setActiveField("apiKey");
            }
            else if (activeField === "apiKey") {
                setActiveField("confirm");
            }
            else if (activeField === "confirm") {
                handleSave();
            }
        }
    });
    if (saved) {
        return (React.createElement(Box, { flexDirection: "column", padding: 1 },
            React.createElement(Box, { borderStyle: "round", borderColor: Theme.success, paddingX: 2, marginBottom: 1 },
                React.createElement(Text, { color: Theme.success, bold: true }, "\u2713 Configuration Saved")),
            React.createElement(Text, { color: Theme.success }, "Credentials saved successfully!"),
            React.createElement(Box, { marginTop: 1 },
                React.createElement(Text, { color: Theme.textDim }, "Press any key to exit..."))));
    }
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.primary, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.primary, bold: true }, "\uD83D\uDD27 Migadu CLI TUI Setup")),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.textMuted }, "Enter your Migadu API credentials")),
        React.createElement(Box, { flexDirection: "column", marginBottom: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1, paddingY: 1 },
            React.createElement(Box, null,
                React.createElement(Text, { color: activeField === "email" ? Theme.primary : Theme.text },
                    "Email:",
                    " "),
                activeField === "email" ? (React.createElement(TextInput, { value: email, onChange: setEmail, onSubmit: () => setActiveField("apiKey") })) : (React.createElement(Text, { color: email ? Theme.text : Theme.textDim }, email || "(required)"))),
            React.createElement(Box, { marginTop: 1 },
                React.createElement(Text, { color: activeField === "apiKey" ? Theme.primary : Theme.text },
                    "API Key:",
                    " "),
                activeField === "apiKey" ? (React.createElement(TextInput, { value: apiKey, onChange: setApiKey, mask: "*", onSubmit: () => setActiveField("confirm") })) : (React.createElement(Text, { color: apiKey ? Theme.text : Theme.textDim }, apiKey ? "*".repeat(apiKey.length) : "(required)")))),
        React.createElement(Box, { marginTop: 2 },
            React.createElement(Text, { color: Theme.textDim }, activeField === "confirm" ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { color: Theme.success }, "[Enter]"),
                " Save",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel")) : (React.createElement(React.Fragment, null,
                React.createElement(Text, { color: Theme.accent }, "[Tab/Enter]"),
                " Next field",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel"))))));
}
//# sourceMappingURL=SetupScreen.js.map