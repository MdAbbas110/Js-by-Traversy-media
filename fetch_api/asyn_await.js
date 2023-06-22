// using the .then with promise 
const promise = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve({name: 'john', age: 20})
    },1000)
})
// promise.then(data => console.log(data))

//using asyn await
//?it says that aynsc will only work on a aysncroness function ok
// and the resolve will get await

async function getPromise() {
    const response = await promise;
    //console.log(response);
}
getPromise()

//async await with the fetch api is bit different coz now we no.then 
//always fetch function will start with the aysnc key word

async function userData() {
//fetch will be called in a variable that is mostly response
   const res = await fetch('https://jsonplaceholder.typicode.com/users/')
   const data = res.json()
    // console.log(data.n);
}
userData()

//? async await is better coz it runs the code in top to buttom manner we need not to breack it into .then
//* it provides us the data into function scope not like in a scope of method in .then
//much more clean code can be put on the production

//? using aysnc with the arrow function is quite different

const getpost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const album =  res.json()

    // console.log(album);
}
getpost()

//* using the try catch with asysc await catch use to caught the uncaiught error on the console

try {
    console.log(y);
 console.log(x);
} catch (err) {
    console.log(`Error ${err}`);
}
