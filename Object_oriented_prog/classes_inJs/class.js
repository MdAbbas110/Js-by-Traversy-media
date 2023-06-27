class Rectangle {
    constructor(name, width,height) {//similar like hardcoded constructor funtion
       this.name = name
       this.width = width 
       this.height = height
    }
//? when we use the class keyword we can directly put the methods in here without using function keyweord
    area() {
        return this.height * this.width
    }
    peremeter() {
        return this.width + this.height
    }
    changeName(newName) {
        this.name = newName
    }
//*this keyword is not just for the name or the parameters we can use it internally in classs to call the methods also

    logArea() {
        console.log('Area of Rec is' + this.area());
    }
}
//* each time we make instense of the class constuctor will always run this is in almost all the prog langes

const stqr = new Rectangle('sqrt',300,400)

// area method will be put in the prototype it self coz using it class need not to imlectly call the .prototype
console.log(stqr);
console.log(stqr.peremeter());
console.log(stqr.changeName('abbas'));
console.log(stqr.name);
//we can just log it inernally so that it is abstracted and encapulated form the global envoirment
stqr.logArea()
