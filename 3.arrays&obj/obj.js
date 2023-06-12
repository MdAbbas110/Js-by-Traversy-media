//there is a object littral that is object how it use to be declear

// const obj{
    // one: 'name'
// }

//ternary operators
//there are basically two ways to assign the one

const te = arr >= 8 ? (console.log('here is it'), '/saved to var') : (console.log('here else'), '/saved to variable') 

//logical operators in ternary

a = false

a ||= 23 // * if falsy values will encounter it will always print the right side value wont print the false 0 on output

//for undefined and null value to encounter and over cum to that ?? we use nullish colluton'

let b = null 

b ??= 110 // ?? it will alwasy print the right value in case of null or un but easly can print false and 0


const canDrink =
  age >= 21
    ? 'You can drink!'
    : age >= 18 //here we can give conditons like else if 
    ? 'You can have 1 beer'
    : 'You can not drink';

console.log(canDrink);

age >=21 ? 'can drink and die': age>=18 ?'can just drink one' : 'you go have milk'

age >= 32 ? 'go to hajj' : age >=22 ? 'go to karbala' : 'go to ajmer'

// here is if you  dont want to like print the else part just need to pass a condition use &&

let auth = true

auth && console.log('this just print the valuse straight forward welc mesg');

//Using the `&&` operator as a shorthand is a popular thing to do in 
//React templates. Many times, you will see something like:

JavaScript
{!loading && (
  <Fragment>Some UI</Fragment>
)}

javascript
{!loading && (
    <Fragment>Some UI</Fragment>
)}