function addItem(e){
    e.preventDefault();
    let item = document.querySelector(".text").value;
    let list = document.querySelector(".items");
    let element = `<li class="item"><input type="checkbox" class="checkbox"/> <span>${item}</span></li>`
    list.innerHTML += element;
    document.querySelector(".text").value = "";
}

document.querySelector(".add").onclick = addItem;