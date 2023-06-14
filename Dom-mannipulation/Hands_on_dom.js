const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-id'
div.setAttribute('title', 'My-title') //set attribute takes 2 parameters one is which attribute u wana set and next is what u wana set
// div.innerText = 'Hello worlds'



//append child is very important method we commandly use all the time'
//what it does it that it adds the item to the whatever element we wana attach it to 
const text = document.createTextNode('Created by the CreateTextNode')
div.appendChild(text) // it will apppend the element to the left side the class we used

// document.body.appendChild(div)

document.querySelector('ul').appendChild(div)
