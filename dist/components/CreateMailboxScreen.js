/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Create mailbox dialog component
 */
import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { MigaduAPI } from "../api/MigaduAPI.js";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function CreateMailboxScreen({ domainName, onBack, onSuccess, onError, }) {
    const [localPart, setLocalPart] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [activeField, setActiveField] = useState("localPart");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async () => {
        if (!localPart.trim()) {
            onError("Local part is required");
            return;
        }
        try {
            setIsSubmitting(true);
            const config = ConfigManager.load();
            const api = new MigaduAPI(config.email, config.apiKey);
            await api.createMailbox(domainName, {
                local_part: localPart,
                name: name || localPart,
                password: password || "",
            });
            onSuccess(`Mailbox ${localPart}@${domainName} created successfully!`);
        }
        catch (err) {
            onError(`Failed to create mailbox: ${err}`);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    useInput((input, key) => {
        if (key.escape) {
            onBack();
            return;
        }
        if (key.return) {
            if (activeField === "localPart") {
                setActiveField("name");
            }
            else if (activeField === "name") {
                setActiveField("password");
            }
            else if (activeField === "password") {
                setActiveField("confirm");
            }
            else if (activeField === "confirm") {
                handleSubmit();
            }
        }
    });
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.success, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.success, bold: true }, "\u2728 Create New Mailbox")),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.textMuted }, "Domain: "),
            React.createElement(Text, { color: Theme.primary, bold: true }, domainName)),
        React.createElement(Box, { flexDirection: "column", marginBottom: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1, paddingY: 1 },
            React.createElement(Box, null,
                React.createElement(Text, { color: activeField === "localPart" ? Theme.primary : Theme.text },
                    "Local part (before @):",
                    " "),
                activeField === "localPart" ? (React.createElement(TextInput, { value: localPart, onChange: setLocalPart, onSubmit: () => setActiveField("name") })) : (React.createElement(Text, { color: localPart ? Theme.text : Theme.textDim }, localPart || "(required)"))),
            React.createElement(Box, { marginTop: 1 },
                React.createElement(Text, { color: activeField === "name" ? Theme.primary : Theme.text },
                    "Display name:",
                    " "),
                activeField === "name" ? (React.createElement(TextInput, { value: name, onChange: setName, onSubmit: () => setActiveField("password") })) : (React.createElement(Text, { color: name ? Theme.text : Theme.textDim }, name || "(optional)"))),
            React.createElement(Box, { marginTop: 1 },
                React.createElement(Text, { color: activeField === "password" ? Theme.primary : Theme.text },
                    "Password:",
                    " "),
                activeField === "password" ? (React.createElement(TextInput, { value: password, onChange: setPassword, mask: "*", onSubmit: () => setActiveField("confirm") })) : (React.createElement(Text, { color: password ? Theme.text : Theme.textDim }, password ? "*".repeat(password.length) : "(optional)")))),
        React.createElement(Box, { marginTop: 2 },
            React.createElement(Text, { color: Theme.textDim }, activeField === "confirm" ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { color: Theme.success }, "[Enter]"),
                " Create",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel")) : (React.createElement(React.Fragment, null,
                React.createElement(Text, { color: Theme.accent }, "[Tab/Enter]"),
                " Next field",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel")))),
        isSubmitting && (React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.primary }, "Creating mailbox...")))));
}
//# sourceMappingURL=CreateMailboxScreen.js.map