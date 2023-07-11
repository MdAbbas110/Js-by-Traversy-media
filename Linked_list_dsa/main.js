class Node {
    constructor(value) {
        this._vlaue = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._lenght = 0
    }

// Insert first node (Head)
inserFirst(value) {
    const newNode = new Node(value)
    newNode.next = this._head
    this._head = newNode
    this._lenght++
}

// Insert Last node (Tail)
insertLast(value) {
    const newNode = new Node(value)
    let current = this._head

    while (current.next) {
        current = current.next
    }

    current.next = newNode;
    this._lenght++
}

// Insert atIndex (at any index)
insertAt(value, index) {
    if (index > this._lenght) {
        return
    }
    if (index === 0) {
        this.inserFirst(value)
        return;
    }

    const newNode = new Node(value)
    let current , previous;
    current = this._head;
    let counter = 0 

    while (counter < index) {
        previous = current
        current = current.next
        counter++
    }

    newNode.next = current
    previous.next = newNode;
    this._lenght
}

// Get at index
getAt(index) {
    let current = this._head
    let count = 0

    while (current) {
        if (count === index) {
            console.log(current._value);
        }
        count++
        current = current.next
    }
    return null
}


// Remove at a index
removeAt(index) {
    if (index > this._lenght) {
        return
    }

    let current = this._head
    let previous;
    let count = 0 

    if (index === 0) {
        this._head = current.next
    } else {
        while (count < index) {
            count++
            previous.current
            current.next
        }
        previous.next = current.next
    }
    this._lenght--
}

// Print list data 
printList() {
    let current = this._head;
    let list = '';

    while (current) {
        list += current._value + ' ';
        current = current.next;
    }
    console.log(list);
}

// Clear List data
clearList() {
    this._head = null;
    this._lenght = 0
}


}
const NodeList = new LinkedList()

NodeList.inserFirst(110)
NodeList.inserFirst(786)
NodeList.inserFirst(72)

NodeList.insertLast(14)
NodeList.insertLast(12)

NodeList.insertAt(92, 3)

NodeList.getAt(2)

console.log(NodeList);
NodeList.printList()

NodeList.getAt(2)