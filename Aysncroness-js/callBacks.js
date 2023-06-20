const posts = [
    {title: 'post 1', body: 'This is a random post'},
    {title: 'post 12', body: 'This is a random post'},
    {title: 'post 13', body: 'This is a random post'}
]

function creatPost(post, cb) {//cb represent it as a call back
    setTimeout(()=>{
        posts.push(push)
        cb()
    },2000)
}


function getPosts() {
    setTimeout(()=>{
        posts.forEach((post) =>{
            const div = document.createElement('div')
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            document.getElementById('posts').appendChild(div)
        })
    },1000)
}

creatPost({tile: 'thrid', body: 'another'}, getPosts)