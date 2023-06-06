---
title: Platform FAQs
---

## What is zkBNB?
zkBNB is a zero-knowledge scalability solution, or L2, which focuses on straightforward token operations and built-in marketplaces for Gaming and Social use cases. It serves as a scalability solution for the BNB Smart Chain by bundling multiple transactions into a single transaction, reducing costs for on-chain transactions. The Zero Knowledge proof system used in zkBNB ensures a much faster finality time of the L2 transactions, that helps improve the user experience. 

## What are Zero Knowledge (ZK) Rollups?
Zero Knowledge Rollups are Layer 2 scheme that moves computation off-chain. It provides L1 security by rolling up multiple transactions into a single one and submitting validity proof back to L1. ZK Rollups only require valid proof of the final state, makingthem more private and storage-efficient comparing to storing all transaction data on L1.

## What is the connection between zkBNB and BNB Smart Chain? 
zkBNB serves as a scalability solution for the BNB Smart Chain. It bundles multiple transactions into a single transaction and posts it on the BSC, thereby reducing the cost of on-chain transactions. Once the transactions are rolled up and posted on the BSC block, only the transaction data is stored on the BSC, which can be verified using cryptographic primitives.

## What is the TPS of zkBNB?
TPS is around 3000

## What is the difference between zkBNB and opBNB?
zkBNB is a zero-knowledge proof layer 2 chain that targets to provide the NFT and Token Transactions for gaming and high frequent derivatives. It is not EVM-comptible. 

opBNB is a EVM-compatible layer 2 chain that targets to provide more flexibility to applications that want to be a open platform & ecosystem.

|Metrics|ZkBNB|Optimistic Rollup|
|:----|:----|:----|
|Mainnet|June, 2023|June/July,2023|
|Gas Token|BNB|BNB|
|VM|No|EVM|
|TPS*|5K (Target in 2023)|5-10K|
|Gas Fee/Gasless|?|<0.005$|
|Withdraw/Finality|Minutes|7 days|
|Security|Secure/Elegant Exit|Secure/Elegant Exit|
|Validators|1|TBD|
|Recommendation|More suitable for NFT and Token transactions, e.g., Gaming, and high frequent derivatives (DyDx or LoopRing). More suitable for Applications with massive users but focused and dedicated functions that can be translated to efficient ZKP circuits. Great chain for Web2 devs since they only have to use SDKs. zkBNB is very suitable for games that want smooth user experience and that do not require smart contracts to be deployed in their ecosystem.|More suitable for Applications that want to be an open platform & ecosystem but still enjoy the similar security level as L1 and an easy way to exit running. Game studios & engines might prefer Optimistic rollup over zkBNB because it allows them to create an ecosystem of developers, smart contracts and project to build on top of their chain. This is not the case with zkBNB.|
|Examples|Hooked，Tiny World, Gameta, MOBOX <br/> High frequent trading: Apolox | Game Studio, Game Engine （Cocos, Unity）Era7|


## What kind of security does zkBNB provide?
zkBNB shares the same level of security as BNB Smart Chain, guaranteed by the Succinct Non-interactive Argument of Knowledge (SNARK) cryptography proofs. For all the built-in operations in zkBNB, designated atomic cryptographic circuits were designed to support super-fast finality and unparalleled security.

## Does zkBNB support EVM?
zkEVM is a virtual machine that simulates an environment like Ethereum, allowing Ethereum smart contracts to be deployed on a zkRollup. Generating zero-knowledge proofs is a resource-intensive process that requires specialized hardware and significant investment in time, money, and effort. This significantly increases the costs, which eventually are distributed across the rolled-up transactions. 

On the contrary, zkBNB was designed to support mass adoption and the already thriving BNB Chain ecosystem. As such, instead of focusing on general-purpose EVM compatibility, zkBNB specifically focuses on the most used operation by the dApps - supported by any programming language. These include token transfers, and a built-in NFT marketplace.

By providing web-based API services, developers can build a new application or easily extend the existing codebase using their favorite programming language and skillset.

## What advantages does zkBNB have over BNB Smart Chain?  

|Metrics|BSC|ZkBNB|
|:----|:----|:----|
|Mainnet|Ready|June, 2023|
|Gas Token|BNB|BNB|
|VM|EVM|No|
|TPS*|2.2K (Target 5K in 2023)|5K (Target in 2023)|
|Gas Fee/Gasless|0.03$|?|
|Withdraw/Finality|33 seconds (6 secs after fast finality)|Minutes|
|Security|Secure|Secure/Elegant Exit|
|Validators|26 (21 cabinet, 5 candidates (20 soon))|1|
|Recommendation| DeFi Hub and Lego <br/> dApp with <100K DAU | More suitable for NFT and Token transactions, e.g., Gaming, and high frequent derivatives (DyDx or LoopRing). <br/>More suitable for Applications with massive users but focused and dedicated functions that can be translated to efficient ZKP circuits. <br/> Great chain for Web2 devs since they only have to use SDKs. <br/> zkBNB is very suitable for games that want smooth user experience and that do not require smart contracts to be deployed in their ecosystem.|
|Examples|New DeFi Projects （Low/Medium frequent trading）|Hooked，Tiny World, Gameta, MOBOX <br/> High frequent trading： Apolox|

zkBNB and BSC serve different purposes and augment each other rather than competitors. On the one hand, BSC is an EVM-compatible programmable platform to support general-purpose blockchain decentralized applications. As such, the development team has to possess the skill set of blockchain development using Solidity or other EVM languages. On the other hand, zkBNB provides a set of web-based services, which can be called by any programming language.

Also, being a general-purpose framework, developers can write any possible logic and deploy it on BSC. While it allows any possible use case, the generality does impair performance. On the contrary, a handful of the most used use cases were atomically programmed onto zkBNB cryptographic circuits to enable ultra-fast performance.

## What advantages does zkBNB have over the optimistic rollup services?
Optimistic rollups and zero-knowledge rollups are both second-layer scaling solutions for blockchain networks that aim to increase the transaction throughput of the base layer. 

Optimistic rollups use fraud proofs to ensure the correctness of the transactions being processed on the rollup layer. This means that the rollup layer can process transactions faster than the base layer, but the base layer still needs to validate the transactions, which can be time-consuming. Examples of Ethereum L2s that leverage optimistic rollups include Arbitrum, Optimism, and Boba Network.

On the other hand, zero-knowledge rollups use zero-knowledge proofs to validate the transactions on the rollup layer without revealing any details about the transactions to the base layer. This allows the rollup layer to process transactions faster without requiring the base layer to validate them, which can lead to an even greater increase in transaction throughput. 

As such, zkBNB, being a zero-knowledge-based rollup, provides much greater scalability, lower costs, and privacy for users since the details of their transactions are not revealed to the base layer.


## What advantages does zkBNB have over other types of zero knowledge rollup services, such as STARK?  
STARKs (Scalable Transparent Arguments of Knowledge) and SNARKs (Succinct Non-Interactive Arguments of Knowledge) are both types of zero-knowledge proof systems that can be used to validate transactions on a blockchain without revealing any information about the transactions themselves. Examples of products that leverage STARK rollups include Starknet, Dydx, and ImmutableX.

One key difference between STARKs and SNARKs is the size of the generated cryptographic proofs. SNARKs are known for generating very small proof sizes, which makes them well-suited for use in blockchain applications where space is limited, and speed is of paramount importance. Also, the non-interactive nature of SNARKs can make them faster to generate and verify than other types of zero-knowledge proof systems. 

STARKs, on the other hand, generally produce much larger proof sizes and, as such work much slower. However, STARKs are considered transparent proofs and don’t require a common reference string (CRS) and a setup process.

To account for the CRS setup process, zkBNB uses a well-proven multi-party computation (MPC) - a process in which multiple players donate their own randomness, which they destroy afterward. Being widely studied and well-understood by the research community makes SNARK a well-trusted zero-knowledge proof system.
.
## How expensive will zkBNB be at launch?
The transaction price in the rollup largely varies whether the rollup can fill the whole block on the L1, to which it rolls up the transactions. As such, the price will be determined by a number of variables related to the usage of the zkBNB services. It’s difficult to predict before launch. However, a few design elements of the network help support zkBNB as a cheap, scalable alternative to the BNB Smart Chain.

The design prefers simplicity's first principle over other considerations. Simple solutions are not only easy to implement, run, maintain, and extend but also friendly to software performance, which is the main goal of the design. For example, generic computing-intensive zk proof, like what ZkSync adopts, is ruled out according to this principle. 

zkBNB targets beyond the existing BNB Chain applications but also traditional Web2 users and developers. The system design tries to be as compatible as possible with popular Web2 and Web3 standards. 

:::info Don't see your question?
We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the [BNB forum](https://forum.bnbchain.org/), so you can get the answers you need and make us aware of new FAQ items.
:::

