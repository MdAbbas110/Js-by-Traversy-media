// for of ;oop to loop through on any thing array obj map string

let art = ['painting','sketching','drawing']

for (const paper of art){
    //console.log(paper);
}

let name = 'St Jhon\'s School'

for (const scl of name){
    //console.log(scl);
}

let map = new Map()
map.set('name','abbas')
map.set('clg','baldwin')

for (const [key,value] of map){
    //console.log(key,value);
}
// for IN loop is mostly dedicated for the opject values to loop through for IN

let colObj = {
    color1: 'red1',
    color2: 'red2',
    color3: 'red3',
    color4: 'red4'
}

for (const obj in colObj){
   // console.log(obj, colObj[obj]); //to get the key and value both using for in use obj_name[var_of_forIN]

}

//For each loop

// ? for each can take 3 parameter that can be (1. index, 2. items, 3.array)

let str = [
    {name: 'abbas', age :1},
    {name: 'abba', age :2},
    {name: 'abb', age: 2},
    {name: 'ab', age:4}
]

//str.forEach((items) => console.log(items.age))

// Here are some reduse meethods use case in shopping cart array

let number = [1,5,14,72,110]

const sum = number.reduce((accumelator,currentvalue)=>{
    return accumelator + currentvalue
},786)

//console.log(`sum of aaima e masoomein are ${sum}`);
// console.log(number);

const items = [
    {id: 1, name: 'product1', price: 199},
    {id: 2, name: 'product2', price: 299},
    {id: 3, name: 'product3', price: 349}
]

const total = items.reduce((acc,product)=>{
    return acc + product.price
},89)

//console.log(`Checkout just @ ${total}`);

//Challange on Map filter reduce

// ckallange one print person younger then 25 and age
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

const youngPeople = people
  .filter((person)=> person.age <=25)
  .map((num) =>{
    return{
        name: num.firstName + '' + num.lastName,
        email: num.email
        }
    })

//console.log(youngPeople);

// filter the positive number and return the sum of it

const numbers = [2, -30, 50, 20, -12, -9, 7];

const roundOf = numbers
    .filter((num) => num > 0)
    .reduce((acc,crr) => acc + crr,0)

//console.log(roundOf);

// Challnage 3 to make the words in a arrray as upper case

const myName = ['syed','mohammad','abbas','abidi']
//as a hint we have ability to acess the idex of string as well using map
const cWord = myName.map((char) => {
    return char[0].toUpperCase() + char.slice(1, char.length)
})

// console.log(cWord);

// new array find() method to seach an array and go through on eash

const pplName = [
    'Abbas',
    'Rhabar',
    'Abis',
    'Shazan',
    'Fazal'
]
//.find() this method use to take the function and a parametere that will ittrate over all

const finding = pplName.find(people => people.startsWith('S'))
// console.log(finding);

//to find the dublicate values in an array ussing the set
// *set is a special data Structure that only holds the uniquew values

const arr5 = [23,43,44,43,67,23,55]

const withoutDuplicate = Array.from(new Set(arr5)) // in the set parameter we pass the array wana check duplicate in returning the object
console.log(withoutDuplicate);
//use array.from (then passs the new Set or new Map)
//but remeber the Set method will return the object so we want out array back to achive that we can use Array.from()