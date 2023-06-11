//using a ternary operator
const age = 23


age >= 18 ? console.log('you can vote') : console.log('you cant vode for now');

// ? this will say Yes
// : this cole will alwas print NO

// * assiging a conditional value to variable using ternary ops

//can vote naam ka ek variable banaya hai jiseme age pass kar rahe aur check kar rahe ternary se
const canVote = age >=18 ? 'yes can' :'no cant'
console.log(canVote);

//multiple line check in terneary and assing to variable

let auth = true

const redirect = auth ? (console.log('welcom Man'), '/dashboard') : (console.log('get loss'),'/login')

console.log(redirect);

//if we dont wana use the else we can put : null but more short handed we can logical

auth && console.log('welcome to board') // uae a lot with react also a ternary