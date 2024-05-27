import { SHA256 } from "crypto-js";

class Block{
    constructor(timestamp, previousHash, hash, data){
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = "935";
    }

    static get genesis(){
        const timestamp = (new Date(1943, 4, 26)).getTime();
        return new this(timestamp, undefined, "r1cht0f3n", "935")
    }

    static mine(previousBlock, data){
        const timestamp = Date.now();
        const { hash : previousHash } = previousBlock;
        const hash = Block.hash(timestamp, previousHash, data);

        return new this(timestamp, previousHash, hash, data)
    }

    static hash(timestamp, previousHash, data){
        return SHA256 (`${timestamp}${previousHash}${data}`).toString();
    }

    toString(){
        const {
            timestamp, previousHash, hash, data
        } = this;

        return `Block
            timestamp       : ${timestamp}
            previousHash    : ${previousHash}
            hash            : ${hash}
            data            : ${data}
        `
    }
}

export default Block;