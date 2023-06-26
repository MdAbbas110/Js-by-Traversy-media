const canvas = document.getElementById('my-canvas')

const ctx = canvas.getContext('2d'); //ctx is context

// Draw rectengle
ctx.fillStyle = 'green' //fill style is to filling something in that canvas
ctx.fillRect(10,10, 150,100)

//  Draw circle we use Arc method
//arc takes xy and radius PI value will we 2 times the radius
ctx.fillStyle = 'purple'
ctx.arc( 300, 300, 100, 0 , Math.PI * 2)
ctx.fill()

// drawing lines 
//to draw a line we need to begin form somewhew for that we have method of 
//* BegeinPath and till where by moveTo

ctx.beginPath()
//line don't takes the fillStyle for color it take strokeStyle
ctx.strokeStyle = 'blue'
ctx.lineWidth = 5
ctx.moveTo(10, 10)
ctx.lineTo(300,300)
ctx.stroke() //that draws on the page
