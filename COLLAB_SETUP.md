# Getting Started with The Goods Development

Hey! Here's how to get set up with our Solana meme token project. Just paste this into Cursor and ask Claude to help you get everything installed and running.

## Current Setup
- Basic Solana token infrastructure (SPL Token)
- Development environment on Solana devnet
- 1 billion initial supply with 9 decimals
- Full mint and freeze authority capabilities

## Quick Start
1. Install prerequisites:
```bash
# Install Node.js (if you don't have it)
# On Mac: brew install node
# On Windows: Download from nodejs.org

# Install Solana CLI tools
sh -c "$(curl -sSfL https://release.solana.com/v1.17.17/install)"
```

2. Clone and setup:
```bash
git clone https://github.com/tedsmyth/the-goods.git
cd the-goods
npm install
```

## What's Ready
- `createToken.js`: Creates and mints the token on devnet
- Basic security setup (.gitignore for wallet)
- GitHub repo structure

## Key Files
- `createToken.js`: Main token creation script
- `README.md`: Project documentation
- `.gitignore`: Prevents committing sensitive files

## Next Steps We Need to Discuss
1. Token Economics
   - Distribution plan
   - Any special mechanics (fees, burns, etc.)

2. Launch Strategy
   - Which DEX to use
   - Initial liquidity
   - Marketing approach

3. Development Needs
   - Website/dApp requirements
   - Additional features
   - Testing strategy

## To Start Developing
Just tell Claude in Cursor:
"I'm working on the-goods Solana token project. Can you help me [what you want to do]?"

Claude will have context about the project structure and can help with:
- Setting up your development environment
- Making changes to the token code
- Adding new features
- Testing on devnet
- Creating new components

## Security Notes
- Never commit `wallet.json` or `tokenInfo.json`
- Keep your devnet wallet secure even though it's testnet
- We'll set up proper key management before mainnet

Ready to collaborate! Let me know what area you want to tackle first. 