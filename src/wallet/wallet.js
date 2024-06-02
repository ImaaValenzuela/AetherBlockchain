import Elliptic from 'elliptic';

const ec = Elliptic.ec('secp256k1');
const INITIAL_BALANCE = 100;

class Wallet{
    constructor(){
        this.balance = INITIAL_BALANCE;
        this.keyPair = ec.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    };

    toString() {
        const {
        balance, publicKey,
        } = this;

        return `Block -
        Balance       : ${balance}
        Public Key    : ${publicKey}
        `;
    };
};

export default Wallet;