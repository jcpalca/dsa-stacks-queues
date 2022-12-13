const LinkedList = require("./linked-list");


/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this._ll = new LinkedList();
  }

  get top() {
    return this._ll.head;
  }

  get size() {
    return this._ll.length;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    return this._ll.unshift(val)
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    return this._ll.shift()
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this._ll.getAt(0)
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this._ll.length === 0
  }
}

module.exports = Stack;
