/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Reset password dialog component
 */
import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { MigaduAPI } from "../api/MigaduAPI.js";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function ResetPasswordScreen({ domainName, mailbox, onBack, onSuccess, onError, }) {
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    useInput((input, key) => {
        if (key.escape) {
            onBack();
            return;
        }
        if (key.return && !submitted && password.trim()) {
            handleSubmit();
        }
    });
    const handleSubmit = async () => {
        if (!password.trim()) {
            onError("Password cannot be empty");
            return;
        }
        try {
            setIsSubmitting(true);
            const config = ConfigManager.load();
            const api = new MigaduAPI(config.email, config.apiKey);
            await api.updateMailbox(domainName, mailbox.local_part, { password });
            setSubmitted(true);
            onSuccess(`Password for ${mailbox.address} reset successfully!`);
        }
        catch (err) {
            onError(`Failed to reset password: ${err}`);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.info, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.info, bold: true },
                "\uD83D\uDD10 Reset Password: ",
                mailbox.address)),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.textMuted }, "Enter new password:")),
        React.createElement(Box, { marginBottom: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1, paddingY: 1 },
            React.createElement(TextInput, { value: password, onChange: setPassword, mask: "*", onSubmit: handleSubmit })),
        React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.textDim },
                React.createElement(Text, { color: Theme.success }, "[Enter]"),
                " Reset",
                "  ",
                React.createElement(Text, { color: Theme.error }, "[Esc]"),
                " Cancel")),
        isSubmitting && (React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.primary }, "Resetting password...")))));
}
//# sourceMappingURL=ResetPasswordScreen.js.map