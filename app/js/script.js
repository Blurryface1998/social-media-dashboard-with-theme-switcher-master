
const darkBtn = document.getElementById("darkM");
const ligthBtn = document.getElementById("lightM");
const body = document.querySelector("body");
const radioBtns = document.querySelectorAll(".toggle__wrapper");

const setLightMode = () => {
    body.classList = "light";
};

const setDarkMode = () => {
    body.classList = "dark";
};

const preferColorScheme = () => {
    return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light" 
    : "dark"
};

console.log(preferColorScheme());

// Changing body color when radio btn is clicked
for(let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].addEventListener("click", (event) => {
        ligthBtn.checked ? setLightMode() : setDarkMode();
    });
}


window.matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (event) => {
        event.matches ? ligthBtn.click() : darkBtn.click();
    });