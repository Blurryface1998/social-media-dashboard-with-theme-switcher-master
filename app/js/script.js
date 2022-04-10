const radioBG = document.getElementById("radioBG");
const radioBtn = document.querySelectorAll("input[type=radio]");
const darkBtn = document.getElementById("darkM");
const lightkBtn = document.getElementById("lightM");
const toggleBtn = document.getElementById("toggleBtn");
const toggle = document.getElementById("toggle");
const body = document.getElementById("body");
const header = document.getElementById("headerId");
const cards = document.querySelectorAll(".card");
const sectionH2 = document.getElementById("overviewId");


toggle.addEventListener("mouseover", () => {
    radioBG.classList.add("hover");
});

toggle.addEventListener("mouseleave", () => {
    radioBG.classList.remove("hover");
});


for(let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", () => {
        for(let j = 0; j < cards.length; j++) {       
            if(darkBtn.checked) {
                body.classList.add("dark");
                header.classList.add("darkHeader");
                cards[j].classList.add("cardsDark");
                sectionH2.classList.add("darkColor");
                radioBG.classList.add("darkRadioBG");
                toggleBtn.classList.add("darkToogleBtn");

            } else if(!darkBtn.checked) {
                body.classList.remove("dark");
                header.classList.remove("darkHeader");
                cards[j].classList.remove("cardsDark");
                sectionH2.classList.remove("darkColor");
                radioBG.classList.remove("darkRadioBG");
                toggleBtn.classList.remove("darkToogleBtn");
            }

        }

    });
}