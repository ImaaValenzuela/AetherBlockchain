import Block from './block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;
    let nonce;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 't3St-d4t4';
        hash = 'h4S4';
        nonce = 128;
    });

    it('create an instance with parameters', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data, nonce);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
        expect(block.nonce).toEqual(nonce);
    });

    it('use static mine()', () => {
        const block = Block.mine(previousBlock, data);
        const { difficulty } = block;

        expect(block.hash.length).toEqual(64);
        expect(block.hash.substring(0, difficulty)).toEqual('0'.repeat(difficulty));
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.nonce).not.toEqual(0);
        expect(data).toEqual(data);
    });

    it('use static hash()', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data, nonce);
        const hasOutput = '310c0c197d9bb5b1a62ec7b6b44e2f09c48bd5009a90bd74d2b4441ce1b239fe';

        expect(hash).toEqual(hasOutput);
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});
