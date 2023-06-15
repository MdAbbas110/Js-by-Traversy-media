// the evenet object bring us so many thingss to use like e.target
//basically when we pass a paramenter in the addevent it gives us the object to use
// comannly we pass e or evt it can be any thing

//const logo = document.querySelector('img')
//
//const onClick = (e) => {
// console.log(e.type);
    // console.log(e.timeStamp);
//}
/*
document.body.addEventListener('click', (e) =>{
    console.log(e.target);
    console.log(e.currentTarget);
})*/
//currentTarget will reffer to to the element and its parent 
//its called bubling of event]

//go.addEventListener('click', onClick)

// * there are bunch of properties to calculate the distance of elements been clicked
// ? clinetX and Y screenX & Y PageX & Y ofSetX and Y etc

// next usefull method of event object is PreventDefault majorly used in to stop form submision

//document.querySelector('a').addEventListener('click', (e)=>{
    // e.preventDefault() // it will stop the behavior of the action
    // console.log('link clicked');
// when we dont want the from to submit to the page we use prevent default

//* ___________________
//keyboard Events majorly 3 key up down pressed

const input = document.querySelector('.form-input')
//const onKeyPress = e =>{
    //console.log('keypressedd');}

const onKeyPress = e =>{
   //in keyboard event we have three use of key event object
   //key
   if(e.key === 'Enter'){
    alert('form submitted')
   }
    // console.log(e.key);

   //keycode

   //code
   //take in use example press ender to submit the form so we need to knw which key been pressed
}



input.addEventListener('keypress', onKeyPress)
// input.addEventListener('keyup', onKeyPress)