const arr = [12,13,14,15,3,16,20]
let x;

arr.push(100)//last
arr.pop()
arr.unshift(99)
arr.shift(99)//shift unshift is from stating
arr.reverse()

 x= arr.includes(200)
x = arr.indexOf(13)
x = arr.indexOf(24)

x = arr.slice(1,4) // stop before the last index and slicec wont affect the original arrray it clears a  copy of same array in return
x = arr.splice(2,3) // splice chnage the real array deleting the original array
x = arr.splice(2,5).reverse().toString().charAt(0)
console.log(x,arr )