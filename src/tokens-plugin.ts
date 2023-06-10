import { Web3PluginBase, Contract } from 'web3';

import ERC20 from './artifacts/ERC20';
import ERC721 from './artifacts/ERC721';
import ERC777 from './artifacts/ERC777';
import ERC1155 from './artifacts/ERC1155';
import ERC4626 from './artifacts/ERC4626';

export class TokensPlugin extends Web3PluginBase {
  public pluginNamespace = 'tokens';

  public erc20(address: string): Contract<typeof ERC20.abi> {
    const erc20Contract = new Contract(ERC20.abi, address);
    erc20Contract.link(this);
    return erc20Contract;
  }

  public erc721(address: string): Contract<typeof ERC721.abi> {
    const erc721Contract = new Contract(ERC721.abi, address);
    erc721Contract.link(this);
    return erc721Contract;
  }

  public erc777(address: string): Contract<typeof ERC777.abi> {
    const erc777Contract = new Contract(ERC777.abi, address);
    erc777Contract.link(this);
    return erc777Contract;
  }

  public erc1155(address: string): Contract<typeof ERC1155.abi> {
    const erc1155Contract = new Contract(ERC1155.abi, address);
    erc1155Contract.link(this);
    return erc1155Contract;
  }

  public erc4626(address: string): Contract<typeof ERC4626.abi> {
    const erc4626Contract = new Contract(ERC4626.abi, address);
    erc4626Contract.link(this);
    return erc4626Contract;
  }
}

// Module Augmentation
declare module 'web3' {
  interface Web3Context {
    tokens: TokensPlugin;
  }
}
