//parent class
class Shape {
    constructor(name) {
        this.name = name
    }
    logName() {
        console.log('Shape Name ' + this.name);
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
rect.logName()
console.log(rect instanceof Rectangle);

const cir = new Circle('circle',90)
console.log(cir);
cir.logName()

//console.log(cir instanceof Shape);