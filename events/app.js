const clearbtn = document.querySelector('#clear')

clearbtn.onClick = function () {
    alert('clear item')
}

clearbtn.addEventListener('click', ()=>{
    //alert('cleard the screen')
})

//? here are some MOUSE Evenets

const logo = document.querySelector('img')

const onClick = () => console.log('click events');
const doubleClick = () => console.log('right clicked');

// const rightClick = () => {
    // const li =document.querySelectorAll('li')
    // li.style.color = 'red'
// }
const mouseDown = () => console.log('Mouse pressed down');

const onmouseOver = () => console.log(' my mouse is over');

const onDrag = () => console.log('Dragging the element');
const Drag = () => console.log('Dragging');

logo.addEventListener('click', onClick)
logo.addEventListener('dblclick',doubleClick)
//for the right click the event is not rightclick its contextmenu
// /logo.addEventListener('contextmenu', rightClick)
// left mouse click is different its mouse down
logo.addEventListener('mousedown', mouseDown )
//hover kind of mouse over effect is there in js called mouseovere
logo.addEventListener('mouseover', onmouseOver)
//drag and drop the element
logo.addEventListener('dragstart', onDrag)
logo.addEventListener('drag', Drag)