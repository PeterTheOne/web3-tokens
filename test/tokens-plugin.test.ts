import { Web3, Web3Eth, Web3Context }  from 'web3';

import { TokensPlugin } from '../src/tokens-plugin';

describe('TokensPlugin Tests', () => {
	it('should register TokensPlugin plugin on Web3Context instance', () => {
		const web3Context = new Web3Context('http://127.0.0.1:8545');
		web3Context.registerPlugin(new TokensPlugin());
		expect(web3Context.tokens).toBeDefined();
	});

	it('should register TokensPlugin plugin on Web3Eth instance', () => {
		const web3Eth = new Web3Eth('http://127.0.0.1:8545');
		web3Eth.registerPlugin(new TokensPlugin());
		expect(web3Eth.tokens).toBeDefined();
	});

	describe('TokensPlugin method tests', () => {
		const requestManagerSendSpy = jest.fn();

		let web3Context: Web3;

		beforeAll(() => {
			web3Context = new Web3('http://127.0.0.1:8545');
			web3Context.registerPlugin(new TokensPlugin());
			web3Context.tokens.requestManager.send = requestManagerSendSpy;
		});

		it('should call TokensPlugin ERC20 Contract balanceOf with expected RPC object', async () => {
      const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const vitalikEth = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
			const erc20Contract = await web3Context.tokens.erc20(daiAddress);
      await erc20Contract.method.balanceOf(vitalikEth);
			expect(requestManagerSendSpy).toHaveBeenCalledWith({
				method: 'eth_call',
				params: [
					{
						data: '0x70a082310000000000000000000000006b175474e89094c44da98b954eedeac495271d0f',
						input: '0xfeaf968c',
						to: daiAddress,
					},
					'latest',
				],
			});
		});
	});
});