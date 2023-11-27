let slide = document.querySelector(".slide");
let imgs = document.getElementsByTagName("img");
let imgsLength = imgs.length;
var current = 0;

let alwaysMove = () => {
    if (current == imgsLength - 1) {
        slide.style.transform = `translateX(0px)`;
        current = 0;
        
    } else {
        current++;
        let extacly = imgs[0].offsetWidth;
        slide.style.transform = `translateX(${extacly * - 1 * current}px)`;
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".index-item-"+current).classList.add("active");
    }
};
let breakSlide = setInterval(alwaysMove, 7000);

let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
btnRight.addEventListener("click", () => {
    clearInterval(breakSlide);
    alwaysMove();
    breakSlide = setInterval(alwaysMove, 4000);
});
btnLeft.addEventListener("click", () => {
    clearInterval(breakSlide);
    if (current == 0) {
        current = imgsLength - 1;
        let extacly = imgs[0].offsetWidth;
        slide.style.transform = `translateX(${extacly * - 1 * current}px)`;
        
    } else {
        current--;
        let extacly = imgs[0].offsetWidth;
        slide.style.transform = `translateX(${extacly * - 1 * current}px)`;
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".index-item-"+current).classList.add("active");
    }
    breakSlide = setInterval(alwaysMove, 4000);
});
let wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("mouseenter",()=>{
    for(let i = 0;i<imgs.length;i++){

        imgs[i].classList.add("hover_js");
    }
});