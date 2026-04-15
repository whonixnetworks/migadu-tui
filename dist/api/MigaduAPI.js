/**
 * migadu-tui — Migadu CLI TUI Manager
 * author: greedy
 * version: 0.2.0
 *
 * Migadu API client
 */
import axios from "axios";
import http from "http";
import https from "https";
const API_BASE_URL = "https://api.migadu.com/v1/";
const API_TIMEOUT = 30000;
export class MigaduAPI {
    client;
    constructor(email, apiKey) {
        this.client = axios.create({
            baseURL: API_BASE_URL,
            timeout: API_TIMEOUT,
            auth: {
                username: email,
                password: apiKey,
            },
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            httpAgent: new http.Agent({
                family: 4,
            }),
            httpsAgent: new https.Agent({
                family: 4,
            }),
        });
    }
    // shouldn't receive invalid responses, but handle gracefully if API changes
    async getDomains() {
        try {
            const response = await this.client.get("domains");
            const data = response.data;
            // Handle case where API returns list directly
            if (Array.isArray(data)) {
                return data;
            }
            // Handle case where API returns dict with 'domains' key
            if (data && typeof data === "object" && "domains" in data) {
                return data.domains;
            }
            // Return empty list for unexpected format
            console.warn(`Unexpected domains response format: ${typeof data}`);
            return [];
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(`Failed to fetch domains: ${errorMessage}`);
            throw new Error(`Failed to fetch domains: ${errorMessage}`);
        }
    }
    async getDomain(domainName) {
        try {
            const response = await this.client.get(`domains/${domainName}`);
            const data = response.data;
            // Handle case where API returns dict with 'domain' key
            if (data && typeof data === "object" && "domain" in data) {
                return data.domain;
            }
            // Return result directly if it's already a Domain
            return data;
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(`Failed to fetch domain ${domainName}: ${errorMessage}`);
            throw new Error(`Failed to fetch domain ${domainName}: ${errorMessage}`);
        }
    }
    async getMailboxes(domainName) {
        try {
            const response = await this.client.get(`domains/${domainName}/mailboxes`);
            const data = response.data;
            // Handle case where API returns list directly
            if (Array.isArray(data)) {
                return data;
            }
            // Handle case where API returns dict with 'mailboxes' key
            if (data && typeof data === "object" && "mailboxes" in data) {
                return data.mailboxes;
            }
            // Return empty list for unexpected format
            console.warn(`Unexpected mailboxes response format: ${typeof data}`);
            return [];
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(`Failed to fetch mailboxes for ${domainName}: ${errorMessage}`);
            throw new Error(`Failed to fetch mailboxes for ${domainName}: ${errorMessage}`);
        }
    }
    async getMailbox(domainName, localPart) {
        const response = await this.client.get(`domains/${domainName}/mailboxes/${localPart}`);
        return response.data;
    }
    async createMailbox(domainName, data) {
        const response = await this.client.post(`domains/${domainName}/mailboxes`, data);
        return response.data;
    }
    async updateMailbox(domainName, localPart, data) {
        const response = await this.client.put(`domains/${domainName}/mailboxes/${localPart}`, data);
        return response.data;
    }
    async deleteMailbox(domainName, localPart) {
        await this.client.delete(`domains/${domainName}/mailboxes/${localPart}`);
    }
}
//# sourceMappingURL=MigaduAPI.js.map