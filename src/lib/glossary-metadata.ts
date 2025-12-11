// src/lib/glossary-metadata.ts
/**
 * Glossary metadata for AEO (AI Engine Optimization)
 * This file provides comprehensive metadata for all glossary terms
 * to improve visibility in AI search engines like ChatGPT, Claude, Gemini, and Perplexity
 */

export interface GlossaryTermMeta {
  title: string;
  description: string;
  keywords: string[];
  category?: string;
  relatedTerms?: string[];
  quickFacts?: string[];
  datePublished?: string;
  lastModified?: string;
}

export const glossaryMetadata: Record<string, GlossaryTermMeta> = {
  'address': {
    title: 'Bitcoin Address',
    description: 'A Bitcoin address is a unique identifier used to receive Bitcoin. Learn about address types, how they work, and why using a new address for each transaction enhances security and privacy.',
    keywords: ['bitcoin address', 'crypto address', 'receive bitcoin', 'bitcoin wallet address', 'address types', 'bitcoin security'],
    category: 'Wallet Basics',
    relatedTerms: ['wallet', 'private-key', 'utxo'],
    quickFacts: [
      'Each address should ideally be used only once for privacy',
      'There are different address formats: Legacy, SegWit, and Taproot',
      'Addresses are derived from public keys using cryptographic hashing'
    ]
  },
  'bip32': {
    title: 'BIP32 - Hierarchical Deterministic Wallets',
    description: 'BIP32 (Bitcoin Improvement Proposal 32) defines HD wallets that generate an entire tree of key pairs from a single master seed. Learn how HD wallets enable unlimited addresses from one backup.',
    keywords: ['BIP32', 'HD wallet', 'hierarchical deterministic wallet', 'master seed', 'key derivation', 'bitcoin standard'],
    category: 'Wallet Standards',
    relatedTerms: ['bip39', 'bip44', 'passphrase', 'private-key'],
    quickFacts: [
      'Introduced in 2012 by Pieter Wuille',
      'Enables creating billions of addresses from one seed',
      'Foundation for modern Bitcoin wallets'
    ]
  },
  'bip39': {
    title: 'BIP39 - Mnemonic Phrases Explained',
    description: 'BIP39 is the standard for converting a random seed into a human-readable mnemonic phrase of 12-24 words. Learn how mnemonic phrases work, why they\'re secure, and how to back up your Bitcoin wallet safely.',
    keywords: ['BIP39', 'mnemonic phrase', 'seed phrase', '12 word phrase', '24 word phrase', 'wallet backup', 'recovery phrase'],
    category: 'Wallet Standards',
    relatedTerms: ['bip32', 'bip44', 'passphrase', 'wallet'],
    quickFacts: [
      'Uses a standardized list of 2,048 words',
      '12 words provide 128 bits of entropy',
      '24 words provide 256 bits of entropy',
      'The final word includes a checksum for error detection'
    ]
  },
  'bip44': {
    title: 'BIP44 - Multi-Account Hierarchy Standard',
    description: 'BIP44 extends BIP32 by defining a standard hierarchical structure for organizing multiple accounts and cryptocurrencies within a single HD wallet. Learn about derivation paths and account organization.',
    keywords: ['BIP44', 'multi-account wallet', 'derivation path', 'account hierarchy', 'crypto wallet standard'],
    category: 'Wallet Standards',
    relatedTerms: ['bip32', 'bip39', 'descriptor-wallet'],
    quickFacts: [
      'Defines the path structure: m/44\'/0\'/0\'/0/0',
      'Enables managing multiple cryptocurrencies from one seed',
      'Standard for most modern wallets'
    ]
  },
  'bit': {
    title: 'Bit - Bitcoin Sub-Unit',
    description: 'A bit is a user-friendly sub-unit of Bitcoin where 1 BTC equals 1,000,000 bits. Learn how bits make dealing with smaller Bitcoin amounts easier to understand and use in everyday transactions.',
    keywords: ['bit', 'bitcoin unit', 'satoshi', 'BTC denomination', 'bitcoin measurement'],
    category: 'Bitcoin Basics',
    relatedTerms: ['btc', 'bitcoin'],
    quickFacts: [
      '1 BTC = 1,000,000 bits',
      '1 bit = 100 satoshis',
      'Makes small amounts easier to understand'
    ]
  },
  'bitcoin': {
    title: 'What is Bitcoin?',
    description: 'Bitcoin is a decentralized digital currency and peer-to-peer network that enables borderless transactions without central authority. Learn about Bitcoin\'s history, how it works, and why it matters.',
    keywords: ['bitcoin', 'cryptocurrency', 'digital currency', 'decentralized money', 'peer-to-peer', 'blockchain', 'BTC'],
    category: 'Bitcoin Basics',
    relatedTerms: ['blockchain', 'btc', 'mining', 'p2p'],
    quickFacts: [
      'Created by Satoshi Nakamoto in 2009',
      'Maximum supply of 21 million bitcoins',
      'First decentralized cryptocurrency',
      'Operates without central authority or banks'
    ]
  },
  'block': {
    title: 'Bitcoin Block Explained',
    description: 'A block is a permanent record in the blockchain containing a batch of confirmed transactions. Learn how blocks are created, validated, and linked together every 10 minutes.',
    keywords: ['bitcoin block', 'blockchain block', 'block height', 'block reward', 'mining'],
    category: 'Blockchain Technology',
    relatedTerms: ['blockchain', 'mining', 'confirmation', 'merkle-tree'],
    quickFacts: [
      'New block mined approximately every 10 minutes',
      'Contains 1MB to 4MB of transaction data',
      'Each block references the previous block\'s hash'
    ]
  },
  'blockchain': {
    title: 'Blockchain Technology Explained',
    description: 'The blockchain is a public, decentralized, and immutable ledger of every Bitcoin transaction. Learn how blockchain technology ensures security, transparency, and consensus without central authority.',
    keywords: ['blockchain', 'distributed ledger', 'immutable ledger', 'blockchain technology', 'bitcoin ledger'],
    category: 'Blockchain Technology',
    relatedTerms: ['block', 'mining', 'bitcoin', 'merkle-tree'],
    quickFacts: [
      'Every transaction is permanently recorded',
      'Secured through cryptographic hashing',
      'Maintained by thousands of independent nodes',
      'Impossible to alter past transactions'
    ]
  },
  'btc': {
    title: 'BTC - Bitcoin Ticker Symbol',
    description: 'BTC is the ticker symbol and most common abbreviation for Bitcoin. Learn about Bitcoin denominations, how BTC is used in exchanges, and the difference between Bitcoin and bitcoin.',
    keywords: ['BTC', 'bitcoin ticker', 'bitcoin symbol', 'bitcoin abbreviation', 'cryptocurrency ticker'],
    category: 'Bitcoin Basics',
    relatedTerms: ['bitcoin', 'bit'],
    quickFacts: [
      'BTC is the standard ticker symbol on exchanges',
      '1 BTC = 100,000,000 satoshis',
      'Capital "B" refers to the network, lowercase "b" refers to the currency'
    ]
  },
  'cltv': {
    title: 'CLTV - CheckLockTimeVerify Explained',
    description: 'CLTV (CheckLockTimeVerify) is a Bitcoin script opcode that enables time-locked transactions. Learn how CLTV prevents spending until a specific block height or timestamp is reached.',
    keywords: ['CLTV', 'CheckLockTimeVerify', 'timelock', 'bitcoin script', 'time-locked transaction'],
    category: 'Advanced Bitcoin',
    relatedTerms: ['csv', 'htlc', 'miniscript'],
    quickFacts: [
      'Introduced via BIP65 in 2015',
      'Enables absolute time locks',
      'Used in Lightning Network and smart contracts'
    ]
  },
  'coin-selection': {
    title: 'Bitcoin Coin Selection Strategies',
    description: 'Coin selection is the process of choosing which UTXOs to spend in a transaction. Learn about different strategies to optimize for fees, privacy, and wallet management.',
    keywords: ['coin selection', 'UTXO selection', 'bitcoin fee optimization', 'privacy strategies', 'wallet management'],
    category: 'Transactions',
    relatedTerms: ['utxo', 'fee-rate', 'transaction-privacy'],
    quickFacts: [
      'Different algorithms: First-In-First-Out, Last-In-First-Out, Branch-and-Bound',
      'Affects transaction fees and privacy',
      'Can consolidate or avoid dust'
    ]
  },
  'coinjoin': {
    title: 'CoinJoin - Bitcoin Privacy Technique',
    description: 'CoinJoin is a privacy-enhancing technique where multiple users combine their transactions into one collaborative transaction. Learn how CoinJoin improves Bitcoin privacy and breaks chain analysis.',
    keywords: ['CoinJoin', 'bitcoin privacy', 'transaction privacy', 'bitcoin mixing', 'collaborative transaction'],
    category: 'Privacy',
    relatedTerms: ['payjoin', 'transaction-privacy', 'utxo'],
    quickFacts: [
      'Breaks the common input ownership heuristic',
      'No trusted third party required',
      'Implemented in Wasabi Wallet, Samourai Wallet, and JoinMarket'
    ]
  },
  'confirmation': {
    title: 'Bitcoin Transaction Confirmations',
    description: 'A confirmation occurs when a transaction is included in a block on the blockchain. Learn why confirmations matter, how many you need, and what affects confirmation time.',
    keywords: ['bitcoin confirmation', 'transaction confirmation', 'block confirmation', 'transaction security'],
    category: 'Transactions',
    relatedTerms: ['block', 'mining', 'mempool'],
    quickFacts: [
      '1 confirmation = included in 1 block',
      '6 confirmations considered fully secure',
      'Each confirmation takes ~10 minutes on average'
    ]
  },
  'cpfp': {
    title: 'CPFP - Child Pays for Parent',
    description: 'CPFP (Child Pays for Parent) is a fee bumping technique where a high-fee transaction spending an unconfirmed transaction incentivizes miners to include both. Learn how CPFP speeds up stuck transactions.',
    keywords: ['CPFP', 'child pays for parent', 'fee bumping', 'transaction acceleration', 'stuck transaction'],
    category: 'Transactions',
    relatedTerms: ['rbf', 'fee-rate', 'mempool'],
    quickFacts: [
      'Receiver can speed up incoming transactions',
      'Works by creating a child transaction with high fees',
      'Alternative to RBF'
    ]
  },
  'cryptography': {
    title: 'Cryptography in Bitcoin',
    description: 'Cryptography is the mathematical foundation of Bitcoin, used to secure wallets, sign transactions, and ensure blockchain integrity. Learn about public-key cryptography, hashing, and digital signatures.',
    keywords: ['cryptography', 'bitcoin security', 'public key cryptography', 'digital signatures', 'hash functions'],
    category: 'Technology',
    relatedTerms: ['private-key', 'signature', 'schnorr-signature'],
    quickFacts: [
      'Uses elliptic curve cryptography (secp256k1)',
      'SHA-256 hashing for proof-of-work',
      'ECDSA and Schnorr for digital signatures'
    ]
  },
  'csv': {
    title: 'CSV - CheckSequenceVerify Explained',
    description: 'CSV (CheckSequenceVerify) is a Bitcoin script opcode that enforces relative timelocks. Learn how CSV enables time-based spending conditions and advanced Bitcoin contracts.',
    keywords: ['CSV', 'CheckSequenceVerify', 'relative timelock', 'bitcoin script', 'smart contracts'],
    category: 'Advanced Bitcoin',
    relatedTerms: ['cltv', 'htlc', 'lightning-network'],
    quickFacts: [
      'Introduced via BIP112 in 2016',
      'Enables relative time locks',
      'Essential for Lightning Network penalty transactions'
    ]
  },
  'descriptor-wallet': {
    title: 'Descriptor Wallet - Modern Bitcoin Wallets',
    description: 'Descriptor wallets use output script descriptors to precisely define how to derive addresses and create spending conditions. Learn about the modern standard for Bitcoin wallet implementation.',
    keywords: ['descriptor wallet', 'output descriptors', 'modern bitcoin wallet', 'wallet standards'],
    category: 'Wallet Technology',
    relatedTerms: ['bip32', 'miniscript', 'psbt'],
    quickFacts: [
      'More flexible than BIP44',
      'Supports complex spending conditions',
      'Used in Bitcoin Core since v0.21'
    ]
  },
  'double-spend': {
    title: 'Double Spend Attack Explained',
    description: 'A double spend is an attack where the same bitcoins are spent in multiple transactions. Learn how Bitcoin\'s consensus mechanism prevents double spending and ensures transaction finality.',
    keywords: ['double spend', 'double spending attack', 'bitcoin security', '51% attack', 'consensus'],
    category: 'Security',
    relatedTerms: ['confirmation', 'mining', 'blockchain'],
    quickFacts: [
      'Prevented by blockchain consensus',
      'Requires majority hash power to execute',
      'More confirmations = lower risk'
    ]
  },
  'dust-limit': {
    title: 'Bitcoin Dust Limit Explained',
    description: 'The dust limit is the minimum amount of bitcoin that makes economic sense to transact. Learn what constitutes dust, why it matters, and how it affects UTXO management.',
    keywords: ['dust limit', 'bitcoin dust', 'minimum transaction', 'UTXO management', 'transaction economics'],
    category: 'Transactions',
    relatedTerms: ['utxo', 'fee-rate', 'coin-selection'],
    quickFacts: [
      'Typically 546 satoshis for standard outputs',
      'Costs more to spend than its value',
      'Can pollute the UTXO set'
    ]
  },
  'fee-rate': {
    title: 'Bitcoin Fee Rate (sat/vB)',
    description: 'Fee rate measures the amount paid per unit of transaction data in satoshis per virtual byte (sat/vB). Learn how fee rates work, how miners prioritize transactions, and how to estimate optimal fees.',
    keywords: ['fee rate', 'sat/vB', 'transaction fee', 'bitcoin fees', 'miner fees', 'satoshis per byte'],
    category: 'Transactions',
    relatedTerms: ['mempool', 'confirmation', 'rbf', 'cpfp'],
    quickFacts: [
      'Measured in satoshis per virtual byte (sat/vB)',
      'Higher fee rate = faster confirmation',
      'Fee rates fluctuate with network demand'
    ]
  },
  'hash-rate': {
    title: 'Bitcoin Hash Rate Explained',
    description: 'Hash rate is the total computational power used to mine Bitcoin and process transactions. Learn how hash rate affects network security, mining difficulty, and blockchain resilience.',
    keywords: ['hash rate', 'mining power', 'network security', 'mining difficulty', 'computational power'],
    category: 'Mining',
    relatedTerms: ['mining', 'block', 'double-spend'],
    quickFacts: [
      'Measured in hashes per second (H/s)',
      'Higher hash rate = more secure network',
      'Difficulty adjusts every 2016 blocks'
    ]
  },
  'htlc': {
    title: 'HTLC - Hashed Timelock Contract',
    description: 'HTLC (Hashed Timelock Contract) enables conditional payments based on cryptographic proof and time constraints. Learn how HTLCs power the Lightning Network and atomic swaps.',
    keywords: ['HTLC', 'hashed timelock contract', 'lightning network', 'atomic swap', 'payment channels'],
    category: 'Advanced Bitcoin',
    relatedTerms: ['lightning-network', 'cltv', 'csv'],
    quickFacts: [
      'Combines hash locks and time locks',
      'Enables trustless cross-chain swaps',
      'Core primitive of Lightning Network'
    ]
  },
  'lightning-network': {
    title: 'Lightning Network - Bitcoin Layer 2',
    description: 'The Lightning Network is a Layer 2 payment protocol that enables instant, low-cost Bitcoin transactions through off-chain payment channels. Learn how Lightning scales Bitcoin for everyday use.',
    keywords: ['lightning network', 'layer 2', 'payment channels', 'instant bitcoin', 'bitcoin scalability'],
    category: 'Layer 2',
    relatedTerms: ['htlc', 'splicing', 'sidechain'],
    quickFacts: [
      'Enables millions of transactions per second',
      'Transactions settle instantly',
      'Fees are typically less than 1 satoshi',
      'Network of payment channels'
    ]
  },
  'mempool': {
    title: 'Bitcoin Mempool Explained',
    description: 'The mempool is a waiting area where unconfirmed Bitcoin transactions are held before inclusion in a block. Learn how the mempool works, transaction prioritization, and fee estimation.',
    keywords: ['mempool', 'memory pool', 'unconfirmed transactions', 'transaction queue', 'fee estimation'],
    category: 'Transactions',
    relatedTerms: ['confirmation', 'fee-rate', 'mining'],
    quickFacts: [
      'Each node maintains its own mempool',
      'Transactions sorted by fee rate',
      'Size varies with network demand'
    ]
  },
  'merkle-tree': {
    title: 'Merkle Tree in Bitcoin',
    description: 'A Merkle tree is a cryptographic data structure that efficiently summarizes and verifies all transactions in a block. Learn how Merkle trees enable light clients and Simplified Payment Verification.',
    keywords: ['merkle tree', 'merkle root', 'SPV', 'bitcoin data structure', 'transaction verification'],
    category: 'Technology',
    relatedTerms: ['block', 'blockchain', 'cryptography'],
    quickFacts: [
      'Binary tree of transaction hashes',
      'Merkle root stored in block header',
      'Enables SPV wallets to verify transactions'
    ]
  },
  'mining': {
    title: 'Bitcoin Mining Explained',
    description: 'Mining is the process of using computational power to solve complex puzzles, confirm transactions, and create new bitcoins. Learn how mining works, why it matters, and what miners do.',
    keywords: ['bitcoin mining', 'proof of work', 'mining rewards', 'block rewards', 'mining difficulty'],
    category: 'Mining',
    relatedTerms: ['hash-rate', 'block', 'confirmation'],
    quickFacts: [
      'Current block reward: 3.125 BTC (as of 2024)',
      'Difficulty adjusts every 2016 blocks (~2 weeks)',
      'Secures the network through proof-of-work'
    ]
  },
  'miniscript': {
    title: 'Miniscript - Structured Bitcoin Scripts',
    description: 'Miniscript is a language for writing Bitcoin Scripts in a structured, analyzable way. Learn how Miniscript makes complex spending conditions easier to create, verify, and compose.',
    keywords: ['miniscript', 'bitcoin script', 'smart contracts', 'spending conditions', 'script language'],
    category: 'Advanced Bitcoin',
    relatedTerms: ['descriptor-wallet', 'taproot', 'psbt'],
    quickFacts: [
      'Developed by Pieter Wuille, Andrew Poelstra, and Sanket Kanjalkar',
      'Enables formal analysis of scripts',
      'Supported in Bitcoin Core and hardware wallets'
    ]
  },
  'p2p': {
    title: 'P2P - Peer-to-Peer Network',
    description: 'Bitcoin operates on a peer-to-peer (P2P) network where participants interact directly without a central authority. Learn how P2P architecture enables decentralization and censorship resistance.',
    keywords: ['P2P', 'peer-to-peer', 'decentralized network', 'bitcoin network', 'distributed system'],
    category: 'Network',
    relatedTerms: ['bitcoin', 'blockchain', 'mining'],
    quickFacts: [
      'No central server or authority',
      'Thousands of independent nodes',
      'Each node validates all transactions'
    ]
  },
  'passphrase': {
    title: 'Bitcoin Passphrase (Seed Phrase)',
    description: 'A passphrase (seed phrase) is a human-readable backup of your wallet\'s private keys, typically 12-24 words. Learn how BIP39 passphrases work, how to store them securely, and why they\'re essential.',
    keywords: ['passphrase', 'seed phrase', 'recovery phrase', 'BIP39', 'wallet backup', 'mnemonic'],
    category: 'Wallet Security',
    relatedTerms: ['bip39', 'bip32', 'private-key', 'wallet'],
    quickFacts: [
      'Should be stored offline and securely',
      'Never share with anyone',
      'Can restore entire wallet',
      'Most wallets use BIP39 standard'
    ]
  },
  'payjoin': {
    title: 'PayJoin - Collaborative Transactions',
    description: 'PayJoin is a privacy-enhancing transaction type where the receiver contributes UTXOs as inputs. Learn how PayJoin breaks chain analysis heuristics and improves Bitcoin privacy.',
    keywords: ['PayJoin', 'P2EP', 'transaction privacy', 'collaborative transaction', 'chain analysis'],
    category: 'Privacy',
    relatedTerms: ['coinjoin', 'transaction-privacy', 'utxo'],
    quickFacts: [
      'Also known as P2EP (Pay-to-EndPoint)',
      'Breaks common input ownership assumption',
      'More efficient than traditional CoinJoin'
    ]
  },
  'private-key': {
    title: 'Bitcoin Private Key Explained',
    description: 'A private key is the secret cryptographic key that proves ownership and allows spending of bitcoins. Learn how private keys work, why they must be kept secure, and their relationship to public keys.',
    keywords: ['private key', 'secret key', 'bitcoin security', 'cryptographic key', 'wallet security'],
    category: 'Security',
    relatedTerms: ['passphrase', 'address', 'signature', 'cryptography'],
    quickFacts: [
      '256-bit random number',
      'Must never be shared or exposed',
      'Public keys derived from private keys',
      '"Not your keys, not your coins"'
    ]
  },
  'psbt': {
    title: 'PSBT - Partially Signed Bitcoin Transaction',
    description: 'PSBT (Partially Signed Bitcoin Transaction) is a standardized format that allows multiple parties or devices to collaborate on creating and signing transactions. Learn how PSBTs enable hardware wallets and multisig.',
    keywords: ['PSBT', 'partially signed transaction', 'hardware wallet', 'multisig', 'transaction format'],
    category: 'Advanced Bitcoin',
    relatedTerms: ['signature', 'miniscript', 'descriptor-wallet'],
    quickFacts: [
      'Defined in BIP174',
      'Enables coordination between wallets',
      'Essential for hardware wallet workflows',
      'Supports multisig and complex scripts'
    ]
  },
  'rbf': {
    title: 'RBF - Replace-by-Fee',
    description: 'RBF (Replace-by-Fee) allows an unconfirmed transaction to be replaced with a new version paying higher fees. Learn how RBF works, when to use it, and how it speeds up stuck transactions.',
    keywords: ['RBF', 'replace-by-fee', 'fee bumping', 'transaction replacement', 'stuck transaction'],
    category: 'Transactions',
    relatedTerms: ['cpfp', 'fee-rate', 'mempool'],
    quickFacts: [
      'Defined in BIP125',
      'Transaction must signal RBF opt-in',
      'Sender can increase fees before confirmation',
      'Alternative to CPFP'
    ]
  },
  'schnorr-signature': {
    title: 'Schnorr Signatures in Bitcoin',
    description: 'Schnorr signatures are a type of digital signature adopted with Taproot that enable signature aggregation and improved privacy. Learn how Schnorr signatures enhance Bitcoin\'s capabilities.',
    keywords: ['Schnorr signature', 'Taproot', 'signature aggregation', 'Schnorr', 'digital signature'],
    category: 'Technology',
    relatedTerms: ['taproot', 'signature', 'cryptography'],
    quickFacts: [
      'Enabled by Taproot upgrade in 2021',
      'More efficient than ECDSA',
      'Enables signature aggregation',
      'Improves privacy and scalability'
    ]
  },
  'scriptpubkey-scriptsig': {
    title: 'ScriptPubKey and ScriptSig Explained',
    description: 'ScriptPubKey and ScriptSig are the two halves of Bitcoin\'s programmable transaction system. Learn how these scripts define spending conditions and provide the data to satisfy them.',
    keywords: ['ScriptPubKey', 'ScriptSig', 'bitcoin script', 'locking script', 'unlocking script', 'spending conditions'],
    category: 'Technology',
    relatedTerms: ['segwit', 'taproot', 'miniscript'],
    quickFacts: [
      'ScriptPubKey locks funds to an address',
      'ScriptSig unlocks funds',
      'SegWit moved witness data out of ScriptSig'
    ]
  },
  'segwit': {
    title: 'SegWit - Segregated Witness',
    description: 'SegWit (Segregated Witness) is a 2017 protocol upgrade that separates signature data from transaction data. Learn how SegWit increases capacity, reduces fees, and fixes transaction malleability.',
    keywords: ['SegWit', 'Segregated Witness', 'witness data', 'transaction malleability', 'bitcoin upgrade'],
    category: 'Bitcoin Upgrades',
    relatedTerms: ['taproot', 'scriptpubkey-scriptsig', 'fee-rate'],
    quickFacts: [
      'Activated in August 2017',
      'Increases effective block size to ~4MB',
      'Fixes transaction malleability',
      'Enables Lightning Network'
    ]
  },
  'sidechain': {
    title: 'Bitcoin Sidechains Explained',
    description: 'A sidechain is a separate blockchain connected to Bitcoin\'s main chain through a two-way peg. Learn how sidechains enable experimentation and new features while maintaining Bitcoin security.',
    keywords: ['sidechain', 'two-way peg', 'bitcoin scaling', 'blockchain interoperability', 'layer 2'],
    category: 'Layer 2',
    relatedTerms: ['lightning-network', 'bitcoin'],
    quickFacts: [
      'Enables experimentation without main chain risk',
      'Examples: Liquid, Rootstock (RSK)',
      'Bitcoin can be moved between chains'
    ]
  },
  'signature': {
    title: 'Digital Signatures in Bitcoin',
    description: 'A digital signature is cryptographic proof of ownership created with a private key. Learn how signatures authorize transactions without revealing the private key itself.',
    keywords: ['digital signature', 'transaction signature', 'cryptographic signature', 'ECDSA', 'signing'],
    category: 'Technology',
    relatedTerms: ['private-key', 'schnorr-signature', 'psbt'],
    quickFacts: [
      'Proves ownership without revealing private key',
      'Uses ECDSA or Schnorr algorithms',
      'Required for every transaction input'
    ]
  },
  'silent-payments': {
    title: 'Silent Payments - Reusable Bitcoin Addresses',
    description: 'Silent Payments allow publishing a single static address that receives unlimited payments, each going to a unique on-chain address. Learn how Silent Payments enhance privacy without interaction.',
    keywords: ['silent payments', 'static address', 'bitcoin privacy', 'reusable address', 'stealth address'],
    category: 'Privacy',
    relatedTerms: ['address', 'transaction-privacy'],
    quickFacts: [
      'Proposed in BIP352',
      'No address reuse on-chain',
      'No interaction required between parties',
      'Improved privacy for static addresses'
    ]
  },
  'splicing': {
    title: 'Lightning Splicing Explained',
    description: 'Splicing is a Lightning Network feature that allows adding or removing funds from a payment channel without closing it. Learn how splicing enables dynamic channel capacity management.',
    keywords: ['splicing', 'lightning network', 'channel management', 'payment channel', 'channel capacity'],
    category: 'Lightning Network',
    relatedTerms: ['lightning-network', 'htlc'],
    quickFacts: [
      'Splice-in: add funds to channel',
      'Splice-out: remove funds from channel',
      'No channel downtime required'
    ]
  },
  'taproot': {
    title: 'Taproot - Bitcoin Privacy Upgrade',
    description: 'Taproot is a major 2021 Bitcoin upgrade that introduces Schnorr signatures and makes complex scripts look like simple transactions. Learn how Taproot enhances privacy, efficiency, and flexibility.',
    keywords: ['Taproot', 'bitcoin upgrade', 'Schnorr', 'MAST', 'privacy', 'bitcoin 2021'],
    category: 'Bitcoin Upgrades',
    relatedTerms: ['schnorr-signature', 'segwit', 'miniscript'],
    quickFacts: [
      'Activated in November 2021',
      'Enables MAST (Merkelized Alternative Script Trees)',
      'All transactions look similar on-chain',
      'Lower fees for complex scripts'
    ]
  },
  'transaction-privacy': {
    title: 'Bitcoin Transaction Privacy',
    description: 'Understand Bitcoin\'s privacy model, the difference between pseudonymity and anonymity, and learn about on-chain analysis, IP privacy, and best practices for maintaining transaction privacy.',
    keywords: ['transaction privacy', 'bitcoin privacy', 'pseudonymity', 'anonymity', 'chain analysis', 'OPSEC'],
    category: 'Privacy',
    relatedTerms: ['coinjoin', 'payjoin', 'address', 'utxo'],
    quickFacts: [
      'Bitcoin is pseudonymous, not anonymous',
      'All transactions are publicly visible',
      'Best practices: use new addresses, avoid address reuse, consider CoinJoin'
    ]
  },
  'utxo': {
    title: 'UTXO - Unspent Transaction Output',
    description: 'A UTXO (Unspent Transaction Output) is a discrete chunk of bitcoin that remains after a transaction. Learn how the UTXO model works, why it matters, and how it differs from account-based systems.',
    keywords: ['UTXO', 'unspent transaction output', 'bitcoin model', 'transaction output', 'coin'],
    category: 'Transactions',
    relatedTerms: ['coin-selection', 'dust-limit', 'address'],
    quickFacts: [
      'Like digital bills or coins',
      'Each UTXO can only be spent once',
      'When spent, creates new UTXOs',
      'Different from account-based model (like Ethereum)'
    ]
  },
  'wallet': {
    title: 'Bitcoin Wallet Explained',
    description: 'A Bitcoin wallet is software that manages your private keys and enables interaction with the Bitcoin network. Learn about different wallet types, security models, and best practices.',
    keywords: ['bitcoin wallet', 'crypto wallet', 'hot wallet', 'cold wallet', 'hardware wallet', 'mobile wallet'],
    category: 'Wallet Basics',
    relatedTerms: ['private-key', 'passphrase', 'address', 'bip39'],
    quickFacts: [
      'Wallets store private keys, not bitcoins',
      'Types: hot (online), cold (offline), hardware, paper',
      'Non-custodial wallets give you full control',
      'Always backup your seed phrase'
    ]
  },
};

export function getGlossaryMeta(term: string): GlossaryTermMeta | undefined {
  return glossaryMetadata[term];
}

export function getAllGlossaryTerms(): string[] {
  return Object.keys(glossaryMetadata).sort();
}
