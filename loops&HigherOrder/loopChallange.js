// Most comman FizzBuzz Challange
/*
for(let i =1; i <= 100; i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log('FizzBuzZ');
    }
    else if(i % 3 === 0){
        console.log('Fizz');
    }else if (i % 5 === 0){
        console.log('Buzz');
    }else{
    console.log(i);
}
}
*/
// fizz Buzz Using while loop and Ternary operators

let i = 1

while( i <= 100){
    i% 3 ===0 && i%5 ===0 ? console.log('FizzBuzz')
    : i%3 === 0 ? console.log('fizz') 
    : i % 5 === 0 ? console.log('Buzzz') : console.log(i);
    i++;
}