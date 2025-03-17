# Ethereum Network Interactions

A Node.js project to interact with the Ethereum blockchain using **Web3.js**.

## 📌 Features

- Connect to Ethereum network (Testnet or Mainnet) via Infura/Alchemy RPC
- Check Ethereum wallet balance
- Get current block number
- Retrieve full block details (timestamp, miner, gas used, transactions)
- Get transaction details (from, to, value, gas, block, etc.)
- Send signed transactions securely (no hardcoded private keys)

---

## 🚀 Setup

1. **Install dependencies:**

```bash
npm install web3 dotenv
```

2. **Configure `.env`:**

```env
RPC_URL=https://YOUR_INFURA_OR_ALCHEMY_URL
PRIVATE_KEY=YOUR_PRIVATE_KEY
```

⚠️ **Security Tip:**  
Do NOT share your `.env` or commit private keys. `.env` is in `.gitignore`.

---

## 📂 Project Structure

```
├── .env.example                 # Example environment file
├── .gitignore
├── README.md
├── getBalance.js                # Check wallet balance
├── getBlockNumber.js            # Get current block number
├── getBlockDetails.js           # Retrieve detailed block info
├── getTransactionDetails.js     # Get transaction details by hash
├── sendTransaction.js           # Send signed transaction
└── package.json
```

---

## 💡 Usage Examples

**Check Balance:**

```bash
node getBalance.js
```

**Get Block Number:**

```bash
node getBlockNumber.js
```

**Get Block Details:**

```bash
node getBlockDetails.js
```

**Get Transaction Details:**

```bash
node getTransactionDetails.js
```

**Send Signed Transaction:**

```bash
node sendTransaction.js
```

---

## 📜 License

MIT License – Free to use and modify!

---

## 🔥 Future Ideas

- Turn scripts into CLI tool
- Add support for multiple networks and accounts
- Integrate basic dApp frontend (React + Web3.js)
