function switchCase() {
    do {
        var check = 0;
        let student = prompt("Nhập tên sinh viên");
        let toan = parseFloat(prompt("Nhập điểm toán"));
        let ly = parseFloat(prompt("Nhập điểm lý"));
        let hoa = parseFloat(prompt("Nhập điểm hoá"));
        let sinh = parseFloat(prompt("Nhập điểm sinh"));
        if (toan >= 0 && toan <= 10 && ly >= 0 && ly <= 10 && hoa >= 0 && hoa <= 10 && sinh >= 0 && sinh <= 10) {
            check = 0;
        } else {
            check = 1;
        }
    } while (check !== 0);


};
function checkIf() {

}
do {
    console.log("1. Tính điểm trung bình (switch case)");
    console.log("2. Tính điểm trung bình (if else)");
    console.log("0. Thoát");
    var choice = parseInt(prompt("Mời bạn nhập số phía trên để thực hiện chương trình"));
    switch (choice) {
        case 0:
            console.log("Kết thúc chương trình");
            break;
        case 1:
            switchCase();
            break;
        case 2:
            checkIf();
            break;
    }
} while (choice !== 0);
