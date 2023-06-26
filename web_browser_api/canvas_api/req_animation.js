const img = document.querySelector('img')
let start;
let done = false;

function step(timestam) {
     if (start === undefined) {
        start = timestam
     }

     const elapsed = timestam - start

     if (elapsed >= 7000) {
        done = true
     }

     if(done) {
        return
     }
     img.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 10}deg)`
    requestAnimationFrame(step)
}

requestAnimationFrame(step)