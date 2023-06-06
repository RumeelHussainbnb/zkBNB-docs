---
title: zkBNB Go SDK
---

# Quickstart
zkBNB Go SDK provides API for interacting with zkBNB L2 component in the node environment.

## Overview

:::danger **Go SDK Interface is unstable**

The Go SDK hasn't hit v1.0 yet. Its public interface is unstable, and there are breaking changes scheduled to happen in the coming weeks to its interface.

:::

The zkBNB Go SDK provides a thin wrapper around thin all the apis provided by zkBNB, including a simple key manager for signing
txs and sending signed txs to zkBNB.

## Usage
### Installation
The supported go versions are 1.18 or above.

```sh
go get github.com/bnb-chain/zkbnb-go-sdk
```
or

```go
import (
    "github.com/bnb-chain/zkbnb-go-sdk" latest
)
```

## zkBNB Client

```go
type ZkBNBClient interface {
    ZkBNBQuerier
    ZkBNBTxSender
}
```

The zkBNB go sdk wraps the supported apis and also provides methods to sign txs with the key manager.

### Init sdk

The zkBNB client can be initiated by an API endpoint.

<Tabs>
<TabItem value="privateKey" label="Create client by privateKey">

```go
chainNetworkId := 97 // bsc mainnet: 56, bsc testnet: 97
privateKey := "your private key"
testnetEndpoint := "https://testapi.zkbnbchain.org/" // bsc testnest

// Initialize client with private key
client, err := NewZkBNBClientWithPrivateKey(testnetEndpoint, privateKey, chainNetworkId)

if err != nil {
    fmt.Errorf("error Occurred when Creating ZKBNB client! error:%s", err.Error())
}
```
</TabItem>
<TabItem value="seed" label="Create client by seed">

```go
chainNetworkId := 97 // bsc mainnet: 56, bsc testnet: 97
privateKey := "your private key"
endpoint := "https://testapi.zkbnbchain.org" // bsc testnest: https://testapi.zkbnbchain.org

// Generate seed by private key
seed, err := accounts.GenerateSeed(privateKey, chainNetworkId)
if err != nil {
    return nil
}

privateKeyInEcdsa, err := crypto.HexToECDSA(testPrivateKey)
if err != nil {
    return
}
address := crypto.PubkeyToAddress(privateKeyInEcdsa.PublicKey)

// Initialize client with seed
client, err := NewZkBNBClientNoAuthorized(endpoint, seed, address.Hex(), chainNetworkId)
if err != nil {
    fmt.Errorf("error Occurred when Creating ZKBNB client! error:%s", err.Error())
}
```
</TabItem>
</Tabs>

### Queries

You can perform the query methods directly:

```go
// query the layer2 basic info
layer2Info, err := client.GetLayer2BasicInfo()
```

#### Get Protocol Rate
```go
protocolRate, err := client.GetProtocolRate()
```

#### Get Layer2 Basic Info
```go
basicInfo, err := client.GetLayer2BasicInfo()
```

#### Get Current Height
```go
height, err := client.GetCurrentHeight()
```

#### Get Gas Account
```go
gasAccount, err := client.GetGasAccount()
```

### Common
#### Get Rollbacks
```go
total, rollbacks, err := client.GetRollbacks(1, 0, 10)
```

#### Get Block By Commitment
```go
block, err := client.GetBlockByCommitment("block commitment")
```

#### Get Gas Fee Assets
```go
gasFeeAssets, err := client.GetGasFeeAssets()
```

#### Get Gas Fee
```go
assetId := 1
txType := 1
gasFee, err := client.GetGasFee(assetId, txType)
```

#### Get Next Nonce
```go
accountIdx := 1
nonce, err := client.GetNextNonce(accountIdx)
```

#### Get Max OfferId
```go
accountIdx := 1
maxOfferId, err := client.GetMaxOfferId(accountIdx)
```

#### Get Block By Height
```go
block, err := client.GetBlockByHeight(1)
```

#### Get Blocks
```go
total, blocks, err := client.GetBlocks(0, 10)
```

Responses
```json
[
  {
    "commitment": "a5cfc8e112d3e1195dd803d303a77884ced4d04361e3c7298aef996ba43c1366",
    "height": 15,
    "state_root": "0bfbcbffe34f122d7c72914f4458e847bc011027d0100eb0ef3e81c86f292799",
    "priority_operations": 1,
    "pending_on_chain_operations_hash": "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "pending_on_chain_operations_pub_data": "",
    "committed_tx_hash": "0x9faf91216d31ab6a6d65098b50e45ba49d05b26ace2d6545701ece7511565afa",
    "committed_at": 1679740797,
    "verified_tx_hash": "0xf3a5fc5058d7aab754132b7d542f6736651a8cd924e5fac67447cda4f7b6cf30",
    "verified_at": 1679740827,
    "txs": [
      {
        "hash": "164026b9b65574834dc020d924bd7496bcf7f1dccedc8f6d3ab7780356343c95",
        "type": 3,
        "amount": "0",
        "info": "{\"TxType\":3,\"L1Address\":\"0xa7F23Ad2b0473Bd05012753624eDD77B4CAcdfa3\",\"CreatorAccountIndex\":2,\"RoyaltyRate\":0,\"NftContentType\":0,\"NftContentHash\":\"+csUG4e6c/jFapGV/oXbLPsbBzU0KWZf13GT48iW7+I=\",\"CollectionId\":0,\"NftIndex\":1,\"AccountIndex\":2}",
        "status": 5,
        "index": 0,
        "gas_fee_asset_id": -1,
        "gas_fee": "0",
        "nft_index": 1,
        "collection_id": -1,
        "asset_id": -1,
        "asset_name": "",
        "native_address": "0xa7F23Ad2b0473Bd05012753624eDD77B4CAcdfa3",
        "extra_info": "",
        "memo": "",
        "account_index": 2,
        "l1_address": "0xa7F23Ad2b0473Bd05012753624eDD77B4CAcdfa3",
        "nonce": -1,
        "expire_at": 9223372036854775807,
        "block_height": 15,
        "created_at": 1679740733,
        "state_root": "",
        "to_account_index": -1,
        "to_l1_address": ""
      }
    ],
    "status": 5,
    "size": 1
  }
]
```

#### Get Transactions By AccountIndex
```go
total, txs, err := client.GetTxsByAccountIndex(1, 0, 10)
```

#### Get Txs By BlockHeight
```go
txs, err := client.GetTxsByBlockHeight(1)
```

#### Get Transactions

```go
total, txs, err := client.GetTxs(0, 10)
```

Responses

```json
// txList
[
    {
        "hash": "2a7013dc6e6dfdf6d16d97e54a0f5aa847accb108fc92c1725cf8397f7cbddcd",
        "type": 6,
        "amount": "0",
        "info": "{\"AccountIndex\":4,\"CollectionId\":0,\"Name\":\"Nft Collection - my collection\",\"Introduction\":\"Great Nft!\",\"GasAccountIndex\":1,\"GasFeeAssetId\":0,\"GasFeeAssetAmount\":10000000000000,\"ExpiredAt\":1669863880421,\"Nonce\":0,\"Sig\":\"feu00A+uH1pceT6Zi4snUIsE09pV7J9DpIgh0D7APwgEsT0cXQJoEI9YkKpyCjUN7ZFQwjhSWYAzsoCM3jdneA==\"}",
        "status": 5,
        "index": 0,
        "gas_fee_asset_id": 0,
        "gas_fee": "10000000000000",
        "nft_index": -1,
        "collection_id": 0,
        "asset_id": -1,
        "asset_name": "",
        "native_address": "0",
        "extra_info": "",
        "memo": "",
        "account_index": 4,
        "account_name": "walt.legend",
        "nonce": 0,
        "expire_at": 1669863880421,
        "block_height": 5,
        "created_at": 1669863340,
        "state_root": "",
        "to_account_index": -1,
        "to_account_name": ""
    }
]
```

#### Get Transaction
```go
tx, err := client.GetTx("tx hash")
```

#### Get Txs By L1Address
```go
total, txs, err := client.GetTxsByL1Address("l1 address", 0, 10)
```

#### Get Pending Transactions
```go
total, txs, err := client.GetPendingTxs(0, 10)
```

#### Get Pending Transactions
```go
total, txs, err := client.GetPendingTxsByL1Address("l1 address")
```

#### Get Executed Transactions
```go
total, txs, err := client.GetExecutedTxs(0, 10)
```

### Account
#### Get Accounts
```go
accounts, err := client.GetAccounts(0, 10)
```

#### Get  AccountBy L1Address
```go
account, err := client.GetAccountByL1Address("l1 address")
```

```json
{
  "status": 1,
  "index": 3,
  "l1_address": "0x2fE6e6b5A084fEcd0A5cC109F7d5B5bbE9f0fE54",
  "name": "",
  "pk": "3f4f8ef27d0ccabb9654d3003dc289f60e888afe086789e4e230563e529b7824",
  "nonce": 7,
  "assets": [
    {
      "id": 0,
      "name": "BNB",
      "balance": "999920000000000000",
      "price": "0E+00"
    }
  ],
  "total_asset_value": "0"
}
```

#### Change PubKey
<Tabs>
<TabItem value="changePubKeyByPrivateKey" label="Call by the client with private key">

```go
pk := client.keyManager.PubKeyPoint()
txInfo := &types.ChangePubKeyReq{
    L1Address: l1Address,
    PubKeyX:   pk[0],
    PubKeyY:   pk[1],
}
txHash, err := client.ChangePubKey(txInfo, nil)
assert.NoError(t, err)
fmt.Printf("ChangePubKey success, tx_hash=%s \n", txHash)
```
</TabItem>

<TabItem value="changePubKeyBySeed" label="Call by the client with seed">

```go
pk := client.keyManager.PubKeyPoint()
txInfo := &types.ChangePubKeyReq{
    L1Address: l1Address,
    PubKeyX:   pk[0],
    PubKeyY:   pk[1],
}
// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(txInfo, nil)
assert.NoError(t, err)
fmt.Printf("create ChangePubKey signature body:%s \n", signBody)

// Generate the signature with private key and outside the ChangePubKey function
signature, err := client.GenerateSignature(privateKey, txInfo)
assert.NoError(t, err)

txHash, err := client.ChangePubKey(txInfo, nil, signature)
assert.NoError(t, err)
fmt.Printf("ChangePubKey success, tx_hash=%s \n", txHash)
```

</TabItem>
</Tabs>


### Asset
#### Get Asset

```go
asset, err := client.GetAssetBySymbol("BNB")
```

Responses

```json
// asset detail
{
    "id": 0,
    "name": "BNB",
    "decimals": 18,
    "symbol": "BNB",
    "address": "0x00",
    "price": "0E+00",
    "is_gas_asset": 1,
    "icon": "https://raw.githubusercontent.com/binance-chain/tokens-info/master/tokens/bnb/bnb.png"
}
```

### Get Asset By Id
```go
asset, err := client.GetAssetById(1)
```

### Get Assets
```go
assets, err := client.GetAssets(0, 10)
```

```json
{
  "total": 4,
  "assets": [
    {
      "id": 0,
      "name": "BNB",
      "decimals": 18,
      "symbol": "BNB",
      "address": "0x00",
      "price": "0E+00",
      "is_gas_asset": 1,
      "icon": "https://static.devfdg.net/cloud-dapp/shared/icon/coin/bnb.svg"
    },
    {
      "id": 1,
      "name": "BUSD",
      "decimals": 18,
      "symbol": "BUSD",
      "address": "0x9482fc890b76e1bd0927b77f02a1d31e817fC614",
      "price": "0E+00",
      "is_gas_asset": 1,
      "icon": "https://static.devfdg.net/cloud-dapp/shared/icon/coin/busd.svg"
    }
  ]
}

```


#### Transfer Asset

<Tabs>
<TabItem value="transferByPrivateKey" label="Call by the client with private key">

```go
txInfo := types.TransferTxReq{
    To:          "l1 address",
    AssetId:     0,
    AssetAmount: big.NewInt(1),
}

hash, err := client.Transfer(&txInfo, nil)
assert.NoError(t, err)
fmt.Println("transfer success, tx id=", hash)
```
</TabItem>
<TabItem value="transferBySeed" label="Call by the client with seed">

```go
txInfo := types.TransferTxReq{
    To:          "l1 address",
    AssetId:     0,
    AssetAmount: big.NewInt(1),
}
// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("create transfer signature body:%s \n", signBody)

// Generate the signature with private key and outside the transfer function
signature, err := client.GenerateSignature(privateKey, &txInfo)
hash, err := client.Transfer(&txInfo, nil, signature)
assert.NoError(t, err)
fmt.Println("transfer success, tx id=", hash)
```
</TabItem>
</Tabs>

#### Withdrawal Asset

<Tabs>
<TabItem value="withdrawByPrivateKey" label="Call by the client with private key">

```go
randomAddress := "0x8b2C5A5744F42AA9269BaabDd05933a96D8EF911"

txReq := types.WithdrawTxReq{
    AssetId:     0,
    AssetAmount: big.NewInt(100),
    ToAddress:   randomAddress,
}

txId, err := client.Withdraw(&txReq, nil)
assert.NoError(t, err)
fmt.Printf("withdraw success, tx id: %s \n", txId)
```

</TabItem>
<TabItem value="withdrawBySeed" label="Call by the client with seed">

```go
randomAddress := "0x8b2C5A5744F42AA9269BaabDd05933a96D8EF911"

txReq := types.WithdrawTxReq{
    AssetId:     0,
    AssetAmount: big.NewInt(100),
    ToAddress:   randomAddress,
}

// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txReq, nil)
assert.NoError(t, err)
fmt.Printf("create withdraw BEP signature body:%s \n", signBody)

// Generate the signature with private key and outside the Withdraw function
signature, err := client.GenerateSignature(privateKey, &txReq)
assert.NoError(t, err)

txId, err := client.Withdraw(&txReq, nil, signature)
assert.NoError(t, err)
fmt.Printf("withdraw success, tx id: %s \n", txId)
```

</TabItem>
</Tabs>

### NFT
#### Create Collection
<Tabs>
<TabItem value="createCollectionByPrivateKey" label="Call by the client with private key">

```go
txInfo := types.CreateCollectionTxReq{
    Name:         fmt.Sprintf("Nft Collection - my collection"),
    Introduction: "Great Nft!",
}

txId, err := client.CreateCollection(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("mint nft success, tx_hash: %s \n", txId)
```
</TabItem>
<TabItem value="createCollectionBySeed" label="Call by the client with seed">

```go
txInfo := types.CreateCollectionTxReq{
    Name:         fmt.Sprintf("Nft Collection - my collection"),
    Introduction: "Great Nft!",
}

// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("create collection signature body:%s \n", signBody)

// Generate the signature with private key and outside the Create Collection function
signature, err := client.GenerateSignature(privateKey, &txInfo)
assert.NoError(t, err)

txId, err := client.CreateCollection(&txInfo, nil, signature)
assert.NoError(t, err)
fmt.Printf("mint nft success, tx_hash: %s \n", txId)
```
</TabItem>
</Tabs>

#### Get Max CollectionId
```go
maxCollectionId, err := client.GetMaxCollectionId(1)
```

#### Mint NFT

<Tabs>
<TabItem value="mintNftByPrivateKey" label="Call by the client with private key">

```go
txInfo := types.MintNftTxReq{
    To:                "l1 address",
    NftCollectionId:   0,
    NftContentType:    0,
    RoyaltyRate:       0,
    MetaData:          "any information",
    MutableAttributes: "any mutable attributes",
}

txId, err := client.MintNft(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("mint nft success, tx_hash: %s \n", txId)
```
</TabItem>
<TabItem value="mintNftBySeed" label="Call by the client with seed">

```go
txInfo := types.MintNftTxReq{
    To:                "l1 address",
    NftCollectionId:   0,
    NftContentType:    0,
    RoyaltyRate:       0,
    MetaData:          "any information",
    MutableAttributes: "any mutable attributes",
}

// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("mint nft signature body:%s \n", signBody)

// Generate the signature with private key and outside the MintNft function
signature, err := client.GenerateSignature(privateKey, &txInfo)
assert.NoError(t, err)

txId, err := client.MintNft(&txInfo, nil, signature)
assert.NoError(t, err)
fmt.Printf("mint nft success, tx_hash: %s \n", txId)
```
</TabItem>
</Tabs>

#### Get Nft Next Nonce
```go
nftIndex := 1
nextNonce, err := client.GetNftNextNonce(nftIndex)
```

#### Get Nft By TxHash
```go
nft, err := client.GetNftByTxHash("10e018bc926a1a879a71e628e80a698a9018a242227ed5dbbf1caaff1f506856")
```

#### GetNftByNftIndex
```go
nft, err := client.GetNftByNftIndex(1)
```

#### Get NFTs By Account Index

```go
nfts, err := client.GetNftsByAccountIndex(4, 0, 10)
```

Responses
```json
// nfts
{
    "total": 2,
    "nfts": [
        {
            "index": 2,
            "creator_account_index": 4,
            "creator_account_name": "walt.legend",
            "owner_account_index": 4,
            "owner_account_name": "walt.legend",
            "content_hash": "000000000000000000000000000000000000000000000000000000000000000c",
            "l1_address": "",
            "l1_token_id": "",
            "creator_treasury_rate": 0,
            "collection_id": 0
        },
        {
            "index": 1,
            "creator_account_index": 4,
            "creator_account_name": "walt.legend",
            "owner_account_index": 4,
            "owner_account_name": "walt.legend",
            "content_hash": "000000000000000000000000000000000000000000000000000000000000000c",
            "l1_address": "",
            "l1_token_id": "",
            "creator_treasury_rate": 0,
            "collection_id": 0
        }
    ]
}
```

#### Update Nft By Index

<Tabs>
<TabItem value="updateNftByPrivateKey" label="Call by the client with private key">

```go
txInfo := types.UpdateNftReq{
    NftIndex:          1,
    MutableAttributes: "update information",
}

assetList, err := client.UpdateNftByIndex(&txInfo)
if err != nil {
    println(err.Error())
    return
}

bz, _ := json.MarshalIndent(assetList, "", "  ")
println(string(bz))
```
</TabItem>
<TabItem value="updateNftBySeed" label="Call by the client with seed">

```go
txInfo := types.UpdateNftReq{
    NftIndex:          1,
    MutableAttributes: "update information",
}
// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("mint nft signature body:%s \n", signBody)

// Generate the signature with private key and outside the updateNft function
signature, err := client.GenerateSignature(privateKey, &txInfo)
assert.NoError(t, err)

assetList, err := client.UpdateNftByIndex(&txInfo, signature)
if err != nil {
    println(err.Error())
    return
}

bz, _ := json.MarshalIndent(assetList, "", "  ")
println(string(bz))
```
</TabItem>
</Tabs>


#### Withdraw NFT

<Tabs>

<TabItem value="withdrawNftByPrivateKey" label="Call by the client with private key">

```go
randomAddress := "0x2fE6e6b5A084fEcd0A5cC109F7d5B5bbE9f0fE54"

txReq := types.WithdrawNftTxReq{
    AccountIndex: 3,
    NftIndex:     5,
    ToAddress:    randomAddress,
}

txId, err := client.WithdrawNft(&txReq, nil)
assert.NoError(t, err)
fmt.Printf("withdraw nft success, tx id: %s \n", txId)
```

</TabItem>
<TabItem value="withdrawNftBySeed" label="Call by the client with seed">

```go
randomAddress := "0x2fE6e6b5A084fEcd0A5cC109F7d5B5bbE9f0fE54"

txReq := types.WithdrawNftTxReq{
    AccountIndex: 3,
    NftIndex:     5,
    ToAddress:    randomAddress,
}

// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txReq, nil)
assert.NoError(t, err)
fmt.Printf("create withdraw NFT signature body:%s \n", signBody)

// Generate the signature with private key and outside the WithdrawNft function
signature, err := client.GenerateSignature(privateKey, &txReq)
assert.NoError(t, err)

txId, err := client.WithdrawNft(&txReq, nil, signature)
assert.NoError(t, err)
fmt.Printf("withdraw nft success, tx id: %s \n", txId)
```
</TabItem>
</Tabs>

#### Cancel Offer

<Tabs>
<TabItem value="cancelOfferByPrivateKey" label="Call by the client with private key">

```go
account, err := client.GetAccountByL1Address(l1Addr)
assert.NoError(t, err)

offerId, err := client.GetMaxOfferId(account.Index)
assert.NoError(t, err)

txInfo := types.CancelOfferTxReq{
    OfferId: int64(offerId),
}

txId, err := client.CancelOffer(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("cancel offer success, tx id: %s \n", txId)
```
</TabItem>
<TabItem value="cancelOfferBySeed" label="Call by the client with seed">

```go
account, err := client.GetAccountByL1Address(l1Addr)
assert.NoError(t, err)

offerId, err := client.GetMaxOfferId(account.Index)
assert.NoError(t, err)

txInfo := types.CancelOfferTxReq{
    OfferId: int64(offerId),
}

// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(&txInfo, nil)
assert.NoError(t, err)
fmt.Printf("create cancel offer signature body:%s \n", signBody)

// Generate the signature with private key and outside the Cancel Offer function
signature, err := client.GenerateSignature(privateKey, &txInfo)
assert.NoError(t, err)

txId, err := client.CancelOffer(&txInfo, nil, signature)
assert.NoError(t, err)
fmt.Printf("cancel offer success, tx id: %s \n", txId)
```
</TabItem>
</Tabs>


#### Transfer Nft

<Tabs>
<TabItem value="transferNftByPrivateKey" label="Call by the client with private key">

```go
nftIndex := int64(8)
txInfo := &types.TransferNftTxReq{
    NftIndex: nftIndex,
    To:       "l1 address",
}

txId, err := client.TransferNft(txInfo, nil)
assert.NoError(t, err)
fmt.Printf("send transfer nft tx success, tx_id=%s \n", txId)
```
</TabItem>
<TabItem value="transferNftBySeed" label="Call by the client with seed">

```go
nftIndex := int64(8)
txInfo := &types.TransferNftTxReq{
    NftIndex: nftIndex,
    To:       "l1 address",
}

// Generate the signature body for caller to calculate the signature
signBody, err := client.GenerateSignBody(txInfo, nil)
assert.NoError(t, err)
fmt.Printf("create transfer NFT signature body:%s \n", signBody)

// Generate the signature with private key and outside the transferNft function
signature, err := client.GenerateSignature(privateKey, txInfo)
assert.NoError(t, err)

txId, err := client.TransferNft(txInfo, nil, signature)
assert.NoError(t, err)
fmt.Printf("send transfer nft tx success, tx_id=%s \n", txId)
```
</TabItem>
</Tabs>


#### Atomic Match 
<Tabs>
<TabItem value="atomicMathByPrivateKey" label="Call by the client with private key">

```go
func CalculateSignature(signer accounts.Signer, tx *types.OfferTxInfo) ([]byte, error) {
    convertedTx := txutils.ConvertOfferTxInfo(tx)
    err := convertedTx.Validate()
    if err != nil {
        return nil, err
    }
    hFunc := mimc.NewMiMC()
    msgHash, err := convertedTx.Hash(hFunc)
    if err != nil {
        return nil, err
    }
    hFunc.Reset()
    signature, err := signer.Sign(msgHash, hFunc)
    if err != nil {
        return nil, err
    }
    return signature, nil
}

func PrepareAtomicMatchTxReq(client *client) (*types.AtomicMatchTxReq, error) {
    sellPrivateKey := "0913b36e63e7beeb845d2b451d4c198dc5b8fccb1c82a1d2c0c01c951f275c81"
    sellerSeed := "a976999fc597e1f182a2b6b5a791daa27361f969da4df22dbeb3753083ea45e76854c2272a48d2edccea1632de2facc6b5983b39263eb00f38003a8a754f42161b"
    sellerAddress := "0xb7Db1bab8C31C0daa075fF2D645Ea6F0c9B0D01A"

    buyPrivateKey := "355c102f0c8fb7efd0a2d66d70895e7cb0c4580eabc59073adb928d3e7315641"
    buyerSeed := "d3774032687cf4875db03ef5073ddc9be6b5e464d00e7d308c3ba74e88ba802d1b2fef5641e3cc046ee3a8e205df3a7cd18545b3739c408d2ace4a6ed1dc01441c"
    buyerAddress := "0xF792CC80193Ea942820C945F010051dE5CF6975A"

    buyer, err := client.GetAccountByL1Address(buyerAddress)
    if err != nil {
        return nil, err
    }

    seller, err := client.GetAccountByL1Address(sellerAddress)
    if err != nil {
        return nil, err
    }

    buyerOfferId, err := client.GetMaxOfferId(buyer.Index)
    if err != nil {
        return nil, err
    }

    sellerOfferId, err := client.GetMaxOfferId(seller.Index)
    if err != nil {
        return nil, err
    }

    protocolRate, err := client.GetProtocolRate()
    if err != nil {
        return nil, err
    }

    nftIndex := int64(1)

    nft, err := client.GetNftByNftIndex(nftIndex)
    if err != nil {
        return nil, err
    }
    listedAt := time.Now().UnixMilli()
    expiredAt := time.Now().Add(time.Hour * 2).UnixMilli()
    buyOffer := &types.OfferTxInfo{
        Type:               types.BuyOfferType,
        OfferId:            int64(buyerOfferId),
        AccountIndex:       buyer.Index,
        NftIndex:           nftIndex,
        AssetId:            0,
        AssetAmount:        big.NewInt(10000),
        ListedAt:           listedAt,
        ExpiredAt:          expiredAt,
        RoyaltyRate:        nft.RoyaltyRate,
        ChanelAccountIndex: 2,
        ChanelRate:         200,
        ProtocolRate:       protocolRate,
        ProtocolAmount:     nil,
        Sig:                nil,
    }
    buyOffer.ProtocolAmount = ffmath.Div(ffmath.Multiply(buyOffer.AssetAmount, big.NewInt(buyOffer.ProtocolRate)), big.NewInt(10000))

    buyerKey, err := accounts.NewSeedKeyManager(buyerSeed)
    if err != nil {
        return nil, err
    }

    buyOfferSign, err := CalculateSignature(buyerKey, buyOffer)
    if err != nil {
        return nil, err
    }
    buyOffer.Sig = buyOfferSign

    // Generate the signature body for caller to calculate the signature
    buySignBody, err := client.GenerateSignBody(buyOffer, nil)

    fmt.Printf("create atomic match signature body:%s \n", buySignBody)

    // Generate the signature with private key and outside the Atomic Match function
    buySignature, err := client.GenerateSignature(buyPrivateKey, buyOffer)
    buyOffer.L1Sig = buySignature

    sellOffer := &types.OfferTxInfo{
        Type:               types.SellOfferType,
        OfferId:            int64(sellerOfferId),
        AccountIndex:       seller.Index,
        NftIndex:           nftIndex,
        AssetId:            0,
        AssetAmount:        big.NewInt(10000),
        ListedAt:           listedAt,
        ExpiredAt:          expiredAt,
        ChanelAccountIndex: 3,
        ChanelRate:         150,
        Sig:                nil,
    }

    sellerKey, err := accounts.NewSeedKeyManager(sellerSeed)
    if err != nil {
        return nil, err
    }

    sellOfferSign, err := CalculateSignature(sellerKey, sellOffer)
    if err != nil {
        return nil, err
    }
    sellOffer.Sig = sellOfferSign

    // Generate the signature body for caller to calculate the signature
    sellSignBody, err := client.GenerateSignBody(sellOffer, nil)
    fmt.Printf("create atomic match signature body:%s \n", sellSignBody)
    // Generate the signature with private key and outside the Atomic Match function
    sellSignature, err := client.GenerateSignature(sellPrivateKey, sellOffer)
    sellOffer.L1Sig = sellSignature

    txInfo := &types.AtomicMatchTxReq{
        BuyOffer:  buyOffer,
        SellOffer: sellOffer,
    }
    return txInfo, nil
}

txInfo, err := PrepareAtomicMatchTxReq(client)
assert.NoError(t, err)

txId, err := client.AtomicMatch(txInfo, nil)
assert.NoError(t, err)
fmt.Printf("send atomic match tx success, tx_id=%s \n", txId)
```
</TabItem>
<TabItem value="atomicMathBySeed" label="Call by the client with seed">


```go
func CalculateSignature(signer accounts.Signer, tx *types.OfferTxInfo) ([]byte, error) {
    convertedTx := txutils.ConvertOfferTxInfo(tx)
    err := convertedTx.Validate()
    if err != nil {
        return nil, err
    }
    hFunc := mimc.NewMiMC()
    msgHash, err := convertedTx.Hash(hFunc)
    if err != nil {
        return nil, err
    }
    hFunc.Reset()
    signature, err := signer.Sign(msgHash, hFunc)
    if err != nil {
        return nil, err
    }
    return signature, nil
}

func PrepareAtomicMatchTxReq(client *client) (*types.AtomicMatchTxReq, error) {
    sellPrivateKey := "0913b36e63e7beeb845d2b451d4c198dc5b8fccb1c82a1d2c0c01c951f275c81"
    sellerSeed := "a976999fc597e1f182a2b6b5a791daa27361f969da4df22dbeb3753083ea45e76854c2272a48d2edccea1632de2facc6b5983b39263eb00f38003a8a754f42161b"
    sellerAddress := "0xb7Db1bab8C31C0daa075fF2D645Ea6F0c9B0D01A"

    buyPrivateKey := "355c102f0c8fb7efd0a2d66d70895e7cb0c4580eabc59073adb928d3e7315641"
    buyerSeed := "d3774032687cf4875db03ef5073ddc9be6b5e464d00e7d308c3ba74e88ba802d1b2fef5641e3cc046ee3a8e205df3a7cd18545b3739c408d2ace4a6ed1dc01441c"
    buyerAddress := "0xF792CC80193Ea942820C945F010051dE5CF6975A"

    buyer, err := client.GetAccountByL1Address(buyerAddress)
    if err != nil {
        return nil, err
    }

    seller, err := client.GetAccountByL1Address(sellerAddress)
    if err != nil {
        return nil, err
    }

    buyerOfferId, err := client.GetMaxOfferId(buyer.Index)
    if err != nil {
        return nil, err
    }

    sellerOfferId, err := client.GetMaxOfferId(seller.Index)
    if err != nil {
        return nil, err
    }

    protocolRate, err := client.GetProtocolRate()
    if err != nil {
        return nil, err
    }

    nftIndex := int64(1)

    nft, err := client.GetNftByNftIndex(nftIndex)
    if err != nil {
        return nil, err
    }
    listedAt := time.Now().UnixMilli()
    expiredAt := time.Now().Add(time.Hour * 2).UnixMilli()
    buyOffer := &types.OfferTxInfo{
        Type:               types.BuyOfferType,
        OfferId:            int64(buyerOfferId),
        AccountIndex:       buyer.Index,
        NftIndex:           nftIndex,
        AssetId:            0,
        AssetAmount:        big.NewInt(10000),
        ListedAt:           listedAt,
        ExpiredAt:          expiredAt,
        RoyaltyRate:        nft.RoyaltyRate,
        ChanelAccountIndex: 2,
        ChanelRate:         200,
        ProtocolRate:       protocolRate,
        ProtocolAmount:     nil,
        Sig:                nil,
    }
    buyOffer.ProtocolAmount = ffmath.Div(ffmath.Multiply(buyOffer.AssetAmount, big.NewInt(buyOffer.ProtocolRate)), big.NewInt(10000))

    buyerKey, err := accounts.NewSeedKeyManager(buyerSeed)
    if err != nil {
        return nil, err
    }

    buyOfferSign, err := CalculateSignature(buyerKey, buyOffer)
    if err != nil {
        return nil, err
    }
    buyOffer.Sig = buyOfferSign

    // Generate the signature body for caller to calculate the signature
    buySignBody, err := client.GenerateSignBody(buyOffer, nil)

    fmt.Printf("create atomic match signature body:%s \n", buySignBody)

    // Generate the signature with private key and outside the Atomic Match function
    buySignature, err := client.GenerateSignature(buyPrivateKey, buyOffer)
    buyOffer.L1Sig = buySignature

    sellOffer := &types.OfferTxInfo{
        Type:               types.SellOfferType,
        OfferId:            int64(sellerOfferId),
        AccountIndex:       seller.Index,
        NftIndex:           nftIndex,
        AssetId:            0,
        AssetAmount:        big.NewInt(10000),
        ListedAt:           listedAt,
        ExpiredAt:          expiredAt,
        ChanelAccountIndex: 3,
        ChanelRate:         150,
        Sig:                nil,
    }

    sellerKey, err := accounts.NewSeedKeyManager(sellerSeed)
    if err != nil {
        return nil, err
    }

    sellOfferSign, err := CalculateSignature(sellerKey, sellOffer)
    if err != nil {
        return nil, err
    }
    sellOffer.Sig = sellOfferSign

    // Generate the signature body for caller to calculate the signature
    sellSignBody, err := client.GenerateSignBody(sellOffer, nil)
    fmt.Printf("create atomic match signature body:%s \n", sellSignBody)
    // Generate the signature with private key and outside the Atomic Match function
    sellSignature, err := client.GenerateSignature(sellPrivateKey, sellOffer)
    sellOffer.L1Sig = sellSignature

    txInfo := &types.AtomicMatchTxReq{
        BuyOffer:  buyOffer,
        SellOffer: sellOffer,
    }
    return txInfo, nil
}

txInfo, err := PrepareAtomicMatchTxReq(client)
assert.NoError(t, err)

// Generate the signature with private key
signature, err := client.GenerateSignature(privateKey, txInfo)
txId, err := client.AtomicMatch(txInfo, nil, signature)
assert.NoError(t, err)
fmt.Printf("send atomic match tx success, tx_id=%s \n", txId)
```
</TabItem>
</Tabs>

## zkBNB L1 Client

The zkBNBL1Client is used to interact with zkBNB proxy contract in l1.

### Interface

```go
    type ZkBNBL1Client interface {
        // SetPrivateKey will set the private key of the l1 account
        SetPrivateKey(pk string) error
        
        // DepositBNB will deposit specific amount bnb to l2
        DepositBNB(accountName string, amount *big.Int) (common.Hash, error)
    
        // DepositBEP20 will deposit specific amount of bep20 token to l2
        DepositBEP20(token common.Address, accountName string, amount *big.Int) (common.Hash, error)
    
        // DepositNft will deposit specific nft to l2
        DepositNft(nftL1Address common.Address, accountName string, nftL1TokenId *big.Int) (common.Hash, error)
    
        // RegisterZNS will register account in l2
        RegisterZNS(name string, owner common.Address, pubKeyX [32]byte, pubKeyY [32]byte) (common.Hash, error)
        
        // RequestFullExit will request full exit from l2
        RequestFullExit(accountName string, asset common.Address) (common.Hash, error)
    
        // RequestFullExitNft will request full nft exit from l2
        RequestFullExitNft(accountName string, nftIndex uint32) (common.Hash, error)
    }
```

### Init

```go
    client := NewZkBNBL1Client("l1 provider", "zkbnb proxy contract address")
```

### Send tx

Before you send tx, you need to set a private key to sign the tx:

```go
    client.SetPrivateKey("private key")
```

Then you can send txs.

### Register ZNS
```go
    var l2KeyManager, _ = accounts.NewSeedKeyManager("Random Seed")
    var l2Name = "xxx.legend"
    pk := l2KeyManager.PubKeyPoint()
    txHash, err := client.RegisterZNS("test1", common.HexToAddress(l1Address), big.NewInt(1e17), pk[0], pk[1])
```

### Deposit BNB
```go
    txHash, err := client.DepositBNB("test1", big.NewInt(1e18))
```

### Deposit BEP20
```go
	txHash, err := client.DepositBEP20(common.HexToAddress("token address"), "account name", big.NewInt(1000000))
```

### Full Exit Token
```go
	txHash, err := client.RequestFullExit("account name", common.HexToAddress("token address"))
```

### Full Exit Token
```go
	txHash, err := client.RequestFullExit("account name", common.HexToAddress("token address"))
```

### Deposit NFT
```go
	txHash, err := client.DepositNft("nft address", "account name", big.NewInt(1000000))
```

### Full Exit NFT
```go
	txHash, err := client.RequestFullExitNft("account name", big.NewInt(1000000))
```
