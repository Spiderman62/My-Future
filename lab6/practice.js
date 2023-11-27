let slideShow = document.getElementById("slide_show");
let imgs = document.getElementsByClassName("slide");
let showDescription = document.querySelector(".description");
showDescription.classList.add("show_description");

let description = [
    "My drill will drill to the heaven",
    "Invincible",
    "Tengen toppa gurren langan",
    "The truth",
    "Great power comes with responsibility",
    "D4C"
];

let destination = imgs.length;
var index = 0;
var storage = 0;
///////////////////////////////////////////////
function controlSlide() {
    if (index == destination - 1) {
        slideShow.style.transform = "translateX(0px)";
        index = 0;
        showDescription.innerHTML = description[index];

    } else {
        index++;

        let accurate = imgs[0].offsetWidth;
        slideShow.style.transform = `translateX(${accurate * - 1 * index}px)`;
        showDescription.innerHTML = description[index];
    }
};
///////////////////////////////////////////////
function controlSlideOutside(values) {
    clearInterval(handleSlide);
    let clickOutSlile = values;
    storage = clickOutSlile;
  
    let accurate = imgs[0].offsetWidth;
    slideShow.style.transform = `translateX(${accurate * - 1 * storage}px)`;
    showDescription.innerHTML = description[storage];
}
///////////////////////////////////////////////
//Loop
let handleSlide = setInterval(controlSlide, 7000);
///////////////////////////////////////////////
let buttonRight = document.querySelector(".btn-right-js");
let buttonLeft = document.querySelector(".btn-left-js");

buttonRight.addEventListener("click", () => {
    clearInterval(handleSlide);
    controlSlide();
    handleSlide = setInterval(controlSlide, 7000);
});

buttonLeft.addEventListener("click", () => {
    clearInterval(handleSlide);
    if (index == 0) {
        index = destination - 1;
        let accurate = imgs[0].offsetWidth;
        slideShow.style.transform = `translate(${accurate * - 1 * index}px)`;
        showDescription.innerHTML = description[index];

    } else {
        index--;
        let accurate = imgs[0].offsetWidth;
        slideShow.style.transform = `translate(${accurate * - 1 * index}px)`;
        showDescription.innerHTML = description[index];

        handleSlide = setInterval(controlSlide, 7000);
    }
});
///////////////////////////////////////////////
let wrapper = document.querySelector(".wrapper");
let hoverItems = document.getElementsByTagName("img");
wrapper.addEventListener("mouseover", () => {
    for (let i = 0; i < hoverItems.length; i++) {
        hoverItems[i].classList.add("hover_js");
    }
});