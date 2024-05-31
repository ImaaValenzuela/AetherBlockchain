import adjustdifficulty from "./adjustDifficulty";

describe('test difficulty()', () => {
    let block;

    beforeEach(() => {
        block = {timestamp: Date.now(), difficulty: 3};
    });

    it('reduce the difficulty for slowly mined blocks', () => {
        expect(adjustdifficulty(block, block.timestamp + 60000)).toEqual(block.difficulty - 1);
    });

    it('increase the difficulty for quick mined blocks', () => {
        expect(adjustdifficulty(block, block.timestamp + 1000)).toEqual(block.difficulty + 1);
    });
})