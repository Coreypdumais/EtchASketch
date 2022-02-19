console.log("Testing connection")

const container = document.querySelector('.container')
const sizeE1 = document.querySelector('.size');
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.btn');

//getting the value of the size input

let size = sizeE1.value

//we will only color our pixels if draw is set to true

let draw = false;

function populate(size) {
    //updating the --size css variable
    container.style.setProperty('--size', size)
    for (let i=0; i <size * size;i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', function(){
            if(!draw) return
            div.style.backgroundColor = color.value
        })

        div.addEventListener('mousedown', function(){
            //we don't need to check if draw is true here
            //because if we click on a pixel that means we want to draw that pixel
            div.style.backgroundColor = color.value;
        })

        container.appendChild(div)
    }
}

//set draw to true when users presses down on the mouse
window.addEventListener("mousedown", function(){
    draw=true;
})

//set draw to false when user releases the mouse
window.addEventListener("mouseup", function(){
    draw=false;
})

function reset(){
    container.innerHTML =''
    populate(size)
}

resetBtn.addEventListener('click', reset)

sizeE1.addEventListener('keyup', function(){
    size=sizeE1.value
    reset()
})


populate(size)