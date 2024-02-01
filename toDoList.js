// Khi người dùng nhấn vào đã đọc thì sẽ gạch chân ngay vị trí đó và chuyển sang done
// và lúc đó nó vẫn tồn tại dấu gạch chân cho tới khi người dùng nhấn reload thì nó sẽ mất

let input = document.querySelector("#input-enter");
// lấy dữ liệu đầu vào
var storage = [];
// tạo mảng rỗng để lưu trữ dữ liệu đầu vào
function render() {// hàm để in ra màn hình

	let ul = document.querySelector(".content-to_do_list");// lấy ra khu vực vị trí cụ thể để in ra màn hình
	ul.innerHTML = "";

	for (let i = 0; i < storage.length; i++) {// mỗi vòng lặp sẽ lấy từng giá trị trong mảng
		let renderStorage = storage[i];// Và từng giá trị trong mảng sẽ được lưu vào renderStorage
		ul.innerHTML += `<li> 
		<div class="wrapper_li">
			<p>${renderStorage}</p>
			<div class="content-to_do_list--icons">
				<i onclick='handleDeleteData(${i})' style="cursor:pointer" class='bx bx-trash'></i>
				<i onclick='handleEditData(${i})' style="cursor:pointer" class='bx bxs-edit handleEdits'></i>
			</div>
		</div>
		<div class="replace_edit">
			<div class="input-box">
				<input class="getEditValue" type="text" required>
				<label for="">Enter data to replace</label>
			</div>
		</div>
	</li>`;
	}
}

function handleSpecific(index) {
	let replace_edits = document.querySelectorAll(".replace_edit");
	replace_edits[index].classList.toggle("showEdit");

	let getEditValue = document.querySelectorAll(".getEditValue");
	getEditValue.forEach((item, index) => {
		item.addEventListener("keydown", e => {
			if (e.keyCode === 13) {
				if (!storage.includes(getEditValue[index].value.trim()) && !getEditValue[index].value.trim() == "") {
					storage[index] = getEditValue[index].value.trim();
					render();

				} else {
					getEditValue[index].value = "";
				}
			}

		});
	});
}



function handleEditData(index) {
	let handleEdits = document.querySelectorAll(".handleEdits");
	handleEdits.forEach((item, index) => {
		item.addEventListener("click", e => {
			handleSpecific(index)
		});
	})

}

function handleDeleteData(index) {
	storage.splice(index, 1)
	render();
}

input.addEventListener("keydown", e => {
	if (e.keyCode === 13) {
		if (!storage.includes(input.value.trim()) && !input.value.trim() == "") {
			storage.push(input.value.trim());
			render()
		} else {
			input.value = "";
		}
	}
});