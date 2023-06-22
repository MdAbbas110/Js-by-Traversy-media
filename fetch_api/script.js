// passing the option and using the post request
// we have the header option we use to send the token in the header

function createPost({title,body}) { //destructure the object
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        Headers:{
            'content-type': 'application/json',
            token: 'abc123'
        }
    }).then((res )=> res.json())
      .then((data) => console.log(data))
}

createPost({title:'MY post series', body: 'this is for learning purpose'})