---
title: What powers zkBNB
---

# What powers zkBNB

## What is layer 2?
"Layer 2" is a term used to describe mechanisms that process batches of transactions independently of layer 1 and only periodically reports them to the main chain. This decreases the total number of transactions that have to be validated on layer 1. Layer 2s are also known as "execution layers" or "rollups".

zkBNB is built using zk rollup technology is supposed to work as a Layer-2 for BNB Smart Chain (BSC).

## How do ZK Rollups work?
ZK rollups consist of two main components:

- **Off-chain batching mechanism:** generates a cryptographic proof from a batch of transactions in a highly compressed form together with the previous state root and the new state root.

- **On-chain contract:** 
    * Stores the current state root of the rollup. 
    * Verifies that the previous state root in the batch matches the current state root. If so, it switches the state root to the new state root.

## Key Tech 

The key tech stack that powers the zkBNB are the BAS-SMT and zkBNB-crypto.

### Sparse Merkle Tree KV Store
Unlike most rollup solution to put the state tree in memory, [BAS-SMT](https://github.com/bnb-chain/zkbnb-smt/) is a versioned, snapshottable (immutable) sparse tree for persistent data. BAS-SMT is the key factor for the massive adoption of zkBNB.

### Circuit Model
[zkBNB Crypto](https://github.com/bnb-chain/zkbnb-crypto) is the library that describe the proving circuit. Once the ZK-rollup node has enough transactions, it aggregates them into a batch and compiles inputs for the proving circuit to compile into a succinct zk-proof.

zkbnb-crypto is the crypto library for zkBNB Protocol. It implements rollup block circuit and supports exporting groth16/plonk proving key, verifying key and solidity verifier contract. In order to be able to generate a proof from the prover side for the verifier to verify it, we use the argument system (zk-SNARK) for our arithmetic circuit.

There are 2 types of argument systems (interactive and non-interactive) and in zkbnb-crypto non-interactive argument system is used - **Groth16**.

#### How does Groth16 zk-SNARK works?

In short, here is how Groth16 zk-SNARK works:

1.	There is a preprocessing Setup procedure which generates public parameters Sp (PK) and Sv (VK) for a given Circuit C.
2.	Prover uses PK, public variable X and private witness W to generate proof.
3.	Verifier uses VK, public variable X and generated proof to accept or reject it.
