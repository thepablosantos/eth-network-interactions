require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3(process.env.RPC_URL);

// Replace with the transaction hash you want to inspect
const txHash = '0x26183ee23194ca07e316daab81b117a740c35b8edfab21349c142a3eb1f68a95';

async function getTransactionDetails() {
    const tx = await web3.eth.getTransaction(txHash);
    
    if (tx) {
        console.log(`Transaction Hash: ${tx.hash}`);
        console.log(`From: ${tx.from}`);
        console.log(`To: ${tx.to}`);
        console.log(`Value: ${web3.utils.fromWei(tx.value, 'ether')} ETH`);
        console.log(`Gas Price: ${tx.gasPrice}`);
        console.log(`Nonce: ${tx.nonce}`);
        console.log(`Block Number: ${tx.blockNumber}`);
    } else {
        console.log(`Transaction not found. Check if hash is correct or confirmed.`);
    }
}

getTransactionDetails().catch(err => console.error(err));