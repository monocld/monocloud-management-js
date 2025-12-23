![MonoCloud Logo](https://raw.githubusercontent.com/monocloud/management-js/refs/heads/main/MonoCloud.png)

## Introduction

**MonoCloud Management Admin SDK for Javascript – programmatically manage apps, policies, configurations via the MonoCloud Management Admin APIs.**

[MonoCloud](https://www.monocloud.com?utm_source=github&utm_medium=management_js) is a modern, developer-friendly Identity & Access Management platform.

This SDK provides a full-featured, typed JavaScript client for interacting with the **MonoCloud Management APIs**, allowing you to automate tenant administration programmatically.

## 📘 Documentation

- **Documentation:** [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=management_js)

## Supported Platforms

- **Node.js >= 11.0.0**

## 🚀 Getting Started

### Requirements

- A **MonoCloud tenant**
- A **Management API key** with appropriate permissions

## 📦 Installation

```bash
npm install @monocloud/management-admin
```

## Usage

```typescript
const adminClient = MonoCloudAdminClient.init({
  domain: 'https://<your-tenant-domain>',
  apiKey: '<your-api-key>',
});
```

⚠️ **Security Note:** Do not hardcode your API key. It is recommended to load it from an environment variable. See: [`monocloud-admin-client`](https://github.com/monocloud/management-js/blob/main/packages/admin/src/monocloud-admin-client.ts)

### ✨ Usage Examples

The SDK closely mirrors the REST API structure — clients are organized by resource areas (clients, resources, etc.).

#### 🔍 Get all clients

```typescript
const result = await adminClient.clients.getAllClients(
    page: 1,
    size: 10,
    filter: "dashboard",
    sort: "name:1"
);
```

Explore further operations (clients, options, trust stores, etc.) using the same patterns.
See: [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=management_js)

Explore further operations at [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=management_js)

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: [https://www.monocloud.com/contact](https://www.monocloud.com/contact?utm_source=github&utm_medium=management_js)

## 📄 License

Licensed under the **MIT License**. See the included [`LICENSE`](https://github.com/monocloud/management-js/blob/main/LICENSE) file.
