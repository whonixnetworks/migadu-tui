/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Main App component - handles screen navigation
 */
import React, { useState } from "react";
import { Box } from "ink";
import { DomainsScreen } from "./DomainsScreen.js";
import { DomainDetailsScreen } from "./DomainDetailsScreen.js";
import { CreateMailboxScreen } from "./CreateMailboxScreen.js";
import { EditMailboxScreen } from "./EditMailboxScreen.js";
import { DeleteConfirmScreen } from "./DeleteConfirmScreen.js";
import { ResetPasswordScreen } from "./ResetPasswordScreen.js";
import { MessageScreen } from "./MessageScreen.js";
export function App() {
    const [currentScreen, setCurrentScreen] = useState("domains");
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [selectedMailbox, setSelectedMailbox] = useState(null);
    const [message, setMessage] = useState(null);
    const showMessage = (text, type = "success") => {
        setMessage({ text, type });
        setCurrentScreen("message");
    };
    const renderScreen = () => {
        switch (currentScreen) {
            case "domains":
                return (React.createElement(DomainsScreen, { onSelectDomain: (domain) => {
                        setSelectedDomain(domain);
                        setCurrentScreen("domain-details");
                    } }));
            case "domain-details":
                if (!selectedDomain)
                    return null;
                return (React.createElement(DomainDetailsScreen, { domain: selectedDomain, onBack: () => setCurrentScreen("domains"), onCreateMailbox: () => setCurrentScreen("create-mailbox"), onEditMailbox: (mailbox) => {
                        setSelectedMailbox(mailbox);
                        setCurrentScreen("edit-mailbox");
                    }, onDeleteMailbox: (mailbox) => {
                        setSelectedMailbox(mailbox);
                        setCurrentScreen("delete-confirm");
                    }, onResetPassword: (mailbox) => {
                        setSelectedMailbox(mailbox);
                        setCurrentScreen("reset-password");
                    } }));
            case "create-mailbox":
                if (!selectedDomain)
                    return null;
                return (React.createElement(CreateMailboxScreen, { domainName: selectedDomain.name, onBack: () => setCurrentScreen("domain-details"), onSuccess: (msg) => showMessage(msg, "success"), onError: (msg) => showMessage(msg, "error") }));
            case "edit-mailbox":
                if (!selectedDomain || !selectedMailbox)
                    return null;
                return (React.createElement(EditMailboxScreen, { domainName: selectedDomain.name, mailbox: selectedMailbox, onBack: () => setCurrentScreen("domain-details"), onSuccess: (msg) => showMessage(msg, "success"), onError: (msg) => showMessage(msg, "error") }));
            case "delete-confirm":
                if (!selectedDomain || !selectedMailbox)
                    return null;
                return (React.createElement(DeleteConfirmScreen, { domainName: selectedDomain.name, mailbox: selectedMailbox, onBack: () => setCurrentScreen("domain-details"), onSuccess: (msg) => showMessage(msg, "success"), onError: (msg) => showMessage(msg, "error") }));
            case "reset-password":
                if (!selectedDomain || !selectedMailbox)
                    return null;
                return (React.createElement(ResetPasswordScreen, { domainName: selectedDomain.name, mailbox: selectedMailbox, onBack: () => setCurrentScreen("domain-details"), onSuccess: (msg) => showMessage(msg, "success"), onError: (msg) => showMessage(msg, "error") }));
            case "message":
                return (React.createElement(MessageScreen, { message: message?.text || "", type: message?.type || "success", onContinue: () => setCurrentScreen("domain-details") }));
            default:
                return null;
        }
    };
    return React.createElement(Box, { flexDirection: "column" }, renderScreen());
}
//# sourceMappingURL=App.js.map