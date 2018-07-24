/**
 * @class Blockchain
 *
 * @classdesc This class contain the functions to manage a blockchain over node
 * inside it have two arrays with the chain and the nodes.
 *
 * @author      Oscar Eduardo Bernal <oscarbernal93@gmail.com>
 *
 * @requires    request-promise
 * @requires    sha3
 * @requires    fs
 *
 *
 * @prop {Array}	chain			The entire blockchain with all the blocks
 * @prop {Array}	nodes			The record of all the nodes
 * @prop {Object}	current_block	The current data to be saved
 *  
 */

 class Blockchain {
 	
 	constructor() {
 		this.chain = ­­[];
 		this.nodes = ­­[];
 		this.current_block = ­­­{}
 	}
 	/**
     * @function new_block
     * @memberof Blockchain
     *
     * @desc This function takes the current_block and save it into the chain
     * uses the proof of work and the previous hash to determine if the block
     * is valid.
     *
     * @param {proof}		proof of work number
     * @param {string}      hash of the previous block
     * 
     * @return {boolean}	result of the operation    
     */
    new_block(proof, previous_hash) {}
    /**
     * @function save_status
     * @memberof Blockchain
     *
     * @desc This function creates an save the given date (transaction or 
     * whatever) to be published in the next block
     *
     * @param {data}		information to be saved on the current block
     * 
     * @return {boolean}	result of the operation    
     */
    save_status(data) {}
    /**
     * @function last_block
     * @memberof Blockchain
     *
     * @desc This function allows to check the information of the last block of 
     * the chain.		
     * 
     * @return {object}		the last block of the chain    
     */
    last_block() {}
    /**
     * @function hash
     * @memberof Blockchain
     *
     * @desc This function creates the hash of the block using sha3 algorithm
     *
     * @param {block}		information to be hashed
     * 
     * @return {string}		result of the hash function    
     */
    hash(block) {}
    /**
     * @function pow
     * @memberof Blockchain
     *
     * @desc This function find by brute force the smallest natural number such
     * that the calculus of the hash of the concatenation of the number and the
     * previous hash contain leading the specified "proof secuence" 
     *
     * @param {previous_hash}	hash of the previous block
     * 
     * @return {number}			the number of the calculated proof of work  
     */
    pow(previous_hash) {}
    /**
     * @function validate
     * @memberof Blockchain
     *
     * @desc This function validate if the hash of the given params contains
     * leading the specified "proof secuence" 
     *
     * @param {previous_hash}	hash of the previous block
     * @param {proof}			number of the proof of work
     * 
     * @return {boolean}		result of the operation  
     */
    validate(previous_hash,proof) {}
    /**
     * @function add_node
     * @memberof Blockchain
     *
     * @desc This function vatidate if the node is new, try to connect and add 
     * it to the nodes list, optionally can notifi to the other nodes in the
     * list to a pound-robin connection (need improvements to larger chains)
     *
     * @param {address}			ip of the new node
     * 
     * @return {boolean}		result of the operation  
     */
    add_node(address) {}
    /**
     * @function add_node
     * @memberof Blockchain
     *
     * @desc This function vatidate if the node is new, try to connect and add 
     * it to the nodes list, optionally can notifi to the other nodes in the
     * list to a pound-robin connection (need improvements to larger chains)
     *
     * @param {address}			ip of the new node
     * 
     * @return {boolean}		result of the operation  
     */
    add_node(address) {}
    /**
     * @function validate_chain
     * @memberof Blockchain
     *
     * @desc This function validate an entire chain, reviewing te continuity
     * an the proof of each block 
     *
     * @param {chain}			array with the blocks of the chain
     * 
     * @return {boolean}		result of the operation  
     */
    validate_chain(chain) {}
    /**
     * @function resolve_conflicts
     * @memberof Blockchain
     *
     * @desc This function solves the consensus problem, replace if is needed
     * the own chain with the largest of the cains of the nodes (if is valid)
     * and have majority 
     *
     * @param {chain}			array with the blocks of the chain
     * 
     * @return {boolean}		result of the operation  
     */
    resolve_conflicts(chain) {}
    /**
     * @function brodcast_block
     * @memberof Blockchain
     *
     * @desc This function broadcast the last mined block to the nodes
     *
     * @param {object}			block to be published
     * 
     * @return {boolean}		result of the operation  
     */
    brodcast_block(block) {}
    /**
     * @function broadcast_transaction
     * @memberof Blockchain
     *
     * @desc This function publish a transaction to the network
     *
     * @param {object}			data to be published
     * 
     * @return {boolean}		result of the operation  
     */
    broadcast_transaction(data) {}
    /**
     * @function add_block
     * @memberof Blockchain
     *
     * @desc This function when receive a block mined by another node, validate
     * it , add to the chain and start the mine of the next node.
     *
     * @param {object}			block to be published
     * 
     * @return {boolean}		result of the operation  
     */
    add_block(block) {}
    /**
     * @function mine
     * @memberof Blockchain
     *
     * @desc This function resolve tho proof of work and publish it to the
     * network
     * 
     * @return {boolean}		result of the operation  
     */
    mine(block) {}

    //API REST
    //Is needed to create routes to the functions:
    // mine
    // get_chain
    // get_nodes
    // add_block
    // add_node
    // last_block
    // save_state

}