const LinkedList = require("./linked-list");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this._ll = new LinkedList();
  }

  get first() {
    return this._ll.head;
  }

  get last() {
    return this._ll.tail;
  }

  get size() {
    return this._ll.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    return this._ll.push(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    return this._ll.shift();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._ll.getAt(0);
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this._ll.length === 0;
  }
}

module.exports = Queue;
