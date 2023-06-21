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

getData('./movie.json')
.then((movies) =>{
    console.log(movies);
    return getData('./actor.json')
})
.then((actor)=>{
    console.log(actor);
    return getData('./director.json')
})
.then((director)=>{
    console.log(director);
})
.catch((error)=>{
    alert(error);
})
