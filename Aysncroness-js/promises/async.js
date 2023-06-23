function getData(endpoint) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
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


async function getAllData() {
    const movie = await getData('./movie.json')
    const actor = await getData('./actor.json')
    const director = await getData('./director.json')
    console.log(director, movie, actor);
    console.log(123);
}
// getAllData()

async function getAllFetch() {
    const movieRes = await fetch('./movie.json')
    const movies = movieRes.json()

    const actorRes = await fetch('./actor.json')
    const actors = actorRes.json()

    const directorRes = await fetch('./director.json')
    const directors = directorRes.json()

    console.log(movies,directors,actors);
}
// getAllFetch()

//with the promise all method to do the channing

async function promiseAll() {
    const [movieRes,actorRes,directorRes] = await Promise.all([
        fetch('./movie.json'),
        fetch('./actor.json'),
        fetch('./director.json')
    ])

    const movie = await movieRes.json()
    const actor = await actorRes.json()
    const director = await directorRes.json()

    console.log(movie,actor,director);
}
promiseAll()