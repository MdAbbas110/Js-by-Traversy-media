function getData(endpoint) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();//alwas use new keyW here XHR
        xhr.open('GET', endpoint)

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject('Something went wrong 404')
                }
            }
        }
        setTimeout(() => {
            xhr.send()
        }, Math.floor(Math.random() *3000) +1000)
    })
}
//to call the promise function that we decleard promise on first we need to call the functon() and in the argument of fun we declear the endPoint of the request url and after that we call the .then with cb


//* this is a way of doing the thing using then chainning bi there is a much more clean way we can do the same using all

// getData('./movie.json')
// .then((movies) =>{
    // console.log(movies);
    // return getData('./actor.json')
// })
// .then((actor)=>{
    // console.log(actor);
    // return getData('./director.json')
// })
// .then((director)=>{
    // console.log(director);
// })
// .catch((error)=>{
    // alert(error);
// })

//? here is an other way of channing the apis call if we have multiple using promise.all

const moviePromises = getData('./movie.json')
const actorPromises = getData('./actor.json')
const directorPromises = getData('./director.json')

const dummy = new Promise((resolve, reject)=>{
    resolve({abbas: 'Abidi', status:'wilayati'})
})


Promise.all([moviePromises, dummy, actorPromises, directorPromises])
.then((data) =>{// this will bring the arrays of data kyu ke balti ek hai last time 3 alag balti the to alag mil raha tha ab ek hai to usi me sab mil raha hai but ek ke upper ek 
console.log(data);
})
.catch(error => console.log(error))
// by this we are concluding that there are sevral way