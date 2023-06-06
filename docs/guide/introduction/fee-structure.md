---
title: Fee Structure
---

# Gas and Fee Structure on zkBNB

## Fee Structure on zkBNB

There are three types of fees associate with using zkBNB
* Protocol Fees
* Gas Fees
* Marketplace Fee

Fees are additional amounts that a user pays on top of a base price of an asset. These can be imposed by various entities. The following table illustrates the fees on zkBNB.

**Entity**|**Type of Fee**|**Amount**|**Example**
:-----:|:-----:|:-----:|:-----:
zkBNB|Protocol|2% of every NFT trade|Alice lists an NFT for 1 ETH on a marketplace. When Bob purchases this NFT, he would need to pay 1.02 ETH where 1 ETH goes to Alice and 0.02 ETH goes to zkBNB.
3rd parties builds marketplace via zkBNB | Maker Marketplace Fee | "Decided by 3rd platforms" | Alice wishes to receive 0.99 ETH for her NFT assets and lists it on a marketplace that imposes a maker fee of 1%. Therefore, the price that the asset will be listed for on the marketplace is 1 ETH.
3rd parties builds marketplace via zkBNB | Taker Marketplace Fee | Decided by 3rd platforms | Alice wishes to receive 1 ETH for her NFT assets and lists it on a marketplace. Bob wishes to buy the asset from a different marketplace that imposes a taker fee of 1% and marketplace fee is 1.5% and will therefore be presented with a buying price of 1.025 ETH inclusive of the taker marketplace fee.
Collection royalty recipient, ie. owner of an NFT smart contract | Royalty | Decided by Creators | Alice mints a collection of assets on zkBNB and sets a 5% royalty for every asset in the collection to go to her. <br/> Bob owns an asset from Alice's collection and sets the sale price of 1 ETH. The marketplace on which he lists the asset will display a selling price of 1 ETH. <br/>When Ciaran comes along and buys this asset, he pays 1.05 ETH, 1 ETH of which goes to Bob, and 0.05 ETH goes to Alice.

## Different transaction on zkBNB
This different transactions that can take palce on zkBNB are:
* Transfer token
* Mint NFT
* Withdraw BNB(other token, balance>=0)
* Withdraw NFT
* Full exit
* Full exit NFT

## Gas Costs on zkBNB

In the table given below, we list the averge gas used and price in BNB for each of these transaction types on zkBNB.

 |**L2 Gas used**|**Price(BNB)**
:-----:|:-----:|:-----:
Transfer token/NFT|6061|0.00002
Mint NFT|10000|0.000033
Withdraw token|60606|0.0002
Withdraw NFT|242424|0.0008
Active account|45455|0.00015
Full exit token/NFT|75758|0.00025
Deposit|/|0
NFT atomic match|/|0
Create collection|12121|0.00004
Cancel offer|6061|0.00002


