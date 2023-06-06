---
title: Software Requirements
---

# Software Requirements

## zkBNB
 |**prover**| | |**apiServer**| |**witness**|**commitor**|**monitor**|**sender**| 
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
node num|n| | |2| |1|1|1|1| 
config| | | |16G内存/8cpu| |16GC/8cpu|32C/64G|8G/4core|8G/4core| 
depend|prosql/redis/aws efs/Prometheus/SecretManager| | |prosql/redis/Prometheus/SecretManager| |prosql/redis/KV/Prometheus/SecretManager|prosql/redis/KV/Prometheus/SecretManager| | | 
 |prosql|redis|Prometheus| |KvRock| | | | | 
node num|2|2|1| |1| | | | | 
config| |16G内存/8cpu|16GC/8cpu| |32C/64G| | | | | 
 | | | | | | | | | | 

## NFT Marketplace
 |**apiServer**| | |**monitor**|**stats (statistics)**
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
node num|n| | |1|1
config|8G/4core| | |8G/4core|8G/4core
depend|MySQL/Redis/Prometheus/SecretManager| | |MySQL/Redis/Prometheus/SecretManager|MySQL/Redis/Prometheus/SecretManager
 |MySQL|Redis|Prometheus| | 
node num|1|1|1| | 
config|N/A|N/A|N/A| | 

## zkBNB Offchain
 |**zkbnb-offchain**| | | 
:-----:|:-----:|:-----:|:-----:|:-----:
node num|2| | | 
config|8G/4core| | | 
depend|MySQL/Redis/Prometheus/Apollo/SecretManager| | | 
 |MySQL|Redis|Prometheus|Apollo
node num|1|1|1|1
config|N/A|N/A|N/A|N/A