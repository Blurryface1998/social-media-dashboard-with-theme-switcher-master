const radioBG = document.getElementById("radioBG");
const radioBtn = document.querySelectorAll("input[type=radio]");
const darkBtn = document.getElementById("darkM");
const lightkBtn = document.getElementById("lightM");
const toggleBtn = document.getElementById("toggleBtn");
const toggle = document.getElementById("toggle");
const body = document.getElementById("body");
const header = document.getElementById("headerId");
const sectionH2 = document.getElementById("overviewId");


toggle.addEventListener("mouseover", () => {
    radioBG.classList.add("hover");
});

toggle.addEventListener("mouseleave", () => {
    radioBG.classList.remove("hover");
});


for(let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", () => {       
        if(darkBtn.checked) {
            body.classList.add("dark");
            radioBG.classList.add("darkRadioBG");
            toggleBtn.classList.add("darkToogleBtn");
            transitionE();

        } else if(!darkBtn.checked) {
            body.classList.remove("dark");
            radioBG.classList.remove("darkRadioBG");
            toggleBtn.classList.remove("darkToogleBtn");
            transitionE();
        }
    });
}

function transitionE() {
    let h1 = document.querySelector("h1");
    let h2 = document.querySelectorAll("h2");
    let h3 = document.querySelectorAll("h3");
    let cards = document.querySelectorAll(".card");
    
    let transition = getComputedStyle(document.documentElement)
    .getPropertyValue("--transition");

    body.style.transition = transition;
    header.style.transition = transition;
    h1.style.transition = transition;

    for(let i = 0; i < h2.length; i++) {
        h2[i].style.transition = transition;
    }

    for(let i = 0; i < h3.length; i++) {
        h3[i].style.transition = transition;
    }

    for(let i = 0; i < cards.length; i++) {
        cards[i].style.transition = transition;
    }
}