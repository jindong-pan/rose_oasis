require("@nomicfoundation/hardhat-toolbox");
require("@oasisprotocol/sapphire-hardhat");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sapphire: {
      url: "https://testnet.sapphire.oasis.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    "sapphire-localnet": {
      url: "http://localhost:8545",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478c3a526db38f5f531db22b51dff"], // Default Hardhat account
    },
  },
};