//const div = document.createElement('div')
//div.className = 'my-element'
//div.id = 'my-id'
//div.setAttribute('title', 'My-title') //set attribute takes 2 parameters one is which attribute u wana set and next is what u wana set
// div.innerText = 'Hello worlds'



//append child is very important method we commandly use all the time'
//what it does it that it adds the item to the whatever element we wana attach it to 
//const text = document.createTextNode('Created by the CreateTextNode')
//div.appendChild(text) // it will apppend the element to the left side the class we used

// document.body.appendChild(div)

//document.querySelector('ul').appendChild(div)

// aadding an items on to the page in a cleaner way using the create element for all and appendig it to the container

function addNewItem (item){
    const li = document.createElement('li')
    const text = document.createTextNode(item)
    li.appendChild(text)

    const button = createButton('bg-green padding')
    li.appendChild(button)

    //const button = document.createElement('button')
    //button.className = 'hover-button'

    //const icon = document.createElement('i')
    //icon.className = 'fa-delete-fa'
    //button.appendChild(icon)
    //li.appendChild(button)

    document.querySelector('ul').appendChild(li)
}

addNewItem('egg')

//this method is handy because using the innerHtml the Dom will travers from top to buttom
//that will even create a new node for all
//but creating an element and appending it to the class will comes handy much cleaner and time complexciyt also decreae

// * creating seprater functions for each bit of code and diffirent clreate element to use it latter on

function createButton (classes) {
    const button = document.createElement('button')
    button.className = classes
    const icon = createIcon('fa-dark-fa')
    button.appendChild(icon)
    return button
}
function createIcon (classes) {
    const icon = document.createElement('i')
    icon.className = classes
}


