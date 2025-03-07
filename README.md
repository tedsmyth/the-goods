# The Goods - Solana Meme Token

A meme token built on the Solana blockchain.

## Prerequisites

- Node.js
- Solana CLI tools
- NPM or Yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/tedsmyth/the-goods.git
```

2. Navigate to the project directory:
```bash
cd the-goods
```

3. Install dependencies:
```bash
npm install
```

4. Create your token on devnet:
```bash
node createToken.js
```

This will:
- Create a new token mint
- Mint 1 billion tokens
- Save the token information to `tokenInfo.json`

## Development

The token is initially created on Solana's devnet for testing. The mint authority and freeze authority are set to the wallet that creates the token.

## Token Details

- Decimals: 9 (same as SOL)
- Initial Supply: 1,000,000,000 tokens
- Network: Solana Devnet (initially)

## Contributing

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "Description of your changes"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

## Security

- The wallet.json file contains your private key - NEVER commit this file
- The token's mint authority can create more tokens
- The freeze authority can freeze token accounts

## License

This project is licensed under the MIT License - see the LICENSE file for details. 