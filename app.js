// const input = document.querySelector(".input");
// const form = document.querySelector(".form");
// const todos = document.getElementById("todos");
// const collect = document.querySelector(".collect");

// form.addEventListener("submit", yangItem);

// function yangItem(e) {
//     e.preventDefault();

//     const date = new Date();
//     const hour = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     const Info = document.createElement("span");
//     Info.innerText = `${hour}:${min}:${sec}`; 
//     Info.classList.add("time-info");
    
//     const Barchaelem = document.createElement("div");
//     Barchaelem.classList.add("Barchaelem");

//     const texth1 = document.createElement("h1");
//     texth1.innerText = input.value;

//     const inText = document.createElement("input");
//     inText.style.display = 'none';
//     inText.value = texth1.innerText;


//     const chekBox = document.createElement("input");
//     chekBox.type = "chekBox";
//     chekBox.addEventListener('change', () => {
//         if (chekBox.checked) {
//             texth1.style.textDecoration = "line-through"; 
//         } else {
//             texth1.style.textDecoration = "none"; 
//         }
//     });

//     const edit = document.createElement("i");
//     edit.classList.add("fa-solid", "fa-pen-to-square");
//     edit.addEventListener('click', () => {
//         texth1.style.display = 'none';
//         edit.style.display = 'none';
//         inText.style.display = 'block';
//     });

//     const iDele = document.createElement("i");
//     iDele.classList.add("fa-solid", "fa-delete-left");
//     iDele.addEventListener("click", () => Barchaelem.remove());

//     Barchaelem.appendChild(texth1);
//     Barchaelem.appendChild(Info); 
//     Barchaelem.appendChild(chekBox); 
//     Barchaelem.appendChild(edit);
//     Barchaelem.appendChild(iDele);

//     collect.prepend(Barchaelem);
    
//     form.reset();
// }


// const searchIn = document.querySelector(".searchin");
// searchIn.addEventListener("input", searchItems);

// function searchItems() {
//     const searchText = searchIn.value.toLowerCase();
//     const items = document.querySelectorAll(".Barchaelem");

//     items.forEach(item => {
//         const filterText = item.querySelector("h1");
//         const textValue = filterText.textContent || filterText.innerText;

//         item.style.display = textValue.toLowerCase().includes(searchText) ? "" : "none";
//     });
    

// const deleteAll = document.querySelector(".deleteAll");
// deleteAll.addEventListener("click", () => {
//     collect.innerHTML = ""; 
// });
// }   
const input = document.querySelector(".input");
const form = document.querySelector(".form");
const todos = document.getElementById("todos");
const collect = document.querySelector(".collect");

form.addEventListener("submit", yangItem);
todos.addEventListener("change", sartarofka);

let taskCount = 0;

function yangItem(e) {
    e.preventDefault();

    taskCount++;

    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const Barchaelem = document.createElement("tr");

    const tasknum = document.createElement("td");
    tasknum.innerText = taskCount;

    const texth1 = document.createElement("td");
    texth1.innerText = input.value;

    const timeInfo = document.createElement("td");
    timeInfo.innerText = `${hour}:${min}:${sec}`;

    const chekBox = document.createElement("td");
    const checkInput = document.createElement("input");
    checkInput.type = "checkbox";
    checkInput.addEventListener('change', () => {
        texth1.style.textDecoration = checkInput.checked ? "line-through" : "none";
    });
    chekBox.appendChild(checkInput);

    const edit = document.createElement("td");
    const editicon = document.createElement("i");
    editicon.classList.add("fa-solid", "fa-pen-to-square");
    editicon.addEventListener('click', () => {
        const newText = prompt("Edit the task:", texth1.innerText);
        if (newText) texth1.innerText = newText;
    });
    edit.appendChild(editicon);

    const deleitem = document.createElement("td");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash");
    deleteIcon.addEventListener("click", () => Barchaelem.remove());
    deleitem.appendChild(deleteIcon);

    Barchaelem.appendChild(tasknum);
    Barchaelem.appendChild(texth1);
    Barchaelem.appendChild(timeInfo);
    Barchaelem.appendChild(chekBox);
    Barchaelem.appendChild(edit);
    Barchaelem.appendChild(deleitem);

    collect.appendChild(Barchaelem);
    form.reset();
}

const searchIn = document.querySelector(".searchin");
searchIn.addEventListener("input", searchIt);

function searchIt() {
    const seartex = searchIn.value.toLowerCase();
    const items = document.querySelectorAll("tbody tr");

    items.forEach(item => {
        const filtext = item.querySelector("td:nth-child(2)").innerText.toLowerCase();
        item.style.display = filtext.includes(seartex) ? "" : "none";
    });
}

const deleteAll = document.querySelector(".deleteAll");
deleteAll.addEventListener("click", () => {
    collect.innerHTML = "";
    taskCount = 0; 
});

function sartarofka() {
    const items = Array.from(document.querySelectorAll("tbody tr"));
    const selected = todos.value;

    let tarib;
    if (selected === "todoa-z") {
        tarib = items.sort((a, b) => a.querySelector("td:nth-child(2)").innerText.localeCompare(b.querySelector("td:nth-child(2)").innerText));
    } else if (selected === "todoz-a") {
        tarib = items.sort((a, b) => b.querySelector("td:nth-child(2)").innerText.localeCompare(a.querySelector("td:nth-child(2)").innerText));
    } else {
        tarib = items;
    }

    collect.innerHTML = "";
    tarib.forEach(item => collect.appendChild(item));
}
