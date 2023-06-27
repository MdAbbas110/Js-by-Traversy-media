//parent class
class Shape {
    constructor(name) {
        this.name = name
    }
    logName() {
        //console.log('Shape Name ' + this.name);
    }
}
//this is a sub class
//just having extends does lot behind the seen to inherits properties
class Rectangle extends Shape {
    constructor(name, width , height) {
    super(name) // super will take the same parameter passed in parent class
        this.width = width
        this.height = height
    }
}//if we are extending a class need to call the super() method that will bring the constructor of inherited class

class Circle extends Shape {
    constructor(name, radius) {
    super(name) 
        this.radius = radius
    }
    //polymorphis same name function differnt work 
    logName(){
        console.log(this.radius + ' completes circle');
    }
}

const rect = new Rectangle('reect1',20,20)
// console.log(rect);
//rect.logName()
//console.log(rect instanceof Rectangle);

const cir = new Circle('circle',90)
//console.log(cir);
//cir.logName()

//console.log(cir instanceof Shape);

//! Static method on the class method
//* when we declear a class that has some mehods on it and we wana access those method by default we cant do that first we need to create a instance of that class then we can use that method

//? but if the method has some static data we just wana display that time its useless to create instance of it so Js class object gives us the static keyword that can be used before method decleration to use it directly by the class name

class Name {
    constructor(name) {
        this.name = name
    }
static give() {
       console.log('hi there'); 
    }
    login() {

    }
static errorMEg() {
    return 'something went wrong'
}
    pasword(){}
static nameing() {}
}
//console.log('obj');
//console.log(Name.give());

//* gettter and setter that are methods use to get or set properties of that particular object
//? few reason why we will use the getter and setter 1 is if we wana do something with it before returning and also to ensapsulate if we don't wan't user to acess that directly

class People {
    constructor(name1, name2) {
        this._name1 = name1 //properties stating with _ means private
        this._name2 = name2
    }
    captial() {
        this._name1.charAt(0).toUpperCase() + this._name1.slice(1)
    }
    get name(){
     return this.captial(_name1)
    // it will print everty char afert defined index
    }
    set name(value) {
        this._name1 = this.captial(value)
    }
}
// to use gettter we use keyword called get before method decleration
const ppl = new People('abbas' ,'abidi')
console.log(ppl.name);
//? now as we can see we don't use paranthies() while calling getter method from the instance of obj

console.log(ppl.name);