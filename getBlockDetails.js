require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3(process.env.RPC_URL);

async function getBlockDetails() {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    const block = await web3.eth.getBlock(latestBlockNumber);
    
    console.log(`Latest Block Number: ${block.number}`);
    console.log(`Timestamp: ${block.timestamp}`);
    console.log(`Miner: ${block.miner}`);
    console.log(`Gas Used: ${block.gasUsed}`);
    console.log(`Transactions:`);
    console.log(block.transactions);
}

getBlockDetails().catch(err => console.error(err));