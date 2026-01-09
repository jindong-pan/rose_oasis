# ROSE Oasis Web3 Project

This project is focused on web3 development and research on the Oasis Network, specifically targeting the Sapphire ParaTime for confidential smart contracts. As a beginner, this workspace will be used for learning, testing, and building decentralized applications (dApps) with privacy-preserving features.

## Getting Started

This project uses Hardhat as the development framework for compiling, testing, and deploying Solidity smart contracts on Oasis Network.

### Prerequisites
- Node.js (version 16 or later)
- npm (comes with Node.js)

### Setup
1. Install dependencies: `npm install`
2. Compile contracts: `npx hardhat compile`
3. Run tests: `npx hardhat test`
4. Start local network: `npx hardhat node`
5. Deploy to testnet: `npx hardhat run scripts/deploy.js --network sapphire`

## Project Structure
- `contracts/`: Solidity smart contracts
- `test/`: Test files
- `scripts/`: Deployment and utility scripts
- `docs/`: Documentation site built with Jekyll for GitHub Pages
- `hardhat.config.js`: Hardhat configuration

## Documentation

The `docs/` folder contains a Jekyll-based documentation site that can be hosted on GitHub Pages.

### Enabling GitHub Pages

To enable GitHub Pages for this documentation site:

1. Go to your repository on GitHub.
2. Click on **Settings** (the gear icon).
3. Scroll down to the **Pages** section in the left sidebar.
4. Under **Source**, select **Deploy from a branch**.
5. Choose the branch **main** and the folder **/docs**.
6. Click **Save**.

GitHub will automatically build and deploy your Jekyll site. The site will be available at `https://<username>.github.io/<repository-name>`, in this case `https://jindong-pan.github.io/rose_oasis`.

Visit [https://jindong-pan.github.io/rose_oasis](https://jindong-pan.github.io/rose_oasis) to view the live site.

To work on the documentation locally:
1. Install Ruby and Bundler
2. `cd docs && bundle install`
3. `bundle exec jekyll serve`
4. Open http://localhost:4000/rose_oasis/

## Resources
- [Oasis Documentation](https://docs.oasis.dev/)
- [Sapphire Getting Started](https://docs.oasis.io/dapp/sapphire/getting-started/)
- [Hardhat Documentation](https://hardhat.org/docs)