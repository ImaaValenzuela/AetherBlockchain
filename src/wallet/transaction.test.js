import Transaction from './transaction';
import Wallet from './wallet';

describe('Transaction', () => {
    let wallet;
    let transaction;
    let amount;
    let recipientAdress;

    beforeEach(() => {
        wallet = new Wallet();
        recipientAdress = 'r3c1p13nt';
        amount = 5;
        transaction = Transaction.create(wallet, recipientAdress, amount);
    });

    it('outputs the `amount` subtracted from the wallet balance', () => {
        const output = transaction.outputs.find(({ address }) => address === wallet.publicKey);
        expect(output.amount).toEqual(wallet.balance - amount);
    });

    it('outputs the `amount` added to the recipient', () => {
        const output = transaction.outputs.find(({ address }) => address === recipientAdress);
        expect(output.amount).toEqual(amount);
    });

    describe('transacting with an amount that exceeds the balance', () => {
        beforeEach(() => {
        amount = 500;
        transaction = undefined;
        });

        it('does not create the transaction', () => {
        expect(() => {
            transaction = Transaction.create(wallet, recipientAdress, amount);
        }).toThrowError(`Amount: ${amount} exceeds balance.`);
        });
    });

});
