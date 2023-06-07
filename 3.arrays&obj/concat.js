let x;
let fruites = ['apple','banana','gowawa','kiwi']

let shakes = ['apShake','banShak','kiwishake']

// fruites.push(shakes)

// x = fruites[4][2]

// const allCat = [fruites, shakes]
// x = allCat[1][0]

// x = fruites.concat(shakes)

// x = [...fruites, apshake]
//flatten array

//const arr = [1,2,3,4,5,[6,7],8]

//x = arr.flat()// arr.flat helps in to create a nusted arrays as one single array

//static methods on array obj 

x = Array.isArray(fruites)// Array.isArray checks that the particular thing is an array or not
x = Array.from('12344')//Array.from()makes an array to any sting

const  a =  1;
const  b =  2;
const  c =  3;

x = Array.of(a,b,c)
console.log(x);
