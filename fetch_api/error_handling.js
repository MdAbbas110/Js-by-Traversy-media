/*
fetch('https://httpstat.us/200')
    .then((res) => {
        return res
    })
    .then(() => console.log('success'))
*/
    //* the weard thing about the fetch method is it will run the method of .then() it will run in eror also which we dont want that our code will run same in 200 and 400 range same

//? fetch is basically we have to mannually handle the catch part it won't be running auto aprt of using the apis such as axies which work

// fetch('https://httpstat123.us/net')
    // .then((res) => {
        // return res
    // })
    // .then(() => console.log('success'))
    // .catch((error) => console.log(error))
//*.catch work with network error 
// it does run on a network error as it dont find the adress only

//?handle the errror in fetch with response.ok
/*
fetch('https://httpstat.us/404')
    .then((res) => {
        if(!res.ok){
            throw new Error('Something went wrong')
        }
    })
    .then(() => console.log('success'))
    .catch((error) => {
        console.log(error);
    })
*/
// check for the spesific error all diff kind of in if else if
//using response.status
fetch('https://httpstat.us/200')
    .then((res) => {
        if(res.status === 404){
            throw new Error('404 not found')
        } else if (res.status === 500) {
            throw new Error('some Server error')
        } else if (res.status !== 200) {
            throw new Error('error hit')
        }
    })
    .then(() => console.log('success'))
    .catch((error) => {
        console.log(error);
    })