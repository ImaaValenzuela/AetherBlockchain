import Wallet from "./wallet";

describe('wallet', () => {
    let wallet;

    beforeEach(() => {
        wallet = new Wallet();
    });

    it('it is a healthy wallet', () => {
        expect(wallet.balance).toEqual(100);
        expect(typeof wallet.keyPair).toEqual('object');
        expect(typeof wallet.publicKey).toEqual('string');
        expect(wallet.publicKey.length).toEqual(130);
    });
});