class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }
    capital(value) {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
    get firstName() {
        return this.capital(this._firstName)
    }
    get lastName() {
        return this.capital(this._lastName)
    }
    set firstName(value) {
        this._firstName = this.capital(value)
    }
    set lastName(value) {
        this._lastName = this.capital(value)
    }
}
/*
const per = new Person('abbas','abidi')
console.log(per.firstName ,per.lastName);

per.firstName = 'syed'
console.log(per);

per.lastName = 'mohammad'
console.log(per);
*/

class Wallet {
    constructor() {
        this._balance = 0;
        this._transictions = []
    }
   deposit(amount) {
    this._processDeposit(amount)
    this._balance += amount
    }
    _processDeposit(amount) {
        console.log(`Depositing Amount ${amount}`);
        this._transictions.push({
            type: 'deposit',
            amount
        })
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('not enough fund to withdraw');
            return
        }
        this._processWithDraw(amount)
        this._balance -= amount
    }
    _processWithDraw(amount) {
        console.log(`withdrawing Amount ${amount}`);
        this._transictions.push({
            type: 'withdraw',
            amount
        })
    }
//when we set a getter method we can acess it like a propertiy not like method
    get balance () {
        return this._balance
    }
    get transictions() {
        return this._transictions
    }
}

const wallet = new Wallet() 
wallet.deposit(110);
wallet.withdraw(35);
wallet.withdraw(20);
wallet.deposit(250);
wallet.withdraw(80);
console.log(wallet.balance);
console.log(wallet.transictions);
// here is the good example of encapculation we have the this.balance property but we are not using it
//out side of the class we have created the get method to acess that properties

//* up until this time we were just using the _name to indicate the properety as a private property 
//* but in ES2022 we got the way to acutlly prevent the private property to acess from out side the calss that is a number sign #
//* previwsly we can aceess them but with this function we can prevent the class to aceess