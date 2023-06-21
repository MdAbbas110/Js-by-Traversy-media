// *promise are objects that represents the completion or the failor  of the asscrnoness operation

//? Mostly we gonna be using the promise to handele the resond from the api or json file

//To create a promise we use cunstroctor function of new keyworld

 const promise = new Promise((resolve,reject)=>{
//promise take 2 things in its parameter one is resolve and reject if the task sussefully done it exicute the resolve eles reject
//? we offenly use settime out with the promise to get the data from the server coz it takes time

//do some async take
setTimeout(()=>{
    console.log('async task complete');
    resolve()
    },1000)
 })

 //* how to call the promise is by using the variable that is assigned and .then() then will aslo take a call back function

 promise.then(()=>{//anything that we pass in to resolve
    //console.log('promise exicuted');
 })

 //? most offen you will se that .then() method use to put directoly on the promsie innitalized part only

 getUser = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true

        if (!error) {
            resolve({name:'abbas', age: 24})
        } else {
            reject('something went wrong')
        }

        },1000)
     })
     
     //.then() will handel the resolve
getUser
    .then((user)=>{
       console.log(user);
       return user.name 
    })
    .then((name)=>{
        console.log(name);
        return name.lenght
    })
    .then((lent)=>{
        console.log(lent);
    }) // if error no .then will run just .catch will run
    .catch((error) => {
        console.log(error)
        return 123 // we can return from catch as well
    })// and >then afterthe catch will run always no matter what
    .then((x)=>{
        console.log(`i will always run ${x}`);
    })    
    
    //catch() use to handle error
    // .finally(() => console.log('promise is running force fully'))
// finally is use to pass to exicute the promise any way either resolve or rejected
 