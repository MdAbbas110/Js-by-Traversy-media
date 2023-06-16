const input = document.querySelector('.form-input')
const Selectinput = document.querySelector('select')
const button = document.querySelector('button')

const Checkinput = document.querySelector('#check')
const header = document.querySelector('h1')

const onClick = (e) => {
    // header.textContent = e.target.value
}

const Checked = (e)=> {
    const here = e.target.Checked
    header.textContent = here ? 'checked' : 'not checked'
}
 input.addEventListener('input', onClick )
 Selectinput.addEventListener('input', onClick ) //select one will only return the value not the option that is  visible to select
// for the check box .value will not work we have to use .checked to asses the value of it
 Checkinput.addEventListener('input',Checked)

const onfocus = () => {
    input.style.outlineStyle = 'solid'
    input.style.outlinecolor = 'green'
    input.style.outlineWidth = '3px'
}
// const onblur = () => {
    input.style.outlineStyle = 'none'
// }

//* usefull for input forms when we are typeing event will be focused 
input.addEventListener('focus', onfocus )
// here is a event on blur that will blur the input box
input.addEventListener('blur', onblur )

//? there is a event object called e.preventDefault that will stop the form to submit directly
//majorly used on the forms

const prevent = (e) =>{
    // e.preventDefault()

    const item = document.querySelector('.form-input').value
    const value = document.querySelector('select')

    console.log(item,value.value);
}


const form = document.getElementById('item-form')

const onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(form)
// to use form data we required the name attribute in the html to be set on input or others
// if using  the FormData make sure name attribute is set on the html tag to use it in js
    const item = formData.get(input)
    const select = formData.get(Selectinput)

    console.log(input,Selectinput);
}


form.addEventListener('submit', onSubmit)


const div = document.querySelector('form div:nth-child(2)')

button.addEventListener('click', (e)=>{
    alert('button was clicked')
    e.stopPropagation()
})

div.addEventListener('click', ()=>{
    alert('div wass clicked')
})

document.body.addEventListener('click', ()=>{
    alert('body was clicked')
})


//* event BUbbling 
//? when a spesiific event is on any element that time that click it will go till the top html and in between if there is any click event or same
//? event is on the parent of that elenet that will also get exicuted this is called bubbling moving on the top prevent this 
//*There is stop in event object, to use it pass the event obj in function
// ! e.stopPropogation it will stop the event there itself not let it to treavel back till the top

//* Event Delegation that is use to handle multiple events and a efficent way
// we put event deligation on the parent elemennt and can use it to manipulate the itmes

//*event delegation
const list = document.querySelector('ul')

list.addEventListener('mouseover', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.style.color = 'red'
    }else{
        e.target.style.color = 'white'
    }
})
//? so that how we can handle of adding just one event listnere on multiple elment
//benefit of event deleggation is instend of adding multiiple eventLis we just add on on the parent and do our work
// this is not just to remove we can do much more by event on the delecation