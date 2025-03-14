

function Node(value=null) {
    this.val = value;
    this.prev = null;
    this.next = null;
};



function LinkedList() {
    this.head = new Node();
    this.tail = this.head;
    this.length = 0;
};


LinkedList.prototype.append = function(value) {
    if (this.length === 0) {
        this.tail.val = value;
        this.length += 1;
        return;
    }

    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
};


LinkedList.prototype.prepend = function(value) {
    if (this.length === 0 ) {
        this.head.val = value;
        this.length += 1;
        return;
    }

    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
};


LinkedList.prototype.size = function() {
    return this.length;
};


LinkedList.prototype.getHead = function() {
    return this.head;
};


LinkedList.prototype.at = function(index) {
    if (index >= this.length || index < 0) {
        return null;
    }

    let current = this.head;
    let currentIndex = 0;
    while (current !== null) {
        if (currentIndex === index) {
            return current;
        }

        current = current.next;
        currentIndex += 1;
    }
};


LinkedList.prototype.getTail = function() {
    return this.tail;
};


LinkedList.prototype.pop = function() {
    if (this.length === 0) {
        return null;
    }
    if (this.length === 1) {
        const lastElement = this.head.val;
        this.head.val = null;
        this.length -= 1;
        return lastElement;
    }

    const lastElement = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length -= 1;
    return lastElement.val;
};


LinkedList.prototype.popleft = function() {
    if (this.length === 0) {
        return null;
    }
    if (this.length === 1) {
        const firstElement = this.head.val;
        this.head.val = null;
        this.length -= 1;
        return firstElement;
    }

    const firstElement = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length -= 1;
    return firstElement.val;
};


LinkedList.prototype.contains = function(value) {
    if (this.length === 0) {
        return false;
    }

    let current = this.head;
    while (current !== null) {
        const currentValue = current.val;
        if (currentValue === value) {
            return true;
        }
        current = current.next;
    }

    return false;
};


LinkedList.prototype.find = function(value) {
    if (this.length === 0) {
        return null;
    }

    let index = 0;
    let current = this.head;
    while (current !== null) {
        const currentValue = current.val;
        if (currentValue === value) {
            return index;
        }

        index += 1;
        current = current.next;
    }

    return null;
};


LinkedList.prototype.insertAt = function(value, index) {
    if (index < 0 || index >= this.length) {
        return false;
    }
    if (index === 0) {
        this.prepend(value);
        return true;
    }

    const newNode = new Node(value);
    let current = this.head;
    let currentIndex = 0;
    while (current !== null) {
        if (currentIndex !== index) {
            current = current.next;
            currentIndex += 1;
            continue;
        }

        const prev = current.prev;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = current;
        current.prev = newNode;
        this.length += 1;
        return true;
    }
};


LinkedList.prototype.removeAt = function(index) {
    if (index < 0 || index >= this.length) {
        return null;
    }
    if (index === 0) {
        return this.popleft();
    }
    if (index === this.length - 1) {
        return this.pop();
    }

    let current = this.head;
    let currentIndex = 0;
    while (current !== null) {
        if (currentIndex !== index) {
            currentIndex += 1;
            current = current.next;
            continue;
        }

        const prev = current.prev;
        const next = current.next;
        prev.next = next;
        next.prev = prev;
        this.length -= 1;
        return current.val;
    }
};


LinkedList.prototype.toString = function() {
    if (this.length === 0 ) {
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


export default LinkedList;



const list = new LinkedList();
// list.prepend(2);
// console.log(list.toString());
// list.prepend(3);
// console.log(list.toString());
// console.log(list.size())
// list.insertAt(4, 1);
// console.log(list.toString());
// list.insertAt(6, 2);
// console.log(list.toString());
// list.removeAt(2);
// console.log(list.toString());

// let current = list.getHead();

// while (current !== null) {
//     console.log(current);
//     current = current.next;
// }

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());