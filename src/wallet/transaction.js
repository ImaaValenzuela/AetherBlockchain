import uuidV1 from 'uuid/v1';

class Transaction {
    constructor() {
        this.id = uuidV1();
        this.input = null;
        this.outputs = [];
    }

    static create(senderWallet, recipientAdress, amount) {
        const { balance, publicKey } = senderWallet;

        if (amount > balance) throw Error(`Amount: ${amount} exceeds balance.`);

        const transaction = new Transaction();
        transaction.outputs.push(...[
        { amount: balance - amount, address: publicKey },
        { amount, address: recipientAdress },
        ]);

        return transaction;
    }
}

export default Transaction;
