const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3(process.env.RPC_URL);

async function getBalance(address) {
  try {
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Balance of ${address}: ${balanceEth} ETH`);
  } catch (error) {
    console.error('Error fetching balance:', error.message);
  }
}

// Replace with your address or pass via process.argv
const address = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY).address;
getBalance(address);
