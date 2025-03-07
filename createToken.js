const { 
  Connection, 
  Keypair, 
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
} = require('@solana/web3.js');
const { 
  createMint,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} = require('@solana/spl-token');
const fs = require('fs');

// Configuration
const MINT_DECIMALS = 9; // Same as SOL
const TOTAL_SUPPLY = 1_000_000_000; // 1 billion tokens

async function createMemeToken() {
  try {
    // Load wallet
    const walletKeyPair = Keypair.fromSecretKey(
      new Uint8Array(JSON.parse(fs.readFileSync('wallet.json')))
    );

    // Connect to devnet
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

    console.log('Requesting airdrop for wallet...');
    const airdropSignature = await connection.requestAirdrop(
      walletKeyPair.publicKey,
      1000000000 // 1 SOL
    );
    await connection.confirmTransaction(airdropSignature);

    console.log('Creating token mint...');
    const mint = await createMint(
      connection,
      walletKeyPair, // Payer
      walletKeyPair.publicKey, // Mint authority
      walletKeyPair.publicKey, // Freeze authority
      MINT_DECIMALS
    );

    console.log('Token mint created:', mint.toBase58());

    // Create token account
    console.log('Creating token account...');
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      walletKeyPair,
      mint,
      walletKeyPair.publicKey
    );

    console.log('Token account:', tokenAccount.address.toBase58());

    // Mint tokens
    console.log('Minting tokens...');
    await mintTo(
      connection,
      walletKeyPair,
      mint,
      tokenAccount.address,
      walletKeyPair,
      TOTAL_SUPPLY * (10 ** MINT_DECIMALS)
    );

    console.log('Successfully created meme token!');
    console.log('Mint address:', mint.toBase58());
    console.log('Token account:', tokenAccount.address.toBase58());
    
    // Save token info
    const tokenInfo = {
      mintAddress: mint.toBase58(),
      tokenAccount: tokenAccount.address.toBase58(),
      decimals: MINT_DECIMALS,
      totalSupply: TOTAL_SUPPLY
    };
    
    fs.writeFileSync('tokenInfo.json', JSON.stringify(tokenInfo, null, 2));
    console.log('Token info saved to tokenInfo.json');

  } catch (error) {
    console.error('Error creating token:', error);
  }
}

createMemeToken(); 