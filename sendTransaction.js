require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3(process.env.RPC_URL);

async function sendTransaction() {
    const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    const toAddress = '0xD318D6B7b6472f12B7c879B302184Cf19f36Da6b'; // Replace here

    const tx = {
        from: account.address,
        to: toAddress,
        value: web3.utils.toWei('0.001', 'ether'),
        gas: 21000,
    };

    const signedTx = await account.signTransaction(tx);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction successful:', receipt.transactionHash);
}

sendTransaction().catch(err => console.error(err));