

function Node(value=null) {
    this.val = value;
    this.prev = null;
    this.next = null;
};



/**
 * A double-ended queue built off of a doubly linked list.
 * @param {iterator} [iterable] - An object that implements Symbol.iterator
 * @return {Deque}
 */
function Deque(iterable) {
    this.head = new Node();
    this.tail = this.head;
    this._length = 0;

    if (Symbol.iterator in Object(iterable)) {
        for (let element of iterable) {
            this.push(element);
        }
    }
};


Object.defineProperty(Deque.prototype, "length", {
    get: function() {
        return this._length;
    }
});


/**
 * Add an element to the back (right side) of the deque.
 * @param {*} value - The element to be added to the deque.
 * @return {undefined} 
 */
Deque.prototype.push = function(value) {
    if (this._length === 0) {
        this.tail.val = value;
        this._length += 1;
        return;
    }

    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this._length += 1;
};


/**
 * Add an element to the front (left side) of the deque.
 * @param {*} value - The element to be added to deque.
 * @return {undefined} 
 */
Deque.prototype.pushLeft = function(value) {
    if (this._length === 0 ) {
        this.head.val = value;
        this._length += 1;
        return;
    }

    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this._length += 1;
};


/**
 * Get the first element in the deque (the front element) without removing it.
 * @return {*} The first element in the deque.
 */
Deque.prototype.getHead = function() {
    return this.head.val;
};


/**
 * Get the last element in the deque (the back element) without removing it.
 * @return {*} The last element in the deque.
 */
Deque.prototype.getTail = function() {
    return this.tail.val;
};


/**
 * Get an element from the deque using an order-based index. Throws a RangeError with an invalid index.
 * @param {Integer} index - A zero-based index.
 * @return {*} The nth element in the deque.
 */
Deque.prototype.at = function(index) {
    if (index >= this._length || index < 0) {
        throw new RangeError("Index is out of bounds.");
    }

    const pastMid = index > Math.floor(this._length/2);

    let current = (pastMid) ? this.tail : this.head;
    let currentIndex = (pastMid) ? this._length - 1 : 0;
    const indexChange = (pastMid) ? -1 : 1;
    while (current !== null) {
        if (currentIndex === index) {
            return current.val;
        }

        current = (pastMid) ? current.prev : current.next;
        currentIndex += indexChange;
    }
};


/**
 * Remove and return the last element in the deque.
 * @return {*} The element at the back (right side) of the deque. 
 */
Deque.prototype.pop = function() {
    if (this._length === 0) {
        return null;
    }
    if (this._length === 1) {
        const lastElement = this.head.val;
        this.head.val = null;
        this._length -= 1;
        return lastElement;
    }

    const lastElement = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this._length -= 1;
    return lastElement.val;
};


/**
 * Remove and return the first element in the deque.
 * @return {*} The element at the front (left side) of the deque. 
 */
Deque.prototype.popleft = function() {
    if (this._length === 0) {
        return null;
    }
    if (this._length === 1) {
        const firstElement = this.head.val;
        this.head.val = null;
        this._length -= 1;
        return firstElement;
    }

    const firstElement = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this._length -= 1;
    return firstElement.val;
};


/**
 * 
 * @param {*} value - The element to be added to the deque. 
 * @param {integer} index 
 * @returns 
 */
Deque.prototype.insertAt = function(value, index) {
    if (index < 0 || index >= this._length) {
        return false;
    }
    if (index === 0) {
        this.pushLeft(value);
        return true;
    }

    const pastMid = index > Math.floor(this._length/2);

    const newNode = new Node(value);
    let current = (pastMid) ? this.tail : this.head;
    let currentIndex = (pastMid) ? this._length - 1 : 0;
    const indexChange = (pastMid) ? -1 : 1;

    while (current !== null) {
        if (currentIndex !== index) {
            current = (pastMid) ? current.prev : current.next;
            currentIndex += indexChange;
            continue;
        }

        const prev = current.prev;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = current;
        current.prev = newNode;
        this._length += 1;
        return true;
    }
};


Deque.prototype.removeAt = function(index) {
    if (index < 0 || index >= this._length) {
        return null;
    }
    if (index === 0) {
        return this.popleft();
    }
    if (index === this._length - 1) {
        return this.pop();
    }

    const pastMid = index > Math.floor(this._length/2);

    let current = (pastMid) ? this.tail : this.head;
    let currentIndex = (pastMid) ? this._length - 1 : 0;
    const indexChange = (pastMid) ? -1 : 1;

    while (current !== null) {
        if (currentIndex !== index) {
            currentIndex += indexChange;
            current = (pastMid) ? current.prev : current.next;
            continue;
        }

        const prev = current.prev;
        const next = current.next;
        prev.next = next;
        next.prev = prev;
        this._length -= 1;
        return current.val;
    }
};


Deque.prototype.reverse = function() {
    const head = this.head;
    this.head = this.tail;
    this.tail = head;

    let current = this.tail;
    while (current !== null) {
        const prev = current.prev;
        const next = current.next;
        current.next = prev;
        current.prev = next;
        current = next;
    }
};


Deque.prototype.rotate = function(rotations=1) {
    if (rotations === 0) {
        return;
    }
    
    if (rotations > 0) {
        for (let i = 0; i < rotations; i += 1) {
            this.pushLeft(this.pop());
        }
    } else {
        for (let i = 0; i < Math.abs(rotations); i += 1) {
            this.push(this.popleft());
        }
    }
};


Deque.prototype.copy = function() {
    if (this._length === 0) {
        return new Deque();
    }

    const newDeque = new Deque();
    let current = this.head;

    while (current !== null) {
        newDeque.push(current.val);
        current = current.next;
    }

    return newDeque;
};


Deque.prototype.clear = function() {
    this.head.val = null;
    this.head.next = null;
    this.tail = this.head;
    this._length = 0;
};


Deque.prototype[Symbol.iterator] = function() {
    let current = this.head;
    return {
        next: function() {
            if (current === null || this._length === 0) {
                return {value: undefined, done: true};
            } else {
                const result = current.val;
                current = current.next;
                return {value: result, done: false};
            }
        },
    };
};


Deque.prototype[Symbol.toStringTag] = function() {
    return "Deque";
};


Deque.prototype.toArray = function() {
    if (this._length === 0) {
        return [];
    }
    const array = [];

    let current = this.head;
    while (current !== null) {
        array.push(current.val);
        current = current.next;
    }
    
    return array;
};


Deque.prototype.toString = function() {
    if (this._length === 0 ) {
        return "null";
    }
    const stringArray = [];
    let current = this.head;

    const linkSymbol = " -> ";

    while (current !== null) {
        const value = current.val;
        const stringSegment = `( ${value} )`;
        stringArray.push(stringSegment);
        stringArray.push(linkSymbol);
        current = current.next;
    };

    stringArray.push("null");

    return stringArray.join("");
};


export default Deque;


const deque = new Deque([1, 2, 3, 4, 5])
deque.at()