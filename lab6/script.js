var imgs = [];
var j = 0;
function loading() {
    for (let i = 0; i < 6; i++) {
        imgs[i] = new Image();
        imgs[i].src = `img/tengen-toppa-${i}.jpg`;
    };
};

function imgprev() {
    if (j > 0) j--;
    let slideShow = document.getElementById("slide_show");
    slideShow.src = imgs[j].src;
    console.log(j);
    loadTittle();
}
function imgnext() {
    if (j < imgs.length - 1) j++;
    let slideShow = document.getElementById("slide_show");
    slideShow.src = imgs[j].src;
    console.log(j);
    loadTittle();
}
function loadTittle() {
    let k = j + 1;
    document.getElementById("title").innerText = `${k}/${imgs.length}`;
};