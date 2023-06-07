---
title: zkBNB Web SDK
---

# Quickstart

zkBNB Web SDK provides API for interacting with zkBNB L2 component in the node environment.
The SDK offers various L2 operations such as get account details, get gas fees etc.
To understand the entire scope of operations available, see [API Reference](/docs/zkbnb-api).
In addition, SDK comes with a crypto component for signing txs and sending signed txs to zkBNB L2.

This SDK does not provide methods to interact with zkBNB L1.

## Install

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@bnb-chain/zkbnb-js-sdk/dist/web/zk.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/@bnb-chain/zkbnb-js-sdk/dist/web/zk.js"></script>
```

## Usage

### Browser

Use directly in the browser via script tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://cdn.jsdelivr.net/npm/@bnb-chain/zkbnb-js-sdk/dist/web/zk.js"></script>
</head>
<body>
  <script>
    const client = new Zk.Client('https://testapi.zkbnbchain.org');

    (async () => {
      const res = await client.getAccountInfoByAccountIndex(1);
      console.log(res)
    })()
  </script>
</body>
</html>
```

### ESM

If you use module bundler such as [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/guide/en/), etc:
#### Install
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

```typescript
import { Client } from '@bnb-chain/zkbnb-js-sdk';

const client = new Client('https://testapi.zkbnbchain.org');

(async () => {
  const res = await client.getAccountInfoByAccountIndex(1);
  console.log(res)
})()
```

## Interfaces
For More Documents, Please refer to [JS SDK](../zkbnb-js-sdk/quickstart.md)
