/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Edit mailbox dialog component
 */
import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { MigaduAPI } from "../api/MigaduAPI.js";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function EditMailboxScreen({ domainName, mailbox, onBack, onSuccess, onError, }) {
    const [name, setName] = useState(mailbox.name || "");
    const [password, setPassword] = useState("");
    const [activeField, setActiveField] = useState("name");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async () => {
        const data = {};
        if (name && name !== mailbox.name) {
            data.name = name;
        }
        if (password) {
            data.password = password;
        }
        if (Object.keys(data).length === 0) {
            onError("No changes made");
            return;
        }
        try {
            setIsSubmitting(true);
            const config = ConfigManager.load();
            const api = new MigaduAPI(config.email, config.apiKey);
            await api.updateMailbox(domainName, mailbox.local_part, data);
            onSuccess(`Mailbox ${mailbox.address} updated successfully!`);
        }
        catch (err) {
            onError(`Failed to update mailbox: ${err}`);
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
            if (activeField === "name") {
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
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.accent, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.accent, bold: true },
                "\u270F\uFE0F  Edit Mailbox: ",
                mailbox.address)),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.textMuted }, "Current name: "),
            React.createElement(Text, { color: Theme.text }, mailbox.name || "No name")),
        React.createElement(Box, { flexDirection: "column", marginBottom: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1, paddingY: 1 },
            React.createElement(Box, null,
                React.createElement(Text, { color: activeField === "name" ? Theme.accent : Theme.text },
                    "New name:",
                    " "),
                activeField === "name" ? (React.createElement(TextInput, { value: name, onChange: setName, onSubmit: () => setActiveField("password") })) : (React.createElement(Text, { color: name ? Theme.text : Theme.textDim }, name || "(leave empty to keep current)"))),
            React.createElement(Box, { marginTop: 1 },
                React.createElement(Text, { color: activeField === "password" ? Theme.accent : Theme.text },
                    "New password:",
                    " "),
                activeField === "password" ? (React.createElement(TextInput, { value: password, onChange: setPassword, mask: "*", onSubmit: () => setActiveField("confirm") })) : (React.createElement(Text, { color: password ? Theme.text : Theme.textDim }, password ? "*".repeat(password.length) : "(leave empty to keep current)")))),
        React.createElement(Box, { marginTop: 2 },
            React.createElement(Text, { color: Theme.textDim }, activeField === "confirm" ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { color: Theme.success }, "[Enter]"),
                " Update",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel")) : (React.createElement(React.Fragment, null,
                React.createElement(Text, { color: Theme.accent }, "[Tab/Enter]"),
                " Next field",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel")))),
        isSubmitting && (React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.primary }, "Updating mailbox...")))));
}
//# sourceMappingURL=EditMailboxScreen.js.map