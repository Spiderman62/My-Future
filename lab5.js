let add = document.getElementById("btn_js");
add.addEventListener("mouseenter", () => {
    add.style.background = "rgb(241, 202, 147)";
    add.style.color = "white";
    add.style.transition = ".3s";
    add.style.border = "rgb(241, 202, 147)";
});

add.addEventListener("mouseout", () => {
    add.style.color = "black";
    add.style.background = "white";
    add.style.transition = ".3s"

});
var i = 0;
add.addEventListener("click", () => {
    //get element by id at html and customize
    let inputBoxName = document.getElementById("input_box_name").value;
    let description = document.getElementById("description_js").value;
    let show = document.getElementById("show");

    if (inputBoxName.length > 5 && description.length > 20) {
        i++;
        /////////////////////////////////////////////////
        //create element and assign to appendChild by father
        let wrapper = document.createElement("div");
        let wrapperTop = document.createElement("div");
        let wrapperBottom = document.createElement("div");
        let wrapperBottomInput = document.createElement("div");
        let wrapperBottomButton = document.createElement("div");
        let inputBoxEdit1 = document.createElement("div");
        let inputBoxEdit2 = document.createElement("div");
        let inputTittle = document.createElement("input");
        let inputDescription = document.createElement("input");
        let labelTittle = document.createElement("label");
        let labelDescription = document.createElement("label");
        let printN = document.createElement("p");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let deleted = document.createElement("button");
        let edit = document.createElement("button");
        let cancel = document.createElement("button");
        let apply = document.createElement("button");
        /////////////////////////////////////////////////////////
        // Add class list to decoration
        wrapper.classList.add("show_div");
        deleted.classList.add("show_deleted");
        edit.classList.add("show_edit");
        cancel.classList.add("cancel");
        apply.classList.add("apply");
        wrapperTop.classList.add("div_top");
        wrapperBottom.classList.add("div_bottom");
        wrapperBottomInput.classList.add("control_input_bottom");
        inputBoxEdit1.classList.add("container_position1");
        inputBoxEdit2.classList.add("container_position2");
        inputTittle.classList.add("input_tittle")
        inputDescription.classList.add("input_description")
        labelTittle.classList.add("label_tittle");
        labelDescription.classList.add("label_description");
        ///////////////////////////////////////////////
        labelTittle.innerText = "New task";
        labelDescription.innerText = "New describe";
        deleted.innerText = "delete";
        edit.innerText = "edit";
        apply.innerText = "apply"
        cancel.innerText = "cancel"
        printN.innerText = `#${i}`;
        paragraph1.innerText = inputBoxName;
        paragraph2.innerText = description;
        inputTittle.required = true;
        inputDescription.required = true;
        /////////////////////////////////////////////////
        // If you want deleted element that you must click here to remove father tag 
        // contain elements child
        deleted.addEventListener("click", () => {
            wrapper.remove();
        });

        edit.addEventListener("click", () => {
            wrapperBottomInput.classList.add("callback_input");
            deleted.style.display = "none";
            edit.style.display = "none";
            wrapper.style.animation = "none";
            wrapperBottomButton.style.display = "flex";
            apply.style.display = "block";
            cancel.style.display = "block";
            wrapperBottomInput.style.display = "block";
            wrapperBottomInput.style.display = "flex";
            wrapperBottomButton.appendChild(apply);
            wrapperBottomButton.appendChild(cancel);
            wrapperBottom.appendChild(wrapperBottomButton);
            wrapper.appendChild(wrapperBottom);
            show.appendChild(wrapper);

            apply.addEventListener("click", () => {
                let input_tittleTurn = inputTittle.value;
                let input_descriptionTurn = inputDescription.value;
                if (input_tittleTurn.length > 5 && input_descriptionTurn.length > 20) {
                    wrapperBottomInput.style.animation = "none";
                    paragraph1.innerText = input_tittleTurn;
                    paragraph2.innerText = input_descriptionTurn;
                    wrapperTop.appendChild(paragraph1);
                    wrapperTop.appendChild(paragraph2);
                    wrapper.appendChild(wrapperTop);
                    wrapper.appendChild(wrapperBottom);
                    show.appendChild(wrapper);
                } else {
                    alert("Must have full tittle and description");
                }

            });
        });

        cancel.addEventListener("click", () => {
            cancel.style.display = "none";
            apply.style.display = "none";
            edit.style.display = "block";
            deleted.style.display = "block";
            wrapperBottomButton.style.marginLeft = "auto";
            wrapperBottomInput.style.display = "none";
        });
        /////////////////////////////////////////
        // And then assign elements to wrapper
        // Div top
        wrapperTop.appendChild(printN);
        wrapperTop.appendChild(paragraph1);
        wrapperTop.appendChild(paragraph2);
        // Div bottom
        inputBoxEdit1.appendChild(inputTittle);
        inputBoxEdit1.appendChild(labelTittle);

        inputBoxEdit2.appendChild(inputDescription);
        inputBoxEdit2.appendChild(labelDescription);

        wrapperBottomInput.appendChild(inputBoxEdit1);
        wrapperBottomInput.appendChild(inputBoxEdit2);
        wrapperBottomButton.appendChild(edit);
        wrapperBottomButton.appendChild(deleted);
        wrapperBottom.appendChild(wrapperBottomInput);
        wrapperBottom.appendChild(wrapperBottomButton);

        wrapper.appendChild(wrapperTop);
        wrapper.appendChild(wrapperBottom);
        // Finally, put it to show where it have taken by javascript method
        show.appendChild(wrapper);//And he has all child make by create elements :))

    } else {
        alert("Must have full tittle and description");
    }

});
let dixff = document.createElement("div");
