class Queue {
    constructor() {
        this._items = [];
        this._count = 0;
        this._front = 0;
    }
    enqueue(item){
        this._items[this._count] = item
        this._count++
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Undefined'
        }

        const item = this._items[this._front]
        for (let i = this._front; i < this._count -1 ; i++) {
            this._items[i] = this._items[i + 1]
        }
        this._count--
        this._items.length = this._count
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return 'NO items in the Queue'
        }
        return this._item[this._front]
    }
    length(){
        return this._count - this._front
    }

    isEmpty() {
        return this._count === 0;
    }
 }

 const line = new Queue() 

 line.enqueue('majlis 1st')
 line.enqueue('majlis 2nd')
 line.enqueue('majlis 3rd')

 console.log('front item', line.peek());
