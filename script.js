// SlideShow
let itemShoes = document.querySelectorAll(".slide_show .item-shoes");
let clickNextBtn = document.querySelector(".next-btn");
let clickPrevBtn = document.querySelector(".prev-btn");
let wrapper_shoes__list = document.querySelector(".wrapper_shoes--list");
var indexSlideShow = 0;
function handleSlideShow() {
	let accurate = itemShoes[0].offsetWidth;
	if (indexSlideShow === itemShoes.length - 1) {
		indexSlideShow = 0;
		wrapper_shoes__list.style.transform = `translateX(${(accurate * -1) * indexSlideShow}px)`;
	} else {
		indexSlideShow++;
		wrapper_shoes__list.style.transform = `translateX(${(accurate * -1) * indexSlideShow}px)`;
	}
}
let loopSlideShow = setInterval(handleSlideShow, 7000);
clickNextBtn.addEventListener("click", e => {
	clearInterval(loopSlideShow);
	let accurate = itemShoes[0].offsetWidth;
	if (indexSlideShow === itemShoes.length - 1) {
		indexSlideShow = 0;
		wrapper_shoes__list.style.transform = `translateX(${(accurate * -1) * indexSlideShow}px)`;
	} else {
		indexSlideShow++;
		wrapper_shoes__list.style.transform = `translateX(${(accurate * -1) * indexSlideShow}px)`;
	}
	loopSlideShow = setInterval(handleSlideShow, 7000);

});
clickPrevBtn.addEventListener("click", e => {
	clearInterval(loopSlideShow);
	let accurate = itemShoes[0].offsetWidth;
	if (indexSlideShow === 0) {
		indexSlideShow = itemShoes.length - 1;
		wrapper_shoes__list.style.transform = `translateX(${(accurate * -1) * indexSlideShow}px)`;
	} else {
		indexSlideShow--;
		wrapper_shoes__list.style.transform = `translateX(${(accurate * -1) * indexSlideShow}px)`;
	}
	loopSlideShow = setInterval(handleSlideShow, 7000);
});
////////////////////////////////////////////////////////////////////////////////////////
let wrapper_shoes_outside = document.querySelector(".wrapper_shoes_outside");
let wrapper = document.querySelector(".wrapper");
let wrapper_shoes_outside_right = document.querySelector(".wrapper_shoes_outside-right");
let prev_btn = document.querySelector(".slide_show .prev-btn");
let next_btn = document.querySelector(".slide_show .next-btn");
///////////////////////////////////////////////////////////////////////////////////////
function handleSlideShowLeft(value) {
	wrapper_shoes_outside.style.top = `${(value + 100) * .6}px`;
	wrapper_shoes_outside.style.left = `${(value + 200) * -.6}px`;
	wrapper_shoes_outside.style.transform = ` rotate(${(value - 600) * -.1}deg)`;
	wrapper.style.marginTop = `${value * .65}px`;
	next_btn.style.marginTop = `${value * .6}px`;
	prev_btn.style.marginTop = `${value * .6}px`;
}

function handleSlideShowRight(value) {
	wrapper_shoes_outside_right.style.top = `${(value + 270) * .6}px`;
	wrapper_shoes_outside_right.style.right = `${(value + 160) * -.6}px`;
	wrapper_shoes_outside_right.style.transform = ` rotate(${(value - 100) * -.1}deg)`;
}

function handleHeaderFixed(value) {
	let header_bottom = document.querySelector(".header_bottom");
	let nav = document.querySelector('.navigation_mobile');
	if (value > 445) {
		header_bottom.classList.add('position_fixed');
		nav.classList.add('active');
	} else if (value < 455) {
		header_bottom.classList.remove('position_fixed');
		nav.classList.remove('active');

	}
}
function handleRevael() {
	let reveal = document.querySelectorAll(".reveal");
	let reveal1 = document.querySelectorAll(".reveal1");
	let reveal2 = document.querySelectorAll(".reveal2");
	let reveal3 = document.querySelectorAll(".reveal3");
	let reveal4 = document.querySelectorAll(".reveal4");
	let windownHeight = window.innerHeight;
	let collisionDistance = 100;
	reveal.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeReveal");
		} else {
			item.classList.remove("activeReveal");

		}
	});
	reveal1.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeReveal1");
		} else {
			item.classList.remove("activeReveal1");

		}
	});
	reveal2.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeReveal2");
		} else {
			item.classList.remove("activeReveal2");

		}
	});
	reveal3.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeReveal3");
		} else {
			item.classList.remove("activeReveal3");

		}
	});
	reveal4.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeReveal4");
		} else {
			item.classList.remove("activeReveal4");
		}
	});
}
function handleRevealRight() {
	let revealRight = document.querySelectorAll(".reveal_right");
	let revealRight1 = document.querySelectorAll(".reveal_right1");
	let revealRight2 = document.querySelectorAll(".reveal_right2");
	let windownHeight = window.innerHeight;
	let collisionDistance = 100;
	revealRight.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeRevealRight");
		} else {
			item.classList.remove("activeRevealRight");

		}
	});
	revealRight1.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeRevealRight1");
		} else {
			item.classList.remove("activeRevealRight1");

		}
	});
	revealRight2.forEach((item) => {
		let locationCollision = item.getBoundingClientRect().top;
		if (locationCollision < windownHeight - collisionDistance) {
			item.classList.add("activeRevealRight2");
		} else {
			item.classList.remove("activeRevealRight2");

		}
	});
}
var onceActive = true;
function handleIncreaseNumberWhenScroll(value) {
	let getDataNumbers = document.querySelectorAll('.about .increase_number .controls .item p:first-child');
	let windownHeight = window.innerHeight;
	let collisionDistance = 150;
	getDataNumbers.forEach((item, index) => {
		let getDataNumber = item.getBoundingClientRect().top;
		if (getDataNumber < windownHeight - collisionDistance) {
			if (onceActive === true) {
				let storageIncreaseNumber = item.getAttribute('data-azt');
				let x = setInterval(() => {
					item.textContent++;
					if (item.textContent == storageIncreaseNumber) {
						clearInterval(x);
					}

				}, 2000 / storageIncreaseNumber);
			}

		}
	});
	onceActive = false;
}

window.addEventListener("scroll", function () {
	let value = window.scrollY;
	handleSlideShowLeft(value);
	handleSlideShowRight(value);
	handleHeaderFixed(value);
	handleRevael();
	handleRevealRight();
	handleIncreaseNumberWhenScroll();
});
//

//
let navigationContents = document.querySelectorAll("article .convertContent");

let navigations = document.querySelectorAll('.header_bottom nav .li');

function changeTabs(index) {
	navigations.forEach((navigation, index) => {

		navigation.classList.remove("convert");
		navigation.classList.remove("glow_white");
	})
	navigationContents.forEach((navigationContent, index) => navigationContent.classList.remove("addContent"));

	navigations[index].classList.add("convert");
	navigations[index].classList.add("glow_white");
	navigationContents[index].classList.add("addContent");
}

function showUpLoading() {
	let loading = document.querySelector(".loading");
	loading.classList.add("loading_show_up");
	setTimeout(() => {
		loading.classList.remove("loading_show_up");
	}, 1500)
}

navigations.forEach((navigation, index) => {
	navigation.addEventListener("click", e => {
		showUpLoading();
		let timeChange = setTimeout(() => {
			changeTabs(index)
		}, 1000);

	});
});
//
//Block Bubble


let subnavs = document.querySelectorAll('.header_bottom nav .subnav li');
subnavs.forEach((item, index) => {
	item.addEventListener('click', e => {
		e.stopPropagation();
		showUpLoading();
		setTimeout(() => {
			navigationContents.forEach((navigationContent, index) => navigationContent.classList.remove("addContent"));
			navigationContents[5].classList.add("addContent");
		}, 500)

	});
});
// Video
let video = document.querySelector(".about .video_description .video video");
let ambient = document.querySelector(".about .video_description .video .ambient");
let btn_playVideo = document.querySelector(".about .play_pause i:first-child");
let btn_pauseVideo = document.querySelector(".about .play_pause i:last-child");
let btn_volumeLow = document.querySelector(".about .controls_video .fa-volume-low");
let btn_volumeHigh = document.querySelector(".about .controls_video .fa-volume-high");
let btn_loopVideo = document.querySelector('.about .controls_video .fa-arrows-spin');
let btn_plusVideo = document.querySelector('.about .controls_video .fa-plus');
let btn_minusVideo = document.querySelector('.about .controls_video .fa-minus');
btn_playVideo.addEventListener('click', e => {
	btn_playVideo.classList.add('active_buttonPlay');
	btn_pauseVideo.classList.add('active_buttonPause');
	video.play();
	ambient.play();
});
btn_pauseVideo.addEventListener('click', e => {
	btn_playVideo.classList.remove('active_buttonPlay');
	btn_pauseVideo.classList.remove('active_buttonPause');
	video.pause();
	ambient.pause();
});
btn_volumeLow.addEventListener('click', e => {
	if (video.volume >= 0.1) {
		video.volume -= 0.1;
	}
});
btn_volumeHigh.addEventListener('click', e => {
	if (video.volume < 1) {
		video.volume += 0.1;
	}
});
var checkLoopVideo = true;
btn_loopVideo.addEventListener('click', e => {
	if (checkLoopVideo) {
		video.loop = true;
		ambient.loop = true;
		btn_loopVideo.classList.add('activeLoopVideo');
		checkLoopVideo = false;
	} else {
		video.loop = false;
		ambient.loop = false;
		btn_loopVideo.classList.remove('activeLoopVideo');
		checkLoopVideo = true;
	}
});
btn_plusVideo.addEventListener('click', e => {
	video.currentTime = Math.floor(video.currentTime) + 5;
	ambient.currentTime = Math.floor(ambient.currentTime) + 5;
	if (video.currentTime != ambient.currentTime) {
		ambient.currentTime = video.currentTime;
	}


});
btn_minusVideo.addEventListener('click', e => {
	video.currentTime = Math.floor(video.currentTime) - 5;
	ambient.currentTime = Math.floor(ambient.currentTime) - 5;
	if (video.currentTime != ambient.currentTime) {
		ambient.currentTime = video.currentTime;
	}
});
//
let backgroundAbout = document.querySelector('.about');
let btnChangBackground = document.querySelector('.about .show_change_background .item i');
let aboutDescriptionTitle = document.querySelector('.about .video_description .description h1');
let aboutDescriptionIncreaseNumber = document.querySelectorAll('.about .increase_number .controls .item p:last-child');
btnChangBackground.addEventListener('click', e => {
	backgroundAbout.classList.toggle("change_theme_about");
	aboutDescriptionTitle.classList.toggle("change_theme_about");
	btn_playVideo.classList.toggle('managerChangeBtn')
	btn_pauseVideo.classList.toggle('managerChangeBtn')
	btn_volumeLow.classList.toggle('managerChangeBtn')
	btn_volumeHigh.classList.toggle('managerChangeBtn')
	btn_loopVideo.classList.toggle('managerChangeBtn')
	btn_plusVideo.classList.toggle('managerChangeBtn')
	btn_minusVideo.classList.toggle('managerChangeBtn')
	aboutDescriptionIncreaseNumber.forEach((item, index) => {
		item.classList.toggle('change_theme_about');
	});
	ambient.classList.toggle('removeBlur')
});
let fliterOption = document.querySelector('.product .fliter_option input');
let fliterOption_items = document.querySelectorAll('.product .fliter_option ul li');
let fliterOption_dropdown = document.querySelector('.product .fliter_option ul');
fliterOption.addEventListener('click', e => {
	fliterOption_dropdown.classList.toggle('active')
});
fliterOption.addEventListener('blur', e => {
	fliterOption_dropdown.classList.toggle('active')

})

var storageFliterOption = [];
function renderFliterOption() {
	fliterOption.value = "";
	storageFliterOption.forEach((item, index) => {
		fliterOption.value += `${item},`;
	})
}
function handleFliterOption(item, index) {
	if (!storageFliterOption.includes(item.innerText)) {
		storageFliterOption.push(item.innerText);
	} else if (storageFliterOption.includes(item.innerText)) {
		storageFliterOption.splice(index, 1)
	}
	renderFliterOption();
	fliterOption_items[index].classList.add("color_blue");

	setTimeout(() => {
		fliterOption_items[index].classList.remove("color_blue");
	}, 300);
}

fliterOption_dropdown.addEventListener('mousedown', e => {
	e.preventDefault();
	fliterOption_items.forEach((item, index) => {
		item.addEventListener('click', e => {
			handleFliterOption(item, index);
		});
	});
});
// window.addEventListener('resize', e => {
// 	let windowWidth = window.innerWidth;
// 	console.log(window.innerWidth)
// });
let btnNavigationMobile = document.querySelector('.navigation_mobile');
let navBarFixed = document.querySelector('.navigation_bars');
let nav = navBarFixed.querySelector('nav');
let li = navBarFixed.querySelectorAll('li');
btnNavigationMobile.addEventListener('click', e => {
	navBarFixed.classList.remove('remove_active');


});
navBarFixed.addEventListener('click', e => {
	navBarFixed.classList.add('remove_active');

});

function handleMobile(indexx) {
	navigationContents.forEach((item, index) => {
		item.classList.remove('addContent');
	});
	navigationContents[indexx].classList.add('addContent')
}

nav.addEventListener('click', e => {
	e.stopPropagation();
	showUpLoading();
	li.forEach((item, indexx) => {
		item.addEventListener('click', e => {
			setTimeout(() => {
				handleMobile(indexx);
			}, 800)
		})
	});
});
const form_sign_up = document.querySelector('.registerForm');
const sign_up_Btn = document.querySelector('#sign_up');
const form_signUp_wrapper = form_sign_up.querySelector('.wrapper');
form_signUp_wrapper.addEventListener('mousedown', e => {
	e.stopPropagation();
})
form_sign_up.addEventListener('mousedown', e => {
	form_sign_up.classList.add('active');
});
sign_up_Btn.addEventListener('click', e => {
	form_sign_up.classList.remove('active');

});
const blogLeftBtnPrepend = document.querySelector('.blog .absolute .prev');
const blogNextBtnAppend = document.querySelector('.blog .absolute .next');
const blog_wrapper_append_prepend = document.querySelector('.blog .absolute .wrapper_append_prepend');

blogNextBtnAppend.addEventListener('click', e => {
	const blog_wrapper_append_prepend__Item = document.querySelectorAll('.blog .absolute .wrapper_append_prepend .item');
	blog_wrapper_append_prepend.appendChild(blog_wrapper_append_prepend__Item[0]);

});
blogLeftBtnPrepend.addEventListener('click', e => {
	const blog_wrapper_append_prepend__Item = document.querySelectorAll('.blog .absolute .wrapper_append_prepend .item');
	blog_wrapper_append_prepend.prepend(blog_wrapper_append_prepend__Item[blog_wrapper_append_prepend__Item.length - 1]);
})
const validate = {
	dataHandleFunctions: {
	},
	dataCheckForm: {
		form: '#form-1',
		inputBox: '.input-box',
		errorMessage: '.error_message',
		dataChecks: [
			isRequired('#username'),
			isMinLength('#username', 6),
			isRequired('#email'),
			isEmail('#email'),
			isRequired('#password'),
			isMinLength('#password', 6),
			isRequired('#confirm_password'),
			isMinLength('#confirm_password', 6),
			isRequired('#file'),
			isTickRequire('input[name=\'gender\']'),
			isMatch('#confirm_password', function () {
				return document.querySelector('#password').value;
			})
		],
		getDataAfterCheck: function (data) {
			console.log(data)
		}
	},
	handleFindParentElement(inputElement, inputBox) {
		while (inputElement.parentElement) {
			if (inputElement.parentElement.matches(inputBox)) {
				return inputElement.parentElement
			}
			inputElement = inputElement.parentElement
		}
	},
	handlePrintErrorToTheScreen(inputElement, dataCheck) {
		const errorElement = this.handleFindParentElement(inputElement, this.dataCheckForm.inputBox).querySelector(this.dataCheckForm.errorMessage);
		const dataChecks = this.dataHandleFunctions[dataCheck.selector];
		var errorMessage;
		for (let i = 0; i < dataChecks.length; i++) {
			if (inputElement.type === 'radio') {
				errorMessage = dataChecks[i](document.querySelector(dataCheck.selector + ':checked'));
			} else if (inputElement.type === 'checkbox') {
				errorMessage = dataChecks[i](document.querySelector(dataCheck.selector + ':checked'));
			} else {
				errorMessage = dataChecks[i](inputElement.value);
			}
			if (errorMessage) break;
		};
		if (errorMessage) {
			this.handleFindParentElement(inputElement, this.dataCheckForm.inputBox).classList.add('invalid');
			errorElement.innerText = errorMessage;
		} else {
			this.handleFindParentElement(inputElement, this.dataCheckForm.inputBox).classList.remove('invalid');
			errorElement.innerText = '';
		}
		return !errorMessage;
	},
	handleValidator() {
		const formElement = document.querySelector(this.dataCheckForm.form);
		if (formElement) {
			formElement.addEventListener('submit', e => {

				e.preventDefault();
				var isFormValid = true;
				this.dataCheckForm.dataChecks.forEach(dataCheck => {
					const inputElement = formElement.querySelector(dataCheck.selector);
					var isValid = this.handlePrintErrorToTheScreen(inputElement, dataCheck);
					if (!isValid) {
						isFormValid = false;
					}
				})
				if (isFormValid) {
					const getDataValueNames = formElement.querySelectorAll('[name]:not([disabled])');
					const formValues = Array.from(getDataValueNames).reduce((obj, input) => {
						switch (input.type) {
							case 'radio':
								obj[input.name] = document.querySelector(`input[name='${input.name}']:checked`).value;
								break;
							case 'checkbox':
								if (input.matches(':checked')) {
									obj[input.name] = '';
									return obj;
								}
								if (!Array.isArray(obj[input.name])) {
									obj[input.name] = [];
								}
								obj[input.name].push(input.value);
								break;
							case 'file':
								obj[input.name] = input.files
								break;
							default:
								obj[input.name] = input.value;
						}
						return obj
					}, {});
					this.dataCheckForm.getDataAfterCheck(formValues)
				} else {
					e.preventDefault();
				}
			})
			this.dataCheckForm.dataChecks.forEach(dataCheck => {
				if (Array.isArray(this.dataHandleFunctions[dataCheck.selector])) {
					this.dataHandleFunctions[dataCheck.selector].push(dataCheck.checkDataInput);
				} else {
					this.dataHandleFunctions[dataCheck.selector] = [dataCheck.checkDataInput];
				}
				const inputElements = formElement.querySelectorAll(dataCheck.selector);

				Array.from(inputElements).forEach(inputElement => {
					const errorElement = this.handleFindParentElement(inputElement, this.dataCheckForm.inputBox).querySelector(this.dataCheckForm.errorMessage);
					inputElement.addEventListener('blur', e => {
						this.handlePrintErrorToTheScreen(inputElement, dataCheck)
					});
					inputElement.addEventListener('input', e => {
						this.handleFindParentElement(inputElement, this.dataCheckForm.inputBox).classList.remove('invalid');
						errorElement.innerText = '';
					});
				})
			});

		};
		// Handle form

	},
	start() {
		this.handleValidator()
	}
}
validate.start();

function isRequired(selector) {
	return {
		selector: selector,
		checkDataInput(value) {
			return value.trim() ? undefined : 'Vui lòng nhập trường này!';
		}
	}
}
function isEmail(selector) {
	return {
		selector: selector,
		checkDataInput(value) {
			const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regexEmail.test(value) ? undefined : 'Email không chính xác, vui lòng nhập lại!'
		}
	}

}
function isMinLength(selector, min) {
	return {
		selector: selector,
		checkDataInput(value) {
			return value.length > min ? undefined : ` Bắt buộc phải trên ${min} ký tự!`;
		}
	}
}
function isMatch(selector, callback) {
	return {
		selector: selector,
		checkDataInput(value) {
			return value === callback() ? undefined : 'Mật khẩu không khớp!'
		}
	}
}
function isTickRequire(selector) {
	return {
		selector: selector,
		checkDataInput(value) {
			return value ? undefined : 'Vui lòng nhập trường này!';
		}
	}
}


const drag = {
	handEvents() {
		const containers = document.querySelectorAll('.drag_drop .container');
		const imgs = document.querySelectorAll('.drag_drop img');
		var get = null;
		containers.forEach(container => {
			container.addEventListener('dragover', e => {
				e.preventDefault();
				if (!container.querySelector('img')) {
					container.appendChild(get);
				}
			})
		})
		imgs.forEach(img => {
			img.addEventListener('dragstart', e => {
				e.target.style.opacity = '.5';
				e.target.style.transition = '.3s';
				get = e.target;
			});
			img.addEventListener('dragend', e => {
				e.target.style.opacity = '1'
			})
		})
	},
	main() {
		this.handEvents();
	}
}
drag.main();
const customer = {
	getFunction: {},
	keyStorage: 'customerID',
	arrayExportDatas: [],
	validators: [
		checkBlank('#username-2'),
		checkLength('#username-2', 6),
		checkBlank('#email-2'),
		checkLength('#email-2', 6),
		checkEmail('#email-2'),
		checkBlank('#password-2'),
		checkLength('#password-2', 6),
		checkBlank('#re_password-2'),
		checkLength('#re_password-2', 6),
		checkConfirmPassword('#re_password-2', () => {
			return document.querySelector('#password-2').value;
		}),
		checkBlank('#typeShoes-2'),
	],
	setDataConfig() {
		const getStorage = JSON.parse(localStorage.getItem(this.keyStorage)) || { values: [] };
		return (exportData) => {
			getStorage.values.push(exportData);
			localStorage.setItem(this.keyStorage, JSON.stringify(getStorage));
		}
	},
	getDataConfig() {
		const getStorage = JSON.parse(localStorage.getItem(this.keyStorage));
		return getStorage;
	},
	handleDataInputs(selectors, validator) {
		const parentElements = selectors.parentElement;
		const errorElement = parentElements.querySelector('.error_message-2');
		const labels = parentElements.querySelector('label');
		const checkEachFunctions = this.getFunction[validator.selector];
		let hasError;
		for (let i = 0; i < checkEachFunctions.length; i++) {
			hasError = checkEachFunctions[i](selectors);
			if (hasError) break;
		}
		if (hasError) {
			labels.classList.add('moveTo')
			errorElement.innerText = hasError;
			parentElements.classList.add('hasError');
		} else {
			labels.classList.add('moveTo');
			errorElement.innerText = '';
			parentElements.classList.remove('hasError');
		}
		return !hasError;
	},
	handGetSelector() {
		this.validators.forEach(validator => {
			if (Array.isArray(this.getFunction[validator.selector])) {
				this.getFunction[validator.selector].push(validator.check);
			} else {
				this.getFunction[validator.selector] = [validator.check];
			}
			const selectors = document.querySelector(validator.selector);
			selectors.addEventListener('focus', e => {
				const parentElements = selectors.parentElement;
				const labels = parentElements.querySelector('label');
				labels.classList.add('moveTo');

			});
			selectors.addEventListener('blur', e => {
				this.handleDataInputs(selectors, validator);
			})
		});
	},
	isValid() {
		const form2 = document.querySelector('.submit-2');
		if (form2) {
			let isValid = true;
			form2.addEventListener('click', e => {
				this.validators.forEach(validator => {
					const selectors = document.querySelector(validator.selector);
					isValid = this.handleDataInputs(selectors, validator)
				});
				if (isValid) {
					e.preventDefault();
					const getDataOutputs = document.querySelectorAll('#form-2 [name]:not([disabled])');
					const exportData = Array.from(getDataOutputs).reduce((acc, current, index) => {
						acc[current.name] = current.value;
						return acc;
					}, {});
					this.setDataConfig()(exportData);
					this.render()
				} else {
					e.preventDefault();
				}
			});
		}
	},
	render() {
		if (this.getDataConfig()) {
			const htmls = this.getDataConfig().values.map((value, index) => {
				return `
				<div class="wrapper_data">
											<div class="id" data-index='${index}'><span>ID:</span> ${index}</div>
											<div class="name_customer"><span>Name:</span> ${value.username_2}</div>
											<div class="type_shoes"><span>Types:</span> ${value.typeShoes_2}</div>
											<div class="contact_email"><span>Email:</span> ${value.email_2}</div>
											<span class='mark'><i class='bx bx-x'></i></span>
										</div>
				`
			}).join('');
			document.querySelector('.render_datas').innerHTML = htmls;
		}
	},
	handleRemoveLocal(index) {
		const getStorage = JSON.parse(localStorage.getItem(this.keyStorage));
		getStorage.values.splice(index, 1);
		localStorage.setItem(this.keyStorage, JSON.stringify(getStorage));
		this.render();
	},
	handleEvents() {
		const render_data = document.querySelector('.render_datas');
		render_data.addEventListener('click', e => {
			const mark = e.target.closest('.mark');
			if (mark) {
				const parentElement = mark.parentElement;
				let getID = parseInt(parentElement.querySelector('.id').dataset.index);
				this.handleRemoveLocal(getID);
			}
		})
	},
	main() {
		this.handleEvents();
		this.handGetSelector();
		this.isValid();
		this.render();
	}
}
customer.main();
function checkBlank(value) {
	return {
		selector: value,
		check(checkValue) {
			return checkValue.value.trim() ? undefined : 'Can not be blank!!!'
		}
	}
}
function checkLength(value, min) {
	return {
		selector: value,
		check(checkValue) {
			return checkValue.value.length > min ? undefined : `Must be above ${min} characters!!!`;
		}
	}
}
function checkEmail(value) {
	return {
		selector: value,
		check(checkValue) {
			const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regexEmail.test(checkValue.value) ? undefined : 'Email không chính xác, vui lòng nhập lại!'
		}
	}
}


function checkConfirmPassword(value, callback) {
	return {
		selector: value,
		check(checkValue) {
			return checkValue.value === callback() ? undefined : 'Mật khẩu không khớp!!!'
		}
	}
}
; (function fake_loading() {
	const fake_loading = document.querySelector('.fake_loading');
	const main = document.querySelector('.slide_show');
	window.addEventListener('load', e => {
		setTimeout(() => {
			fake_loading.classList.add('hidden');
			main.classList.add('show');
		}, 6000);
	});
})();
