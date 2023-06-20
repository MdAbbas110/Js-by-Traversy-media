setTimeout(function () {
    console.log("hello from global scoppe");
},2000)
//if we made this 2000 to 0 also still it will after the global scope
//because settime use to put the program to task quee and it will run after that
console.log('global scope');

//we can use it with name funtions as well

setTimeout(changedFun , 2000) // first function name and then the time

//we can use the clear time out as well that will take in the timer id

clearTimeout(timerId)

//* we have another one called setInterval that will run unlimmeted time on a function
// we need to maually stop that function by clearTimeout
// to use a setinterval we need to pass it in a variable of interal id to stop it

// const intervalId = setInterval(myInterval, 2000, "salam")// we can pass in the arguments as well
// 
// function myInterval(a) {
    // console.log(a,Date.now());
// }

let intervalId;

function startChange() {
    if (!intervalId) {
        intervalId = setInterval(RandomColor, 1000)
    }
}

// function changeColor() {
    // if (document.body.style.backgroundColor !== 'black') {
        // document.body.style.backgroundColor = 'black'
        // document.body.style.color = 'white'
    // } else {
        // document.body.style.backgroundColor = 'white'
        // document.body.style.color = 'black'
    // }
// }

function RandomColor() {
    const random = Math.floor(Math.random() * 6177215).toString(16)
    document.body.style.backgroundColor = `#${random}`

}

function stopChange() {
    clearInterval(intervalId) // its clear the interval that are under go
}
document.getElementById('start').addEventListener('click',startChange)
document.getElementById('stop').addEventListener('click',stopChange)

