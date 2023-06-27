//* when it comes to object literal its work greate but in case we wasnt to work with same properties for that same object not possible 

//? thats where construction function comes in wwith its ability to give blue print for object even Classes that is Syntaic sugar term in js use same cunstuctor function under the hood but class base is more clean code
const obj = {
    namee: 30,
    age: 20,
    sum: function() {
        return this.name + this.age;
    }
}

// console.log(obj.sum());


//* on the similar way when we use date or math methods we are initiaizaing the cunstuctor function whene ever u see a word new that will basically creates a cunstructor function 

const date = new Date() // making istance of the actule Date obeject'
const time = date.getHours()
const day = date.getDay()
// console.log(day,time);

function Rectangle(name,age,course) { // construct function u have to use the param
    this.name = name
    this.age = age
    this.course = course
    this.area = function() {
        return this.age + this.course
    } 
}
//* cunstructors means as name suggest `it cunstructs the object out of it `

const rec = new Rectangle('abbas',24,180) 
// console.log(rec);

const rec2 = new Rectangle('abidi',30,'pesto')
// console.log(rec2);

//? 1 when we use new a new empty object being created
//*2 the cunstructor function is called with the argument that we passed in
//? 3. the `this` keyword will be set to the new empty object
//* so the new object that we have created it will return from the cunstroctor Function, means we dont have to mannuly put the return in



// we get 2 values to check that from which cunstructor function we are creatig the object by using 

console.log(rec.constructor);// this will return us the blue print obj

//console.log(rec2 instanceOf Rectangle); this will return boolen


