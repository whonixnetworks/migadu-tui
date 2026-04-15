/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Domain details screen with mailbox management
 */
import React, { useState, useEffect } from "react";
import { Box, Text, useInput } from "ink";
import Spinner from "ink-spinner";
import SelectInput from "ink-select-input";
import { MigaduAPI } from "../api/MigaduAPI.js";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function DomainDetailsScreen({ domain, onBack, onCreateMailbox, onEditMailbox, onDeleteMailbox, onResetPassword, }) {
    const [mailboxes, setMailboxes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMailbox, setSelectedMailbox] = useState(null);
    const fetchMailboxes = async () => {
        try {
            setLoading(true);
            const config = ConfigManager.load();
            const api = new MigaduAPI(config.email, config.apiKey);
            const data = await api.getMailboxes(domain.name);
            setMailboxes(data);
            setError(null);
        }
        catch (err) {
            setError(`Failed to fetch mailboxes: ${err}`);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchMailboxes();
    }, [domain.name]);
    useInput((input) => {
        if (input === "b" || input === "B") {
            onBack();
        }
        else if (input === "c" || input === "C") {
            onCreateMailbox();
        }
        else if (selectedMailbox) {
            if (input === "e" || input === "E") {
                onEditMailbox(selectedMailbox);
            }
            else if (input === "d" || input === "D") {
                onDeleteMailbox(selectedMailbox);
            }
            else if (input === "p" || input === "P") {
                onResetPassword(selectedMailbox);
            }
        }
    });
    if (loading) {
        return (React.createElement(Box, { flexDirection: "column", padding: 1 },
            React.createElement(Text, { color: Theme.primary },
                React.createElement(Spinner, { type: "dots" }),
                " Loading mailboxes...")));
    }
    if (error) {
        return (React.createElement(Box, { flexDirection: "column", padding: 1 },
            React.createElement(Text, { color: Theme.error },
                "Error: ",
                error),
            React.createElement(Text, { color: Theme.textDim }, "Press B to go back")));
    }
    const items = mailboxes.map((mailbox) => ({
        label: `${mailbox.address.padEnd(35)} | ${mailbox.name || "No name"}`,
        value: mailbox,
    }));
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.primary, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.primary, bold: true },
                "\uD83C\uDF10 Domain: ",
                domain.name)),
        React.createElement(Box, { flexDirection: "column", marginBottom: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1, paddingY: 1 },
            React.createElement(Text, null,
                "Status:",
                ' ',
                React.createElement(Text, { color: domain.state === 'active' ? Theme.success : Theme.warning, bold: true },
                    domain.state === 'active' ? '●' : '○',
                    " ",
                    domain.state || 'unknown')),
            React.createElement(Text, null,
                "Can Send:",
                ' ',
                React.createElement(Text, { color: domain.can_send ? Theme.success : Theme.error }, domain.can_send ? '✓ Yes' : '✗ No')),
            React.createElement(Text, null,
                "Can Receive:",
                ' ',
                React.createElement(Text, { color: domain.can_receive ? Theme.success : Theme.error }, domain.can_receive ? '✓ Yes' : '✗ No')),
            domain.activated_at && (React.createElement(Text, { color: Theme.textMuted },
                "Activated: ",
                domain.activated_at))),
        React.createElement(Box, { borderStyle: "single", borderColor: Theme.secondary, paddingX: 1, marginBottom: 1 },
            React.createElement(Text, { color: Theme.secondary, bold: true },
                "\uD83D\uDCEC Mailboxes (",
                mailboxes.length,
                ")")),
        mailboxes.length === 0 ? (React.createElement(Text, { color: Theme.warning }, "No mailboxes found")) : (React.createElement(SelectInput, { items: items, onHighlight: (item) => setSelectedMailbox(item.value), onSelect: (item) => setSelectedMailbox(item.value) })),
        React.createElement(Box, { marginTop: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1 },
            React.createElement(Text, { color: Theme.textDim },
                React.createElement(Text, { color: Theme.accent }, "B"),
                "ack",
                ' ',
                React.createElement(Text, { color: Theme.accent }, "C"),
                "reate",
                ' ',
                React.createElement(Text, { color: Theme.accent }, "E"),
                "dit",
                ' ',
                React.createElement(Text, { color: Theme.error }, "D"),
                "elete",
                ' ',
                React.createElement(Text, { color: Theme.info }, "P"),
                "assword"))));
}
//# sourceMappingURL=DomainDetailsScreen.js.map