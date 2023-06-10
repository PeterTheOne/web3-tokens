web3-tokens
===========

is a web3.js version 4 plugin that gives you Contract instances for the most common token standards including at least ERC20, ERC721 and ERC1155.

Uses `@openzeppelin/contracts` as a source of contract abi files and does contract type inferance like https://github.com/web3/web3-contract-types-example .


how to publish
--------------

Run `npm run build` and then `npm publish --access public`.


how to use it
-------------

Run `npm install web3@4 web3-tokens`.

```
import Web3 from 'web3';
import { TokensPlugin } from 'web3-tokens';

web3 = new Web3('http://127.0.0.1:8545');
web3.registerPlugin(new TokensPlugin());

const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
const vitalikEth = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
const erc20Contract = await web3.tokens.erc20(daiAddress);
await erc20Contract.method.balanceOf(vitalikEth);
```
