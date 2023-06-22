//fetchng the json file
fetch('../actor.json')
   //.then(response => response.json())
   //.then(data => console.log(data))

//response is a method similar like the event methond on events e.terget
//*use json method on the response then only it can acess the data

//? fetchiing from Api or from backend node

fetch('https://api.github.com/users/mdabbas110/repos')
.then(response => response.json())
.then(data => console.log(data))

//* so the main to work with an api is to understand it well which types of endpoints it offers what are the data it will give you, do u need authontection or not to coz most of the apis all puplic apis have documentatios so go through it once before using
//fetch api will always create the get req if don't spesifes
 