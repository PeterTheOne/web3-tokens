import Web3PluginBase, { Contract } from 'web3';

import ERC20 from './artifacts/ERC20';
import ERC721 from './artifacts/ERC721';
import ERC777 from './artifacts/ERC777';
import ERC1155 from './artifacts/ERC1155';
import ERC4626 from './artifacts/ERC4626';

export class TokensPlugin extends Web3PluginBase {
  public pluginNamespace = 'tokens';

  public erc20(address: string): Contract<typeof ERC20.abi> {
    return new Contract(ERC20.abi, address);
  }

  public erc721(address: string): Contract<typeof ERC721.abi> {
    return new Contract(ERC721.abi, address);
  }

  public erc777(address: string): Contract<typeof ERC777.abi> {
    return new Contract(ERC777.abi, address);
  }

  public erc1155(address: string): Contract<typeof ERC1155.abi> {
    return new Contract(ERC1155.abi, address);
  }

  public erc4626(address: string): Contract<typeof ERC4626.abi> {
    return new Contract(ERC4626.abi, address);
  }
}

// Module Augmentation
declare module 'web3' {
  interface Web3Context {
    tokens: TokensPlugin;
  }
}
