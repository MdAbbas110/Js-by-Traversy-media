//function decleartion
function addDollar (value){
    return '$' + value
}

let x = addDollar(999)
//console.log(x);

//function Expression

const y = function expre (value){
    return '+' + value;
}

// console.log(y(99));

//single line arrow function
//impleset return
const arw = (a,b) => a -b ;
//single parameter 
const single = v => v * 5;

// console.log(single(8));
// console.log(arw(5,3));

// let arr = [1,2,3,4,5,6]

// arr.forEach(n => console.log(n))

//IIFI i.e immeditely invoked functios

(function (user){
    // const user = 'john'
    console.log(user + ' hello  ');
})(' abbas');

