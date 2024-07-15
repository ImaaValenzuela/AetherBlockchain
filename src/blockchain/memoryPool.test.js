import MemoryPool from './memoryPool';
import Wallet, {Transaction} from '../wallet';

describe('MemoryPool', () => {
    let memoryPool;
    let wallet;
    let transaction;

    beforeEach(() => {
        memoryPool = new MemoryPool();
        wallet = new Wallet();
        transaction = Transaction.create(wallet, 'r4d0m-4dre55', 5);
        memoryPool.addOrUpdate(transaction);
    })

    it('Has one transaction', () => {
        expect(memoryPool.transactions.length).toEqual(1);
    })

    it('adss a transaction to the memory pool', () => {
        const found = memoryPool.transactions.find(({id}) => id === transaction.id);
        expect(found).toEqual(transaction);
    })

    it('updates a transaction in the memory pool', () => {
        const txOld = JSON.stringify(transaction);
        const txNew = transaction.update(wallet, '0th3r-4dre55', 10);
        memoryPool.addOrUpdate(txNew);
        expect(memoryPool.transactions.length).toEqual(1);
        const found = memoryPool.transactions.find(({id}) => id === transaction.id);
        expect(JSON.stringify(found)).not.toEqual(txOld);
        expect(txNew).toEqual(found);
    })

    it('wipes transactions', () => {
        memoryPool.wipe();
        expect(memoryPool.transactions.length).toEqual(0);
    });
})