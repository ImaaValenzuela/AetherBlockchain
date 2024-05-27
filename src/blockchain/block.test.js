import Block from "./block";

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let hash;
    let data;

    beforeEach(() => {
        timestamp = new Date(1944, 5, 1);
        previousBlock = Block.genesis;
        data = "935";
        hash = "H4SH";
    })

    it('create an instance with parameters', () => {
        const block = new Block(timestamp,previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    })

    it('use static main', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
    })

    it('use static hash', () =>{
        hash = Block.hash(timestamp,previousBlock.hash, data);
        const hashOutput = 'e246de2593170465cfdf0cb50a83063cdae2e8e7b6182cb2877a21068940e7a6';
        
        expect(hash).toEqual(hashOutput);
    })
    it('use toString()', () =>{
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    })
})