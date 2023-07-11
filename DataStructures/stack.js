class Stack {
    constructor() {
        this._items = [];
        this.count = 0
    }
    push(item) {
        this._items[this._count] = item;
        this._count++
    }
    pop() {
        if (this._count === 0) {
            return 'Underflow'
        }
        const item = this._items[this._count - 1];
        this._count--;

        for (let i = this._count; i < this._items.length; i++){
            this._items[i] = this._items[i + 1]
        }
        this._items.length = this.count;
        return item
    }
    peek() {
        if (this._count === 0) {
        return 'Underflow'
    }
    return this._items[this._count - 1]
    }
    clear() {
        this._items = []
        this._count = 0
    }
}

const stack = new Stack() 
stack.push('panjatan 5')
stack.push('imam 12')
stack.push('shaheed 72')

stack.pop()
stack.pop()
stack.clear()
stack.peek()

console.log('last item',stack.peek())