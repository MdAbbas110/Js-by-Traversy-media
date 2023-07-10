//* it is similar like object but in maps the keys needs not te be in only string in map it can be any thind like number boolen

const myMaps = new Map();

myMaps.set('name','john')
myMaps.set(1,'indexNo')
myMaps.set(true,'Passed')

//console.log(myMaps.get('name'));
//console.log(myMaps.get(1));
//console.log(myMaps.get(true));
//
//console.log(myMaps.size);
//
//console.log(myMaps.has(1));//true
//console.log(myMaps.has(110));//false

myMaps.delete(1)

const peopleMap = new Map()
peopleMap.set('abbas', {phone: '32343452', email: 'abbas@hmail;'})
peopleMap.set('abidi', {phone: '3245452', email: 'abbas@hhasdl;'})
peopleMap.set('nakhas', {phone: '2345234', email: 'abbaswedil;'})

peopleMap.forEach((perosn) => console.log(perosn.email))

console.log(peopleMap.keys());
//console.log(peopleMap.values());
// console.log(peopleMap.entries());

const iterator = peopleMap.values()

//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());

const peopleArr = Array.from(peopleMap)
console.log(peopleArr);
