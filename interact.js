const {web3, myAccount} = require('./utils')
const {abi, address} = require('./contractArtifacts')
const debug = false

let contract = new web3.eth.Contract(JSON.parse(abi), address)
if (debug) { console.log(contract) }

async function get() {
  let r = await contract.methods.get().call() // read
  if (debug) { console.log(r) }
  return r
}

async function set(value) {
  let r = await contract.methods.set(value).send({ // write and update all nodes
    from: myAccount.address,
    gas: 80000
  })
  return r.transactionHash
}

// set(5)
// get()

// for interacting with the browser
window.addEventListener('load', () => {
  document.getElementById("get").onclick = () => {
    get().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r
    })
  }
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value
    set(val).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r
    })
  }
})
