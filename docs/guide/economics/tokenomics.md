---
title: Tokenomics
---

# Tokenomics

One thing users need to be aware of is the tokenomics of the projects. Each of the previously described projects uses its own token, which solely serves as a utility token of the particular project. 

This is very different from zkBNB, which uses the BNB token as the utility token. One of the unique benefits of the BNB token is that it has a limited supply, which means no one can create more BNB tokens just to prop their balance sheet. Moreover, the BNB token is also deflationary and is periodically burned or moved out of circulation during the block creation of the BNB Smart Chain. Lastly, the BNB token is used for all the projects within the BNB Chain ecosystem, including all the storage and scaling solutions.

All these make BNB tokens extremely versatile, having no correlation with any specific domain, and ideal for financial project planning and COGS predictability.

## Supported Tokens
zkBNB can be used to transfer BNB, BEP20 and BEP721 tokens. zkBNB supports a maximum of 65535 BEP20 tokens and 1099511627775 BEP721 tokens. For BEP20 tokens, each supported token need to be listed on zkBNB L1 contract first. For BEP721 tokens, there are two sources: one is to deposit BEP721 token from BSC network to zkBNB, another is to directly mint on zkBNB.

zkBNB is not responsible for security of supported token contract. Please use any token on your own risk.

## List Token
zkBNB use `AssetGovernance` contract to manage supported tokens. To list token on zkBNB, call function `addAsset(address _assetAddress)` of AssetGovernance contract.

Notice there is a listing fee for listing token, and fees are denominated using a specific token. The listing fee and fee token can be retrived by calling function `listingFee` and `listingFeeToken`. Make sure the sender that calls `addAsset` has enough fee token balance.

In zkBNB the cost of every transaction comes from two parts:

- **L2 part**: every transaction needs to read or write state storage, and zkBNB prover needs to generate a SNARK proof for every transaction. This part depends on the use of hardware resources and is therefor invariable;

- **L1 part**: zkBNB must pay BNB gas to commit, verify and execute L2 blocks by sending corresponding L1 transaction. The L1 fees need to be averaged per L2 transaction which is orders of magnitude cheaper than the cost of normal BNB/BEP20 transfers. In addition, for the special transaction types which need to be executed on contract such as `Withdraw` and `WithdrawNft`, there is extra gas cost to be covered.

Users can easily get fee cost of every transaction type using rpc method provided by zkBNB, then pay transaction fees in multi fee tokens supported by zkBNB. For example, suppose zkBNB supports BNB/USDT, when users make a transaction, users can use BNB or USDT to pay transaction fees for their own convenience.