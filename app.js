var ulList = document.getElementById("list")

function addBtn() {
    var input = document.getElementById("userInput")
    var li = document.createElement("li")
    if (input.value == "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Please enter some task!",
        });
    }
    else {
        li.innerHTML = input.value
        input.value = ""
        ulList.appendChild(li)
        li.setAttribute("class", "listItem")

        var btnsSpan = document.createElement("span")
        btnsSpan.className = "btndiv"
        li.appendChild(btnsSpan)

        var editBtn = document.createElement("button")
        editBtn.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";
        editBtn.className = "dltBtnStyle";
        editBtn.setAttribute("onclick", "edit(event)")
        editBtn.setAttribute("type", "button")
        btnsSpan.appendChild(editBtn)

        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
        deleteBtn.className = "dltBtnStyle";
        deleteBtn.setAttribute("onclick", "removelist(event)")
        deleteBtn.setAttribute("type", "button")
        btnsSpan.appendChild(deleteBtn)
    }
}

function removelist(event){
    event.target.closest("li").remove();
}

function edit(event){
    var updated = prompt("Update task", event.target.closest("li").firstChild.nodeValue);
    if (updated !== null) {
      event.target.closest("li").firstChild.nodeValue = updated;
    }
}

function dltAll(){
    ulList.innerHTML = "";
}
