let h1 = document.querySelector("h1");

let btn = document.querySelector("button");

let inp = document.querySelector("input");

let ul = document.querySelector("ul");


btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("Delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "" ;
});


ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
    let listItems = event.target.parentElement;
    listItems.remove();
    console.log("deleted");
    }
})

