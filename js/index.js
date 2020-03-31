const play = document.getElementById('play')
let vid = document.querySelector('.intro-vid')
vid.muted = true

play.addEventListener('click',() => {
    if(vid.muted ){
        vid.muted = false
        console.log(test.muted)
    } else {
        vid.muted = true
    }
})

let rellax = new Rellax('.rellax');

