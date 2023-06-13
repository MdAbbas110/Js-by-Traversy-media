// for of ;oop to loop through on any thing array obj map string

let art = ['painting','sketching','drawing']

for (const paper of art){
    console.log(paper);
}

let name = 'St Jhon\'s School'

for (const scl of name){
    console.log(scl);
}

let map = new Map()
map.set('name','abbas')
map.set('clg','baldwin')

for (const [key,value] of map){
    console.log(key,value);
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

str.forEach((items) => console.log(items.age))