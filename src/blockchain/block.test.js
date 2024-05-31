import Block, {DIFFICULTY} from "./block";

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let hash;
    let data;
    let nonce;

    beforeEach(() => {
        timestamp = new Date(1944, 5, 1);
        previousBlock = Block.genesis;
        data = "935";
        hash = "H4SH";
        nonce = 128;
    })

    it('create an instance with parameters', () => {
        const block = new Block(timestamp,previousBlock.hash, hash, data, nonce);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
    })

    it('use static mine', () => {
        const block = Block.mine(previousBlock, data);
        const {difficulty} = block;


        expect(block.hash.length).toEqual(64);
        expect(block.hash.substring(0, difficulty)).toEqual('0'.repeat(difficulty));
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.nonce).not.toEqual(0);
        expect(block.data).toEqual(data);
    })

    it('use static hash', () =>{
        hash = Block.hash(timestamp,previousBlock.hash, data, nonce);
        const hashOutput = '19f3279fb37831ca427b3adc2ed777d5a6ef7b64b27d41691ee93a1ee10fe094';
        
        expect(hash).toEqual(hashOutput);
    })
    it('use toString()', () =>{
        const block = Block.mine(previousBlock, data);

        console.log(block.toString());

        expect(typeof block.toString()).toEqual('string');
    })
})