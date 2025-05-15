let slider = document.querySelector(".images")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let allImzges = document.querySelectorAll("img")


let currentpx = 0;
function nextButton(){
    if(currentpx === (allImzges.length-1) * 700){
        currentpx = 0;
        slider.style.left = `-${currentpx}px`
        return
    }
    currentpx += 700
    slider.style.left = `-${currentpx}px`
}


function prevButton() {
    if(currentpx === 0){
        alert("this i first image")
    }else{    
    currentpx -= 700
    slider.style.left = `-${currentpx}px`
    }
}


next.addEventListener("click", nextButton)
prev.addEventListener("click", prevButton)


setInterval(() => {
    nextButton();
}, 3000);