// function getCelsius (f){
    // const celsius = (f -32) *5 /9
    // return celsius
// }

// console.log(getCelsius(50));

//const getCel = f => (f - 32)*5/9;

//console.log(`The celsics is ${getCel(99)} \xB0C`);

//challange 2

function minMax (arr){
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return {
        min,
        max
    }
}

let array = minMax([1,23,4,56,7,60,32])
console.log(array);