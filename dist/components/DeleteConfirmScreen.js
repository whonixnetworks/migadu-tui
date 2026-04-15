/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Delete confirmation dialog component
 */
import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import { MigaduAPI } from "../api/MigaduAPI.js";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function DeleteConfirmScreen({ domainName, mailbox, onBack, onSuccess, onError, }) {
    const [isDeleting, setIsDeleting] = useState(false);
    useInput((input) => {
        if (input === "y" || input === "Y") {
            handleDelete();
        }
        else if (input === "n" || input === "N" || input === "\u001b") {
            onBack();
        }
    });
    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            const config = ConfigManager.load();
            const api = new MigaduAPI(config.email, config.apiKey);
            await api.deleteMailbox(domainName, mailbox.local_part);
            onSuccess(`Mailbox ${mailbox.address} deleted successfully!`);
        }
        catch (err) {
            onError(`Failed to delete mailbox: ${err}`);
        }
        finally {
            setIsDeleting(false);
        }
    };
    return (React.createElement(Box, { flexDirection: "column", padding: 2, borderStyle: "double", borderColor: Theme.error },
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.error, bold: true }, "\u26A0\uFE0F  Delete Mailbox")),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.text }, "Are you sure you want to delete:")),
        React.createElement(Box, { marginBottom: 1, paddingX: 2, borderStyle: "single", borderColor: Theme.warning, paddingY: 1 },
            React.createElement(Text, { color: Theme.warning, bold: true },
                "\uD83D\uDCE7 ",
                mailbox.address)),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.error, bold: true }, "\uD83D\uDDD1\uFE0F  This action cannot be undone!")),
        React.createElement(Box, { marginTop: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1 },
            React.createElement(Text, { color: Theme.textDim },
                React.createElement(Text, { color: Theme.error }, "[Y]"),
                "es",
                "  ",
                React.createElement(Text, { color: Theme.success }, "[N]"),
                "o")),
        isDeleting && (React.createElement(Box, { marginTop: 1 },
            React.createElement(Text, { color: Theme.error }, "Deleting mailbox...")))));
}
//# sourceMappingURL=DeleteConfirmScreen.js.map