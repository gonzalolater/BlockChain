const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for(let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i];
            const prev = this.chain[i - 1];
            if(block.previousHash.toString() !== prev.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;

// * Create a function called isValid on our Blockchain that will return true or false if a block is valid or invalid respectively
// * isValid should check the integrity of every block in its chain by looking at each block's previousHash field and making sure that it is equal to the hash of the block before it.
