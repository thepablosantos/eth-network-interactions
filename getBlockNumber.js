const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3(process.env.RPC_URL);

async function getBlockNumber() {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
  } catch (error) {
    console.error('Error fetching block number:', error.message);
  }
}

getBlockNumber();
