/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Domains list screen component
 */
import React, { useState, useEffect } from "react";
import { Box, Text, useInput } from "ink";
import Spinner from "ink-spinner";
import SelectInput from "ink-select-input";
import { MigaduAPI } from "../api/MigaduAPI.js";
import { ConfigManager } from "../config/ConfigManager.js";
import { Theme } from "../theme.js";
export function DomainsScreen({ onSelectDomain }) {
    const [domains, setDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchDomains = async () => {
        try {
            setLoading(true);
            const config = ConfigManager.load();
            const api = new MigaduAPI(config.email, config.apiKey);
            const data = await api.getDomains();
            setDomains(data);
            setError(null);
        }
        catch (err) {
            setError(`Failed to fetch domains: ${err}`);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchDomains();
    }, []);
    useInput((input) => {
        if (input === "r" || input === "R") {
            fetchDomains();
        }
    });
    if (loading) {
        return (React.createElement(Box, { flexDirection: "column", padding: 1 },
            React.createElement(Text, { color: Theme.primary },
                React.createElement(Spinner, { type: "dots" }),
                " Loading domains...")));
    }
    if (error) {
        return (React.createElement(Box, { flexDirection: "column", padding: 1 },
            React.createElement(Text, { color: Theme.error },
                "Error: ",
                error),
            React.createElement(Text, { color: Theme.textDim }, "Press R to retry")));
    }
    const items = domains.map((domain) => ({
        label: `${domain.name.padEnd(30)} | State: ${domain.state || "unknown"}`,
        value: domain,
    }));
    return (React.createElement(Box, { flexDirection: "column", padding: 1 },
        React.createElement(Box, { borderStyle: "round", borderColor: Theme.primary, paddingX: 2, marginBottom: 1 },
            React.createElement(Text, { color: Theme.primary, bold: true }, "\uD83D\uDCE7 Migadu CLI TUI - Domains")),
        React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, { color: Theme.textMuted }, "Select a domain to manage mailboxes")),
        domains.length === 0 ? (React.createElement(Text, { color: Theme.warning }, "No domains found")) : (React.createElement(SelectInput, { items: items, onSelect: (item) => onSelectDomain(item.value) })),
        React.createElement(Box, { marginTop: 1, borderStyle: "single", borderColor: Theme.border, paddingX: 1 },
            React.createElement(Text, { color: Theme.textDim },
                React.createElement(Text, { color: Theme.accent }, "Q"),
                "uit  ",
                React.createElement(Text, { color: Theme.accent }, "R"),
                "efresh  ",
                React.createElement(Text, { color: Theme.accent }, "Enter"),
                "Select"))));
}
//# sourceMappingURL=DomainsScreen.js.map