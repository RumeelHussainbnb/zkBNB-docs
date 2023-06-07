---
title: zkBNB TypeScript SDK
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart
zkBNB TypeScript SDK provides API for interacting with zkBNB L2 component in the node environment.
The SDK offers various L2 operations such as get account details, get gas fees etc.
To understand the entire scope of operations available, see [API Reference](/docs/zkbnb-api).
In addition, SDK comes with a crypto component for signing txs and sending signed txs to zkBNB L2.

This SDK does not provide methods to interact with zkBNB L1.
## Install

<Tabs>
<TabItem value="jsSdk" label="zkBNB Js SDK">
Using npm:

```bash
> npm install @bnb-chain/zkbnb-js-sdk
```

Using yarn:

```bash
> yarn add @bnb-chain/zkbnb-js-sdk
```

Using pnpm:

```bash
> pnpm add @bnb-chain/zkbnb-js-sdk
```
</TabItem>
<TabItem value="useTs" label="zkBNB L1 SDK">
Using npm:

```bash
> npm install @bnb-chain/zkbnb-l1-sdk
```

Using yarn:

```bash
> yarn add @bnb-chain/zkbnb-l1-sdk
```

Using pnpm:

```bash
> pnpm add @bnb-chain/zkbnb-l1-sdk
```
</TabItem>
</Tabs>


## Usage


### Init zkClient and ZkCrypto

```javascript
import { Client } from '@bnb-chain/zkbnb-js-sdk';
import { ZkCrypto } from '@bnb-chain/zkbnb-js-sdk/zkCrypto'

const client = new Client('https://testapi.zkbnbchain.org');
```

### Simple queries

```javascript
const res = await client.getAccountInfoByAccountIndex(1);
console.log(res)
/* Response
{
    status: 1,
        index: 2,
    name: 'sher.legend',
    pk: 'b0b6f7466154578ec66d51a335ead65ffd6a7210567fad9e68b6df8a5ce5dd85',
    nonce: 0,
    assets: [
    {
        id: 0,
        name: 'BNB',
        balance: '100000000000000000',
        price: '0E+00'
    },
    {
        id: 1,
        name: 'BUSD',
        balance: '100000000000000000000',
        price: '0E+00'
    },
    {
        id: 2,
        name: 'LEG',
        balance: '100000000000000000000',
        price: '0E+00'
    },
    {
        id: 3,
        name: 'REY',
        balance: '100000000000000000000',
        price: '0E+00'
    }
],
    total_asset_value: '0'
}*/

```

### Sign and send txs to zkBNB L2
Currently, we only support sending tx by seed. the seed is a random hex string which you used in register ZNS
:::note Generate your seed

️if you want to use the same account as [zk-wallet](https://test.zkbnbchain.org/wallet), you can use below methods to generate your Seed.
#### Web3
```javascript
    import * as util from 'util';
    import Web3 from "web3";
    
    const privateKey = 'your private key';
    const chainId = 97;  // bsc mainnet: 56, bsc testnet: 97
    const message = util.format("Access zkbnb account.\n\nOnly sign this message for a trusted client!\nChain ID: %s.", chainId);
    const web3 = new Web3()
    const { signature: seed } = web3.eth.accounts.sign(message, privateKey);
    console.log(seed)
```

#### Ethers
```javascript
    import * as util from 'util';
    import { ethers } from "ethers";
    
    const privateKey = 'your private key';
    const chainId = 97;  // bsc mainnet: 56, bsc testnet: 97
    const message = util.format("Access zkbnb account.\n\nOnly sign this message for a trusted client!\nChain ID: %s.", chainId);
    const wallet = new ethers.Wallet(privateKey);
    const seed = await wallet.signMessage(message);
    console.log(seed)
```
:::

#### Transfer demo
```javascript
import { Client, TxType } from '@bnb-chain/zkbnb-js-sdk';
import { ZkCrypto } from '@bnb-chain/zkbnb-js-sdk/zkCrypto/web'
import * as util from 'util';
import { ethers } from "ethers";

const client = new Client('https://testapi.zkbnbchain.org');

let ZK

async function initZk() {
  if (!ZK) {
    ZK = await ZkCrypto()
  }

  return ZK
}

// Generate seed
async function generateSeed() {
  const privateKey = 'your private key';
  const chainId = 97;  // bsc mainnet: 56, bsc testnet: 97
  const message = util.format("Access zkbnb account.\n\nOnly sign this message for a trusted client!\nChain ID: %s.", chainId);
  const wallet = new ethers.Wallet(privateKey);
  const seed = await wallet.signMessage(message);
  return seed.substring(2);
}

// Get account
async function getAccount(seed) {
  const pubKey = ZK.getEddsaCompressedPublicKey(seed)
  const account = await client.getAccountByPubKey(pubKey);
  return account;
}

// Create transfer tx
async function transfer() {
  const seed = await generateSeed();
  const fromAccount = await getAccount(seed);
  const { nonce: fromAccountNonce } = await client.getNextNonce(fromAccount.index)
  const gasAccount = await client.getGasAccount()
  const toAccountNameHash = ZK.getAccountNameHash(gasAccount.name)
  const txInfo = {
    from_account_index: fromAccount.index,
    to_account_index: gasAccount.index,
    to_account_name: toAccountNameHash,
    asset_id: 0,   // Payment asset Id. 0 means BNB
    asset_amount: ethers.utils.parseEther("0.0001").toString(),
    gas_account_index: gasAccount.index,
    gas_fee_asset_id: 0,  // BNB as gas fee
    gas_fee_asset_amount: ethers.utils.parseEther("0.0001").toString(),
    memo: 'transfer BNB to John',
    call_data: `${500}`,
    expired_at: Date.now() + 7200000,
    nonce: fromAccountNonce,
  };

  //Sign tx with the seed phrase using zkBNB crypto component
  const signedTx = ZK.signTransfer(seed, JSON.stringify(txInfo))

  //Send signed tx to zkBNB L2
  const txHash = await client.sendRawTx(TxType.TxTypeTransfer.toString(), signedTx)
  return txHash
}

initZk()
  .then(() => transfer())
  .then(console.log)
  .catch(console.error)
```

## Interfaces
For More Documents, Please refer to [JS SDK](../zkbnb-js-sdk/quickstart.md)

