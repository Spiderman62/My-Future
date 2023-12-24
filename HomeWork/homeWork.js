// Viết chương trình nhập vào một chuỗi nếu độ dài của chuỗi ít nhất là 3 - thêm "ing" vào chuỗi đó,
// trường hợp chuỗi kết thúc bằng "ing" - thêm "ly".
// *input: play => output: playing
// *input: go => output: go
// *input: running => output: runningly
// *gợi ý: sử dụng substr()
function convertNumber(value) {
	return parseInt(value);
}
let practice1 = document.querySelector(".practice1");
let input1 = practice1.querySelector("input");
let content1 = practice1.querySelector(".content");
let removeAll1 = practice1.querySelector("button")
var content1Arrs = [];
function render() {
	content1.innerHTML = "";
	for (let i = 0; i < content1Arrs.length; i++) {
		let contentArr = content1Arrs[i];
		content1.innerHTML += `<p>${contentArr}
		<i onclick="deleted(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted(deleted) {
	content1Arrs.splice(deleted, 1);
	render();
}
removeAll1.addEventListener("click", () => {
	content1Arrs = [];
	input1.value = "";
	render();
});
input1.addEventListener("keydown", e => {
	if (e.keyCode == 13) {
		let storage = input1.value.trim();
		function modifyString(value) {
			if (value.length > 3) {
				if (value.slice(-3) == "ing") {
					return `${value}ly`
				} else {
					return `${value}ing`
				}
			} else {
				return value;
			}

		}
		content1Arrs.push((modifyString(storage)));
		render();

	}
})
// Bài 2: Viết một hàm nhận một chuỗi làm đầu vào và trả về một chuỗi mới 
// với tất cả các chữ cái viết hoa được viết thường và tất cả các chữ cái viết thường được viết hoa.
// *input: "TRung Nghai" => output: "trUNG nGHAI"
// *gợi ý: 
// replace(): Thay thế tất cả các ký tự khớp với một biểu thức chính quy bằng một chuỗi khác.
// toUpperCase(): Chuyển đổi tất cả các chữ cái trong một chuỗi thành chữ hoa.
// toLowerCase(): Chuyển đổi tất cả các chữ cái trong một chuỗi thành chữ thường.
let practice2 = document.querySelector(".practice2");
let input2 = practice2.querySelector("input");
let content2 = practice2.querySelector(".content");
let removeAll2 = practice2.querySelector("button")
var content2Arrs = [];
function render2() {
	content2.innerHTML = "";
	for (let i = 0; i < content2Arrs.length; i++) {
		let contentArr = content2Arrs[i];
		content2.innerHTML += `<p>${contentArr}
		<i onclick="deleted2(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted2(deleted) {
	content2Arrs.splice(deleted, 1);
	render2();
}
removeAll2.addEventListener("click", () => {
	content2Arrs = [];
	input2.value = "";
	render2();
});
input2.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		let storage = input2.value.trim();
		var returnForcheck = [];
		function lowerAndUpperCase(item) {
			if (item === item.toLowerCase()) {
				returnForcheck.push(item.toUpperCase());
			} else if (item === item.toUpperCase()) {
				returnForcheck.push(item.toLowerCase());
			}

		}
		for (let i = 0; i < storage.length; i++) {
			lowerAndUpperCase(storage[i])
		}
		content2Arrs.push(returnForcheck.join(""));
		render2();
	}
});


// >Bài tập 3:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử "không phải số" được xóa bỏ.
// *input:[1, "a", 2, "b", 3] output: [1, 2, 3]
// *gợi ý:
// filter(): Lọc một mảng bằng cách chỉ giữ lại các phần tử thỏa mãn một điều kiện nhất định.
// isNaN(): Kiểm tra xem một giá trị có phải là số ko.
let practice3 = document.querySelector(".practice3");
let input3 = practice3.querySelector("input");
let content3 = practice3.querySelector(".content");
let removeAll3 = practice3.querySelector("button")
var content3Arrs = [];
function render3() {
	content3.innerHTML = "";
	for (let i = 0; i < content3Arrs.length; i++) {
		let contentArr = content3Arrs[i];
		content3.innerHTML += `<p>${contentArr}
		<i onclick="deleted3(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted3(deleted) {
	content3Arrs.splice(deleted, 1);
	render3();
}
removeAll3.addEventListener("click", () => {
	content3Arrs = [];
	input3.value = "";
	render3();
});
input3.addEventListener("keydown", e => {
	if (!content3Arrs.includes(input3.value.trim()) && !input3.value.trim() == "") {
		if (e.keyCode === 13) {
			var isNums = [];
			var removed = [];
			let storage = input3.value.trim().split("");
			function convertNumber(value) {
				return parseInt(value);
			}
			function removeNotANumber(value) {
				if (!isNaN(value)) {
					removed.push(value);
				}
			}
			for (let i = 0; i < storage.length; i++) {
				isNums.push(convertNumber(storage[i]));
			}
			for (let i = 0; i < isNums.length; i++) {
				removeNotANumber(isNums[i]);
			}
			content3Arrs.push(removed.join(""));
			render3();
		}
	} else {
		input3.value = "";
	}
});
// >Bài tập 4:

// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với các phần tử được sắp xếp theo thứ tự giảm dần.
// *input:[1, 5, 3, 2] output: [5, 3, 2, 1]
// *gợi ý:sort(): Sắp xếp một mảng theo thứ tự tăng dần.
let practice4 = document.querySelector(".practice4");
let input4 = practice4.querySelector("input");
let content4 = practice4.querySelector(".content");
let removeAll4 = practice4.querySelector("button")
var content4Arrs = [];
function render4() {
	content4.innerHTML = "";
	for (let i = 0; i < content4Arrs.length; i++) {
		let contentArr = content4Arrs[i];
		content4.innerHTML += `<p>${contentArr}
		<i onclick="deleted4(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted4(deleted) {
	content4Arrs.splice(deleted, 1);
	render4();
}
removeAll4.addEventListener("click", () => {
	content4Arrs = [];
	input4.value = "";
	render4();
});
input4.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		var storage = input4.value.trim().split("");
		var whiteSpace = input4.value.trim();
		var storage2 = input4.value.trim().split(" ");

		var checkStorage = [];
		for (let i = 0; i < storage.length; i++) {
			if (storage[i] == `-`) {
				checkStorage.push(`-${storage[i + 1]}`)
				storage.splice(storage[i], 1);
			} else {
				checkStorage.push(storage[i])
			}
		};
		var findNum = [];
		function checkIsNAN(value) {
			var completed = [];
			for (let i = 0; i < value.length; i++) {
				if (!isNaN(value[i])) {
					completed.push(value[i])
				}
			}
			return completed;
		}
		function convertNumber(value) {
			return parseInt(value)
		}
		function bubbleSort(arr) {
			for (let i = 0; i < arr.length; i++) {
				for (let j = arr.length; j > i; j--) {
					if (arr[j] < arr[j - 1]) {
						let swap = arr[j];
						arr[j] = arr[j - 1];
						arr[j - 1] = swap;
					}
				}
			}
			return arr;
		}
		for (let i = 0; i < checkStorage.length; i++) {
			findNum.push(convertNumber(checkStorage[i]));
		}
		let completed = checkIsNAN(findNum);
		let done = bubbleSort(completed);
		content4Arrs.push(done);
		render4();
	}
})
// >Bài tập 5:

// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử được nhân với 2.
// *input: [1, 2, 3] output: [2, 4, 6]
// *gợi ý: sử dụng map()
let practice5 = document.querySelector(".practice5");
let input5 = practice5.querySelector("input");
let content5 = practice5.querySelector(".content");
let removeAll5 = practice5.querySelector("button")
var content5Arrs = [];
function render5() {
	content5.innerHTML = "";
	for (let i = 0; i < content5Arrs.length; i++) {
		let contentArr = content5Arrs[i];
		content5.innerHTML += `<p>${contentArr}
		<i onclick="deleted5(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted5(deleted) {
	content5Arrs.splice(deleted, 1);
	render5();
}
removeAll5.addEventListener("click", () => {
	content5Arrs = [];
	input5.value = "";
	render5();
});
input5.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		let storage = input5.value.trim().split("");
		var isNums = [];
		var completed = [];
		for (let i = 0; i < storage.length; i++) {
			isNums.push(convertNumber(storage[i]));
		}
		function removeNotANumber(value) {
			if (!isNaN(value)) {
				completed.push(value);
			}
		}
		for (let i = 0; i < isNums.length; i++) {
			removeNotANumber(isNums[i]);
		}

		let newStorage = completed.map(item => {
			return item * 2
		});
		content5Arrs.push(newStorage);
		render5();
	}
});
// >Bài tập 6
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới chỉ có số lẻ.
// *Input: [1, 2, 3, 4, 5, 6, 7] => Output: [1, 3, 5, 7]
// *Gợi ý phương thức: push()

let practice6 = document.querySelector(".practice6");
let input6 = practice6.querySelector("input");
let content6 = practice6.querySelector(".content");
let removeAll6 = practice6.querySelector("button")
var content6Arrs = [];
function render6() {
	content6.innerHTML = "";
	for (let i = 0; i < content6Arrs.length; i++) {
		let contentArr = content6Arrs[i];
		content6.innerHTML += `<p>${contentArr}
		<i onclick="deleted6(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted6(deleted) {
	content6Arrs.splice(deleted, 1);
	render6();
}
removeAll6.addEventListener("click", () => {
	content6Arrs = [];
	input6.value = "";
	render6();
});
input6.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		let storage = input6.value.trim().split("");
		var isNums = [];
		var completed = [];
		for (let i = 0; i < storage.length; i++) {
			isNums.push(convertNumber(storage[i]));
		}
		function removeNotANumber(value) {
			if (!isNaN(value)) {
				completed.push(value);
			}
		}
		for (let i = 0; i < isNums.length; i++) {
			removeNotANumber(isNums[i]);
		}
		let newStorage = completed.filter(item => {
			if (item % 2 != 0) {
				return item;
			}
		});
		content6Arrs.push(newStorage);
		render6();
	}
});
// >Bài tập 7

// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả
// các phần tử lặp lại được loại bỏ.
// *input:[1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2] => output: [1, 2, 3, 4, 5]
// *gợi ý: sử dụng indexOf(), push()
let practice7 = document.querySelector(".practice7");
let input7 = practice7.querySelector("input");
let content7 = practice7.querySelector(".content");
let removeAll7 = practice7.querySelector("button")
var content7Arrs = [];
function render7() {
	content7.innerHTML = "";
	for (let i = 0; i < content7Arrs.length; i++) {
		let contentArr = content7Arrs[i];
		content7.innerHTML += `<p>${contentArr}
		<i onclick="deleted7(${i})" class='bx bx-x'></i></p>`
	}
}
function deleted7(deleted) {
	content7Arrs.splice(deleted, 1);
	render7();
}
removeAll7.addEventListener("click", () => {
	content7Arrs = [];
	input7.value = "";
	render7();
});
input7.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		let storage = input7.value.trim().split("");
		let uniqueArr = [];
		var isNums = [];
		var completed = [];
		for (let i = 0; i < storage.length; i++) {
			isNums.push(convertNumber(storage[i]));
		}
		function removeNotANumber(value) {
			if (!isNaN(value)) {
				completed.push(value);
			}
		}
		for (let i = 0; i < isNums.length; i++) {
			removeNotANumber(isNums[i]);
		}
		for (let i = 0; i < completed.length; i++) {
			if (!uniqueArr.includes(completed[i])) {
				uniqueArr.push(completed[i]);
			}
		}
		content7Arrs.push(uniqueArr);
		render7();
	}
});

window.addEventListener("scroll", e => {
	function revealLeft() {
		let revealLeft = document.querySelectorAll(".revealLeft");
		for (let i = 0; i < revealLeft.length; i++) {
			let currentLeft = revealLeft[i].getBoundingClientRect().top;
		
			let screenYLength = window.innerHeight;
			let offsetLeft = 150;
			if(currentLeft < screenYLength - offsetLeft){
				revealLeft[i].classList.add("showLeft");
			}else{
				revealLeft[i].classList.remove("showLeft");

			}
		}

	}
	
	revealLeft();
	
})