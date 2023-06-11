web3-tokens
===========

is a web3.js version 4 plugin that gives you Contract instances for the most common token standards including at least ERC20, ERC721 and ERC1155.

Uses `@openzeppelin/contracts` as a source of contract abi files and does contract type inferance like https://github.com/web3/web3-contract-types-example .


how to use it
-------------

Run `npm install web3@4.0.2-dev.f8a2533.0 web3-tokens`. And if `web3` version `4.0.2` is released (or a later one), you can do `npm install web3 web3-tokens`

```typescript

import { Web3 } from 'web3';
import { TokensPlugin } from 'web3-tokens';

const web3 = new Web3('https://eth.public-rpc.com'); // put any node url that is connected to mainnet
web3.registerPlugin(new TokensPlugin());

const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
const vitalikEth = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
const erc20Contract = await web3.tokens.erc20(daiAddress);

const balance = await erc20Contract.methods.balanceOf(vitalikEth).call();

console.log(balance);
```

how to test
-----------

Run `npm run test`.


how to publish
--------------

Run `npm run build` and then `npm publish --access public`.


how to add more contracts
-------------------------

Add them to `artifacts.json` and run `npm run gen`.

Then update the `tokens-plugin.ts`.


Contributing
------------

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
-------

[MIT](https://choosealicense.com/licenses/mit/)
