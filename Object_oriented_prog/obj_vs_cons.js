// when we create string its premetive and Sting build in object that are goin to give us the obj 

const str = 'hello'
const strC = new String('hellos')

//console.log(str, typeof str);
//console.log(strC, typeof strC);

// Boxing is called when premetive data type use the methods on it 
//console.log(str.toUpperCase);
//console.log(str[2]);// this all are array function but help in here with the help of boxing Js converts  normal string into new String()

//* unboxing in the same way of new String to normal string by Valueof
// console.log(strC.valueOf(), typeof strC.valueOf());

// we can even create the cunstructor for number and other premetive
const num = 12
const numObj = new Number(14)

console.log(num);
console.log(numObj);

//* if u do typeOf function it will say function but function is also a object so its little weard.
//? and when we create the object litteral under the hood javascript is doing convert the normal obj to new Object()

function abc (x) {
    return x*x
}
console.log(abc, typeof abc);

// object letral get converted to the new Object
const obj = {}
let obJ = new Object() 

const details = {
    name: 1,
    Age: 2,
    Height: 3,
    Wight: 4,
    fun: () => {}
}

//console.log(Object.keys(object));
//console.log(Object.values(object).length);
//we can get entries of the obj that will give us the array of arrays
//console.log(Object.entries(object));

for ([key,value] of Object.entries(details)) {
    if (typeof value !== 'function')
    console.log(`${key}-- ${value}`);
}// from array of arrays we can bring out he values by Object.entries

console.log(Object.getPrototypeOf(details));