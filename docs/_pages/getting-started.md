---
layout: page
title: Getting Started with Oasis Network
permalink: /getting-started/
---

# Getting Started with Oasis Network

## What is Oasis Network?

Oasis Network is a blockchain platform focused on privacy-preserving decentralized applications. It features:

- **Confidential Smart Contracts**: Through the Sapphire ParaTime
- **High Performance**: Fast transaction processing
- **Privacy by Default**: Encrypted state and computations

## Setting Up Development Environment

### Prerequisites
- Node.js 16+
- npm
- Git

### Installing Hardhat
```bash
npm install -g hardhat
```

### Creating a New Project
```bash
npx hardhat init
# Choose JavaScript project
```

### Adding Oasis Support
Install the Sapphire Hardhat plugin:
```bash
npm install --save-dev @oasisprotocol/sapphire-hardhat
```

Update `hardhat.config.js`:
```javascript
require("@oasisprotocol/sapphire-hardhat");

module.exports = {
  solidity: "0.8.19",
  networks: {
    sapphire: {
      url: "https://testnet.sapphire.oasis.io",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

## Next Steps
- Write your first smart contract
- Test locally
- Deploy to testnet