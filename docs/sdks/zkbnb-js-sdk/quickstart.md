---
title: zkBNB Javascript SDK
---

# Quickstart
zkBNB JavaScript SDK provides API for interacting with zkBNB L2 component in the node environment. 
The SDK offers various L2 operations such as get account details, get gas fees etc.
To understand the entire scope of operations available, see [API Reference](/docs/zkbnb-api). 
In addition, SDK comes with a crypto component for signing txs and sending signed txs to zkBNB L2.

This SDK does not provide methods to interact with zkBNB L1.
## Install

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

## Usage


### Init zkClient and zkCrypto

```javascript
    const { Client } = require('@bnb-chain/zkbnb-js-sdk');
    const { ZkCrypto } = require('@bnb-chain/zkbnb-js-sdk/zkCrypto/web')
    
    const client = new Client('https://api-testnet.zkbnbchain.org');
    
    let ZK
    
    async function initZk() {
      if (!ZK) {
        ZK = await ZkCrypto()
      }
    
      return ZK
    }
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
    console.log(seed.substring(2))
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
    console.log(seed.substring(2))
```
:::

#### Transfer demo
```javascript
    const { Client, TxType } = require('@bnb-chain/zkbnb-js-sdk');
    const { ZkCrypto } = require('@bnb-chain/zkbnb-js-sdk/zkCrypto/web')
    const util =  require('util');
    const { ethers } = require("ethers");
    
    const client = new Client('https://api-testnet.zkbnbchain.org');
    
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
      const toAccountNameHash = 'account name hash'
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

### System
#### Get zkbnb general info
Get zkbnb general info, including contract address, and count of transactions and active users
```javascript
    const layer2BasicInfo = client.getLayer2BasicInfo()
```

#### Get gas fee asset
```javascript
    const asset = client.getGasFeeAssets()
```

#### Get gas fee
```javascript
    const gasFee = client.getGasFee(assetId, txType)
```

#### Get gas account
```javascript
    const gasAccount = client.getGasAccount()
```

### Asset
#### Get asset by id
```javascript
    const asset = client.getAssetById(assetId)
```

#### Get assets
```javascript
    const assets = client.getAssets(offset, limit)
```

#### Get asset by symbol
```javascript
    const asset = client.getAssetBySymbol(symbol)
```

#### Get assets
```javascript
    const assets = client.getAssetBySymbol(offset, limit)
```

### Account
#### Get accounts
```javascript
    const accounts = client.getAccounts(offset, limit)
```

#### Get account by l1 address
```javascript
    const account = client.getAccountByL1Address(l1Address)
```

#### Get account by account's index
```javascript
    const account = client.getAccountByIndex(accountIndex)
```

#### Get next nonce
```javascript
    const nonce = client.getNextNonce(accountIndex)
```

#### Get maxOfferId
```javascript
    const maxOfferId = client.getMaxOfferId(accountIndex)
```


#### Get nfts by account index

```javascript
    const nfts = client.getNftsByAccountIndex(accountIndex)
```


### Block
#### GET current Height
```javascript
    const currentHeight = client.getCurrentHeight()
```

#### Get block by its commitment
```javascript
    const block = client.getBlockByCommitment(blockCommitment)
```

#### Get block by its height
```javascript
    const block = client.getBlockByHeight(blockHeight)
```

#### Get blocks

```javascript
    const blocks = client.getBlocks(offset, limit)
```

### Transaction
#### Get transactions in a block

```javascript
    const txs = client.getTxsByBlockHeight(blockHeight)
```

#### Get tx by hash

```javascript
    const tx = client.getTxByHash(txHash)
```


#### Send raw transaction
```javascript
    const txHash = client.sendRawTx(txType, txInfo)
```

#### Get Tx by hash
```javascript
    const tx = client.getTx(txHash)
```

#### Get txs by l1 address
```javascript
    const txs = client.getTxsByL1Address({
      l1Address,
      types,
      offset,
      limit,
    })
```

#### Get txs by account index
```javascript
    const txs = client.getTxsByAccountIndex({
      accountIndex,
      types,
      offset,
      limit,
    })
```

#### Get txs
```javascript
    const txs = client.getTxs(offset, limit)
```

## zkBNB L1 Client

### Install

Using npm:

```bash
> npm install @bnb-chain/zkbnb-js-l1-sdk
```

Using yarn:

```bash
> yarn add @bnb-chain/zkbnb-js-l1-sdk
```

Using pnpm:

```bash
> pnpm add @bnb-chain/zkbnb-js-l1-sdk
```

### Usage

#### Init
```typescript
import { Wallet, Provider, getZkBNBDefaultProvider } from '@bnb-chain/zkbnb-js-l1-sdk';

const rpcEndpoint = 'https://data-seed-prebsc-2-s1.binance.org:8545'; // bsc testnest rpc
const ethWallet = new ethers.Wallet(
  'your private key',
  new ethers.providers.JsonRpcProvider(rpcEndpoint)
);
const provider = getZkBNBDefaultProvider('bscTestnet'); // bsc or bscTestnet
// or by this method
// const testEndpoint = 'https://api-testnet.zkbnbchain.org'; // bsc testnest
// const provider = await Provider.newHttpProvider(testEndpoint);
const wallet = await Wallet.fromZkBNBSigner(ethWallet, provider);
```

#### Sign message
```typescript
// this is used sign message by 
const result = await provider.ethMessageSigner().getEthMessageSignature("message");
```

#### Get Current User Address
```typescript
const address = provider.address();
```

#### Get Asset Address By Asset Id
```typescript
const assetAddress = await wallet.resolveTokenAddress('asset id');
```

#### Get Asset Id By Asset Address
```typescript
const assetId = await wallet.resolveTokenId('asset address');
```

#### Add Asset
```typescript
const tokenAddress = 'BEP20 token address';
// Before adding, it is recommended to check whether the asset exists and whether it can be added.
await wallet.addAsset({ tokenAddress });
```

#### Whether The BEP20 Token Is Approved For Deposit
```typescript
const isApproved = await wallet.isBEP20DepositsApproved('BEP20 asset address', 'BEP20 approve amount');
```

#### Approve BEP20 Token For Deposit
```typescript
const result = await wallet.approveBEP20TokenDeposits('BEP20 address');
// You can check if it is successful approved by the following method
const isApproved = await wallet.isBEP20DepositsApproved('BEP20 asset address', 'BEP20 approve amount');
```

#### Deposit BNB
```typescript
const tokenAddress = await wallet.resolveTokenAddress(0);
const result = await wallet.deposit({
  to: wallet.address(),
  tokenAddress: "0x0000000000000000000000000000000000000000",
  amount: ethers.utils.parseEther('0.001'),
});
```

#### Deposit BEP20
Deposit funds from the BSC to the zkBNB.

To do the BEP20 token transfer, this token transfer should be approved. User can make BEP20 deposits approved forever using approveBEP20TokenDeposits("token address"), or the user can approve the exact amount (required for a deposit) upon each deposit using approveBEP20TokenDeposits("token address", "exact amount"), but this is not recommended.
```typescript
const result = await wallet.deposit({
  to: wallet.address(),
  tokenAddress: 'BEP20 Address',
  amount: ethers.utils.parseEther('0.001'),
});
```

#### Approve NFT For Deposit
```typescript
const approveTx = await this.approveForAllERC721TokenDeposits('nft address');
// You can check if it is successful approved by the following method
const isApproved = await this.isERC721DepositsApprovedForAll('nft address');

```

#### Deposit NFT
Deposit NFT from BSC to zkBNB, Only supports the nft created by zkBNB.

To do the NFT transfer, this transfer should be approved by approveForAllERC721TokenDeposits("nft address") once.

```typescript
const depositResult = await wallet.depositNFT({
    to: 'wallet address', // which address to deposit to
    tokenAddress: 'nft address',
    tokenId: 'nft ID',
});
```

#### FullExit
Withdraw BNB or BEP20 from zkBNB to BSC
```typescript
const result = await wallet.requestFullExit({
    tokenAddress: 'asset address',
    accountIndex: 'account index',
});
```

#### FullExit Nft
Withdraw NFT from zkBNB to BSC
```typescript
const requestResult = await wallet.requestFullExitNft({
    tokenId: 'nft ID',
    accountIndex: 'account index',
});
```

#### Register A Dedicated NFT Contract For A Collection
```typescript
const name = 'collection name';
const symbol = 'collection symbol';
const collectionId = 'collection Id';
await wallet.deployAndRegisterNFTFactory({
    collectionId,
    name,
    symbol,
});
```

#### Get NFT Address By Collection's Creator Address And Collection ID
```typescript
const creatorAddress = 'collection creator\'s wallet address';
const collectionId = 1;
// if zero address is returned, it means a dedicated nft address can be bound
const nftAddress = await wallet.getNFTAddress(creatorAddress, collectionId);
```

#### Get Nft TokenURI
```typescript
const nftContentType = 0; // 0-ipfs, 1-Greenfield
const nftContentHash = 'nft content hash';
const tokenURI = await wallet.getNftTokenURI(nftContentType, nftContentHash);
```

#### Get Pending Balance
```typescript
// Please change the value of the parameter according to the actual situation
const address = 'wallet address';
const assetAddress = 'asset address';

const pendingBalance = await wallet.getPendingBalance(address, assetAddress);
```
