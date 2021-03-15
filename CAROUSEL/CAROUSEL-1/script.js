// Carousel
const imgs = document.getElementById('images');
const leftBtn =  document.getElementById('left');
const rightBtn =  document.getElementById('right');

const img = document.querySelectorAll('#images img');

let index = 0;
// change the timing here 
let interval = setInterval(run,2000);

function run() {
    index++;
    changeImage();
}

function changeImage() {
    if(index> img.length-1) {
        index=0;
    }
    else if(index< 0) {
        index = img.length -1;
    }
    images.style.transform = `translateX(${-index*100}%)` 
}

function resetInterval() {
    clearInterval(interval);
    interval  = setInterval(run,2000)
}

leftBtn.addEventListener('click',() =>{
    index--;
    changeImage();
    resetInterval();
})

rightBtn.addEventListener('click',() =>{
    index++;
    changeImage();
    resetInterval();
})