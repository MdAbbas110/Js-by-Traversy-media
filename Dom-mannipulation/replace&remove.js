function replaceFirstItem () {
    const first = document.querySelector('li')

    const li = document.createElement('li')
    li.textContent = 'Replaced item'

    first.replaceWith(li) //replaceWith is the one way of doing to replace the item
}
replaceFirstItem()

function replaceSecond () {
    const second = document.querySelector('#iid2')

    second.outerHTML = '<li> Replaced again </li>'
}
replaceSecond()

function replaceALl () {
    const li = document.querySelectorAll('li')

    //li.forEach((item,index) =>{
        // item.outerHTML = '<li> All are Modified </li> '
        //if(index === 1){
        //    item.innerHTML = 'Im the special one'
        //}else{
        //item.innerHTML = 'Chanded the lies'
        //}

    //})

    li.forEach((item,index)=> item.innerHTML = index === 2 ? 'Its 3rd el' : 'Regular el')
}
replaceALl()

// another way of replacing element is by selecting the parent element and use ReplaceChild()

function replaceChildHead () {
    const head = document.querySelector('.head')
    const h1 = document.querySelector('.head h1')

    const h2 = document.createElement('h2')
    h2.id = 'Title'
    h2.textContent = 'Updating with ReplaceChild'

    head.replaceChild(h2, h1) // 1st will be kya replace hoga second will be kis se replace hoga
}

replaceChildHead();

// To remove the element form the Doc just have 2 ways one is remove() and removeChild() 

function removeBtn (){
    document.querySelector('#btn').remove()
}
removeBtn()

function firstItem () {
    const ul = document.querySelector('#uul')
    const li = document.querySelector('#iid2')

    ul.removeChild(li)
}
// firstItem()

function removeItem (itemNum) {
    const ul = document.querySelector('#uul')
    const li = document.querySelector(`li:nth-child${itemNum}`)
    
    ul.remove(li)
}
removeItem(1)

function removeAll (itemNum) {
    const li = document.querySelectorAll('li')
    li[itemNum - 1].remove();
}
removeAll(1)