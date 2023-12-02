let videoJB = document.getElementById("video_justin_bieber");
let loop = document.getElementById("loop");
let stopBack = document.getElementById("stop");
let mute = document.getElementById("mute");
let play_pause = document.getElementById("play_pause");
let increase_volume = document.getElementById("increase_volume");
let descrease_volume = document.getElementById("descrease_volume");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
//
var videoJB_check = true;
pause.style.display = "none";
play_pause.addEventListener("click", () => {
    if (videoJB_check == true) {
        videoJB.play();
        videoJB_check = false;
        pause.style.display = "block";
        play.style.display = "none";
    } else {
        videoJB.pause();
        videoJB_check = true;
        play.style.display = "block";
        pause.style.display = "none";
    }
});
//
var checkVolume = true;
mute.addEventListener("click", () => {
    if (checkVolume == true) {
        videoJB.volume = 0;
        checkVolume = false;
    } else {
        videoJB.volume = 1;
        checkVolume = true;
    }
});
//
stopBack.addEventListener("click", () => {
    videoJB.pause();
    videoJB.currentTime = 180;
    play.style.display = "none";
    //Error, you know when you click here 
});
//
var checkLoop = true;
loop.addEventListener("click", () => {
    if (checkLoop) {
        videoJB.loop = true;
        checkLoop = false;
        loop.classList.add("loop_JB");
    } else {
        videoJB.loop = false;
        checkLoop = true;
        loop.classList.remove("loop_JB");

    }
});
//
increase_volume.addEventListener("click", () => {
    videoJB.volume = videoJB.volume + 0.1;
});
//
descrease_volume.addEventListener("click", () => {
    videoJB.volume = videoJB.volume - 0.1;
});
