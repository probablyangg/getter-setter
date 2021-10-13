require('dotenv').config();
const Web3 = require('Web3')
const web3 = new Web3('http://localhost:8345')
// console.log(web3)

const envVariables = process.env;
const {PRIVATE_KEY} = envVariables;

const myAccount = web3.eth.accounts.wallet.add(PRIVATE_KEY)

module.exports = {
  web3: web3,
  myAccount: myAccount
}

console.log(myAccount)
