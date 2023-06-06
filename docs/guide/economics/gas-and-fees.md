---
title: Gas and Fees
---
# Gas and Fees
In this document, we specify the gas and fee structure on zkBNB. 

:::caution 
This is a living document and is susceptible to changes
:::


## Gas Costs on zkBNB
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

## Fee on zkBNB

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

What kind of security does zkBNB provide?
zkBNB shares the same level of security as BNB Smart Chain, guaranteed by the Succinct Non-interactive Argument of Knowledge (SNARK) cryptography proofs. For all the built-in operations in zkBNB, designated atomic cryptographic circuits were designed to support super-fast finality and unparalleled security.

Does zkBNB support EVM?
zkEVM is a virtual machine that simulates an environment like Ethereum, allowing Ethereum smart contracts to be deployed on a zkRollup. Generating zero-knowledge proofs is a resource-intensive process that requires specialized hardware and significant investment in time, money, and effort. This significantly increases the costs, which eventually are distributed across the rolled-up transactions. 

On the contrary, zkBNB was designed to support mass adoption and the already thriving BNB Chain ecosystem. As such, instead of focusing on general-purpose EVM compatibility, zkBNB specifically focuses on the most used operation by the dApps - supported by any programming language. These include token transfers, and a built-in NFT marketplace.

By providing web-based API services, developers can build a new application or easily extend the existing codebase using their favorite programming language and skillset.

What advantages does zkBNB have over BNB Smart Chain?  



### When are fees charged on zkBNB?

In zkBNB the cost of every transaction comes from two parts:

- **L2 part**: every transaction needs to read or write state storage, and zkBNB prover needs to generate a SNARK proof for every transaction. This part depends on the use of hardware resources and is therefor invariable;

- **L1 part**: zkBNB must pay BNB gas to commit, verify and execute L2 blocks by sending corresponding L1 transaction. The L1 fees need to be averaged per L2 transaction which is orders of magnitude cheaper than the cost of normal BNB/BEP20 transfers. In addition, for the special transaction types which need to be executed on contract such as `Withdraw` and `WithdrawNft`, there is extra gas cost to be covered.

Users can easily get fee cost of every transaction type using rpc method provided by zkBNB, then pay transaction fees in multi fee tokens supported by zkBNB. For example, suppose zkBNB supports BNB/USDT, when users make a transaction, users can use BNB or USDT to pay transaction fees for their own convenience.