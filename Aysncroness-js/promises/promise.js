const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
  ];

  
function createPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false
            if (!error) {
                posts.push(post)
                resolve()
            } else {
                reject('something went wrong')
            }
        },2000)
    })
}

function getPosts(post) {
    setTimeout(()=>{
        posts.forEach((post) =>{
            const div = document.createElement('div')
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            document.querySelector('.page').appendChild(div)
        },2000)
    })
}

let showError = (error) => {
    const h3 = document.createElement('h3')
    h3.innerHTML = `<strong>${error}</strong>`
    document.querySelector('.page').appendChild(h3)
}
createPost({title:'titanic', body:'gulzar'})
.then(getPosts)
.catch(showError)