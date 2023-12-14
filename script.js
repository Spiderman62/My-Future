let getLanguage = document.getElementById("get-language");
let activeLanguage = document.querySelector(".active-language");
getLanguage.addEventListener("click", () => {
    activeLanguage.classList.toggle("actived");
    activeLanguage.style.transition = ".3s ease-in-out";
    document.querySelector(".always-up").classList.toggle("always_up")
});
//////////////////////////////////////////////////////////////////////
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let handleSlideShow = () => {
    let slideShowList = document.getElementsByClassName("item");
    document.getElementById("slide").appendChild(slideShowList[0]);
};
let handleSlideShowLoop = setInterval(handleSlideShow, 7000);
next.addEventListener("click", () => {
    clearInterval(handleSlideShowLoop);
    handleSlideShow();
    handleSlideShowLoop = setInterval(handleSlideShow, 7000);
});
prev.addEventListener("click", () => {
    clearInterval(handleSlideShowLoop);
    let slideShowList = document.getElementsByClassName("item");
    document.getElementById("slide").prepend(slideShowList[slideShowList.length - 1]);
    handleSlideShowLoop = setInterval(handleSlideShow, 7000);
});
//////////////////////////////////////////////////////////////////////
let clock = setInterval(() => {
    let printTimer = document.getElementById("timer");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    printTimer.innerText = `${hour} : ${minute} : ${second}`;
},1000);

checkTime = (i) => {
    if (i < 10) {
        i = `0${i}`;
    }
    return i;
};

let countDown = setInterval(() => {
    let countDownDate = new Date("7 january 2024 00:00:00").getTime();
    
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let d = Math.floor(distance / day);
    let h = Math.floor((distance % day) / hour);
    let m = Math.floor((distance % hour) / minute);
    let s = Math.floor((distance % minute) / second);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    if (distance < 0) {
        clearInterval(countDown);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }
}, 1000);

////////////////////////////////////////////
//Form
let showMainValidate = document.querySelector(".main_validate");
let openValidateJs = document.getElementById("open_validate_js");
let closeValidateJs = document.querySelector(".wrapper_validate .cancel-hide");
let convertRegister = document.getElementById("convert_register");
let convertLogin = document.getElementById("convert_login");
let formLogin = document.querySelector(".login-validate");
let formRegister = document.querySelector(".register-validate");
let designHeightForm = document.querySelector(".wrapper_validate");
let showWrapperValidateResponsive = document.getElementById("show-wrapper-validate-responsive");
showWrapperValidateResponsive.addEventListener("click", () => {
    showMainValidate.classList.add("showMainValidate");
    navigationResponsive.classList.remove("slideBar_show-right");
});
openValidateJs.addEventListener("click", () => {
    showMainValidate.classList.add("showMainValidate");
});
closeValidateJs.addEventListener("click", () => {
    showMainValidate.classList.remove("showMainValidate");

});
convertRegister.addEventListener("click", () => {
    designHeightForm.style.height = "560px";
    designHeightForm.style.transition = ".18s ease-in-out";
    formLogin.classList.add("convert_form");
    formRegister.classList.add("convert_form1");

});
convertLogin.addEventListener("click", () => {
    designHeightForm.style.height = "440px";
    designHeightForm.style.transition = ".18s ease-in-out";
    formLogin.classList.remove("convert_form");
    formRegister.classList.remove("convert_form1");
});
// Form validate
// Get elements form login
let formLoginSubmit = document.getElementById("form-login");
let loginUsername = document.getElementById("login-username");
let loginPassword = document.getElementById("login-password");
let loginEmail = document.getElementById("login--email");
function showError(input, message) {
    let parentInput = input.parentElement;
    let small = parentInput.querySelector("small");
    parentInput.classList.add("error");
    small.innerText = message;

}
function showSuccess(input) {
    let parentInput = input.parentElement;
    let small = parentInput.querySelector("small");
    parentInput.classList.remove("error");
    small.innerText = "";
}
function loginCheckEmptyError(registerInputLists) {
    let isEmptyError = true;
    registerInputLists.forEach(registerInputItem => {
        registerInputItem.value = registerInputItem.value.trim();
        if (!registerInputItem.value) {
            showError(registerInputItem, "Can not be blank");
            isEmptyError = true;
        } else {
            showSuccess(registerInputItem);
            isEmptyError = false;
        }
    });
    return isEmptyError;
};
function loginCheckLength(input, min, max) {
    let isLoginUsernameError = false;
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Must be at least ${min} characters`);
        isLoginUsernameError = true;
    } else if (input.value.length > max) {
        showError(input, `Must not exceed ${max} characters`);
        isLoginUsernameError = true;
    }
    return isLoginUsernameError;
};
function loginCheckEmail(input) {
    input.value = input.value.trim();
    const regexLoginEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isLoginEmailError = !regexLoginEmail.test(input.value);//false
    if (regexLoginEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email invalid");
    }
    return isLoginEmailError;

};
formLoginSubmit.addEventListener("submit", (blockSubmit) => {
    let isEmptyError = loginCheckEmptyError([loginUsername, loginPassword, loginEmail]);
    let isLoginUsernameError = loginCheckLength(loginUsername, 10, 20);
    let isLoginPasswordError = loginCheckLength(loginPassword, 8, 15);
    let isLoginEmailError = loginCheckEmail(loginEmail);
    if (isEmptyError || isLoginUsernameError || isLoginPasswordError || isLoginEmailError) {
        blockSubmit.preventDefault();     //Block behavior submit to server

    } else {
        formLoginSubmit.submit();
    }
});
// Get elements form register
let formRegisterSubmit = document.getElementById("form-register");
let registerUsername = document.getElementById("register-username");
let registerPassword = document.getElementById("register-password");
let registerConfirmPassword = document.getElementById("register-confirm-password");
let registerEmail = document.getElementById("register-email");
let registerPhoneNumber = document.getElementById("register-phone");

function registerCheckEmptyError(registerInputLists) {
    let isEmptyError = true;
    registerInputLists.forEach(registerInputItem => {
        registerInputItem.value = registerInputItem.value.trim();
        if (!registerInputItem.value) {
            showError(registerInputItem, "Can not be blank");
            isEmptyError = true;
        } else {
            showSuccess(registerInputItem);
            isEmptyError = false;
        }
    });
    return isEmptyError;
};
function registerCheckLength(input, min, max) {
    let isRegisterUsernameError = false;
    input.value = input.value.trim();
    if (input.value.length <= min) {
        showError(input, `Must be at least ${min} characters`);
        isRegisterUsernameError = true;
    } else if (input.value.length >= max) {
        showError(input, `Must not exceed ${max} characters`);
        isRegisterUsernameError = true;
    }
    return isRegisterUsernameError;
};
function registerCheckEmail(input) {
    input.value = input.value.trim();
    const regexRegisterEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isRegisterEmailError = !regexRegisterEmail.test(input.value);//false
    if (regexRegisterEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email invalid");
    }
    return isRegisterEmailError;

};
function registerCheckMatchPassword(registerPassword, registerConfirmPassword) {
    let isRegisterMatchPasswordError = true;
    registerPassword.value = registerPassword.value.trim();
    registerConfirmPassword.value = registerConfirmPassword.value.trim();
    if (registerPassword.value !== registerConfirmPassword.value) {
        showError(registerConfirmPassword, "Password don't match");
        isRegisterMatchPasswordError = true;
    } else {
        isRegisterMatchPasswordError = false;
    }
    return isRegisterMatchPasswordError;

};
function registerCheckPhoneNumber(input, min, max) {
    let isRegisterPhoneNumberError = true;
    input.value = input.value.trim();
    Number(input.value);
    if (!isNaN(input.value)) {
        if (input.value.length < min) {
            showError(input, `Must be at least ${min} characters`);
            isRegisterPhoneNumberError = true;
        } else if (input.value.length > max) {
            showError(input, `Must not exceed ${max} characters`);
            isRegisterPhoneNumberError = true;
        } else {
            showSuccess(input);
            isRegisterPhoneNumberError = false;
        }
    } else {
        showError(input, "Must be a phone number");
        isRegisterPhoneNumberError = true;
    }
    return isRegisterPhoneNumberError;
};
formRegisterSubmit.addEventListener("submit", (blockSubmit) => {
    let isEmptyError = registerCheckEmptyError([registerUsername, registerPassword, registerEmail, registerPhoneNumber, registerConfirmPassword]);
    let isRegisterUsernameError = registerCheckLength(registerUsername, 10, 20);
    let isRegisterPasswordError = registerCheckLength(registerPassword, 8, 15);
    let isRegisterEmailError = registerCheckEmail(registerEmail);
    let isRegisterMatchPasswordError = registerCheckMatchPassword(registerPassword, registerConfirmPassword);
    let isRegisterPhoneNumberError = registerCheckPhoneNumber(registerPhoneNumber, 10, 12);
    if (isEmptyError || isRegisterUsernameError || isRegisterPasswordError || isRegisterEmailError || isRegisterMatchPasswordError || isRegisterPhoneNumberError) {
        blockSubmit.preventDefault();     //Block behavior submit to server
    } else {
        formRegisterSubmit.submit();
    }

})
////////////////////////////////////////////////////////////////////
//black friday
let contentBlackFriday = document.querySelector(".black-friday");
let blackFriday = document.querySelector(".black-friday");

blackFriday.style.width = "100%";
contentBlackFriday.addEventListener("mouseover", () => {
    blackFriday.classList.add("black-friday-zoom-small");
});
//////////////////////////////////////////////////////////////
//Video
let videoJB = document.getElementById("video_justin_bieber");
let loop = document.getElementById("loop");
let stopBack = document.getElementById("stop");
let mute = document.getElementById("mute");
let play_pause = document.getElementById("play_pause");
let increase_volume = document.getElementById("increase_volume");
let descrease_volume = document.getElementById("descrease_volume");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let nextVideo = document.getElementById("next_video");
let backVideo = document.getElementById("back_video");
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
    videoJB.currentTime = 0;
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
    if (videoJB.volume < 1) {
        videoJB.volume = videoJB.volume + 0.1;
    }
});
//
descrease_volume.addEventListener("click", () => {
    if (videoJB.volume > 0.1) {
        videoJB.volume = videoJB.volume - 0.1;

    }
});
//
var countVideo = 0
let swap = [];
for (let i = 0; i < 3; i++) {
    swap[i] = `./video/video-${i}.mp4`;
}
nextVideo.addEventListener("click", () => {
    if (countVideo < 2) {
        countVideo++;
        videoJB.src = swap[countVideo];
        pause.style.display = "none";
        play.style.display = "block";
    }


});
backVideo.addEventListener("click", () => {
    if (countVideo > 0) {
        countVideo--;
        videoJB.src = swap[countVideo];
        pause.style.display = "none";
        play.style.display = "block";
    }
});
///////////////////////////////////////////////////
// Light dark mode
let lightMode = document.querySelector(".light_bulb");
let darkMode = document.querySelector(".dark_bulb");
let message_bulb = document.querySelector(".message_bulb");
let thumnail = document.querySelector(".thumnail");
lightMode.addEventListener("click", () => {
    darkMode.classList.remove("show-dark-bulb");
    lightMode.classList.remove("show-light-bulb");
    message_bulb.innerText = "lightmode";
    thumnail.classList.remove("show_dark-bulb");
});
darkMode.addEventListener("click", () => {
    darkMode.classList.add("show-dark-bulb");
    lightMode.classList.add("show-light-bulb");
    message_bulb.innerText = "graymode";
    thumnail.classList.add("show_dark-bulb");
});
////////////////////////////////////////////////////
// GeoLocation
let coords = {};
let showCoords = document.querySelector(".show-coords");
navigator.geolocation.getCurrentPosition(function (position) {
    coords = position.coords;
    showCoords.innerText = `Vĩ độ: ${coords.latitude}, kinh độ: ${coords.longitude}`;
    showCoords.classList.add("showCoords-down")
}, function (error) {
    console.log(error);
    showCoords.innerText = "Không thể tìm thấy vị trí của bạn";
    showCoords.style.color = "red";
});
function openMap() {
    location.href = "https://www.google.com/maps/@" + coords.latitude + "," + coords.longitude;
};
///////////////////////////////////////////////////////////////////////////////////////////////
//Scroll number when scrolling
let boxDatas = document.querySelectorAll(".scroll-number .box-data");
let wrapperScrollNumbers = document.querySelector(".wrapper-scroll--numbers");
function startCount(setDataCount) {
    let getDataCount = setDataCount.dataset.azt;
    
    let stopScrollCount = setInterval(() => {
        setDataCount.innerText++;
        if (setDataCount.innerText == getDataCount) {
            clearInterval(stopScrollCount);
        }
    }, 2000 / getDataCount);
};


////////////////////////////////////////////////////////////////////
//Hover Product
let hoverProducts = document.getElementsByClassName("selling__product-item-pic");
for (let i = 0; i < hoverProducts.length; i++) {
    let hoverProduct = hoverProducts[i];
    hoverProduct.addEventListener("mouseenter", () => {
        hoverProduct.style.transform = "scale(1.3)";
        hoverProduct.style.transition = ".3s ease-in-out";
    });
    hoverProduct.addEventListener("mouseleave", () => {
        hoverProduct.style.transform = "scale(1)";
        hoverProduct.style.transition = ".3s ease-in-out";

    });
}
/////////////////////////////////////////////////////////////////////
//Responsive
let timerResponsive = document.getElementById("timer-responsive");
setInterval(() => {
    let dataResponsive = new Date();
    let hour = dataResponsive.getHours();
    let minute = dataResponsive.getMinutes();
    let second = dataResponsive.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    timerResponsive.textContent = `${hour} : ${minute} : ${second}`;
}, 1000);
/////////////////////////////////////////////////////////////////////////
//Responsive bulb
let lightModeResponsive = document.querySelector(".light_bulb-responsive");
let darkModeResponsive = document.querySelector(".dark_bulb-responsive");
let message_bulbResponsive = document.querySelector(".message_bulb-responsive");
let thumnailResponsive = document.querySelector(".thumnail-responsive");
message_bulbResponsive.style.transform = "translate(0px,-32px)";
message_bulbResponsive.style.fontSize = "1.4rem";

darkModeResponsive.addEventListener("click", () => {
    darkModeResponsive.classList.add("convert-dark");
    lightModeResponsive.classList.add("convert-light");
    message_bulbResponsive.textContent = "light blue mode";
    thumnailResponsive.classList.add("convert-thumnail");
});
lightModeResponsive.addEventListener("click", () => {
    lightModeResponsive.classList.remove("convert-light");
    darkModeResponsive.classList.remove("convert-dark");
    message_bulbResponsive.textContent = "light mode";
    thumnailResponsive.classList.remove("convert-thumnail");
});
///////////////////////////////////////////////////////////
//Show slidebar
let barsResponsiveIcon = document.querySelector(".bars-responsive-icon");
let navigationResponsive = document.querySelector(".navigation-responsive");
let closedSlideBar = document.getElementById("closed-slide-bar");
barsResponsiveIcon.addEventListener("click", () => {
    navigationResponsive.classList.add("slideBar_show-right");
});
closedSlideBar.addEventListener("click", () => {
    navigationResponsive.classList.remove("slideBar_show-right");
});
/////////////////////////////////////////////////////////////////////
//Show map responsive
let showMapResponsive = document.getElementById("show-map--respnsove");
let coodrsResponsive = {};

navigator.geolocation.getCurrentPosition(function showCoordsResponsive(location) {
    coodrsResponsive = location.coords;
    
    showMapResponsive.innerText = `Vĩ độ: ${coodrsResponsive.latitude} kinh độ: ${coodrsResponsive.longitude}`
}, function showCoordsErrorResponsive(error) {
    showMapResponsive.innerText = `Bạn phải bật vị trí thì mới chấp nhận hiển thị`
});
function openMaps() {
    location.href = "https://www.google.com/maps/@" + coodrsResponsive.latitude + "," + coodrsResponsive.longitude;
};
///////////test
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
};

var removeScrollInRange = true;
window.addEventListener("scroll", () => {

    if (window.scrollY >= wrapperScrollNumbers.offsetTop) {
        if (removeScrollInRange) {
            for (let i = 0; i < boxDatas.length; i++) {
                let boxData = boxDatas[i];
                startCount(boxData);
            }
            removeScrollInRange = false;
        }
    }
    reveal();
});