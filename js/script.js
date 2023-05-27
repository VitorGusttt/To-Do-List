//get the elements in html
const plusButton = document.querySelector("#plus");
const ToDoList = document.querySelector(".ToDoList");
const mainBox = document.querySelector("#main-box");

let numberTagValue = 1;
let validationClones = [];

function createToDoList(){
    let clone = ToDoList.cloneNode(false)
    
    //open aside 
    let aside = document.createElement('aside');

    let spanNameTag = document.createElement('span');
    spanNameTag.className = "Task name";

    let spanNameTagValue = window.prompt('Task name');
    while (spanNameTagValue === "" || spanNameTagValue === null) {
        window.alert("please write the name of task");
        spanNameTagValue = window.prompt('task name');
    };
      
    spanNameTag.innerHTML = spanNameTagValue;


    let spanNumberTag = document.createElement('span');
    spanNumberTag.className = "numberTag";
    spanNumberTag.innerHTML = numberTagValue;
    numberTagValue += 1;
    //close aside

    //open menu
    let menu = document.createElement("menu");
    
    let iconPen = document.createElement("i");
    iconPen.className = "fa-solid fa-pen"

    let iconTrash = document.createElement("i");
    iconTrash.className = "fa-solid fa-trash trash";
    //close menu

    clone.className = 'ToDoList'
    //append all
    aside.appendChild(spanNumberTag);
    aside.appendChild(spanNameTag);
    menu.appendChild(iconPen);
    menu.appendChild(iconTrash);
    clone.appendChild(aside);
    clone.appendChild(menu);
    mainBox.appendChild(clone);

    function deleteList(){
        clone.className = 'delete';
        numberTagValue -= 1;
    };

    function editValueName(){
        spanNameTagValue = window.prompt('Edit name task');
        while (spanNameTagValue === "" || spanNameTagValue === null) {
            window.alert("please write the name of task");
            spanNameTagValue = window.prompt('Edit name task');
        };
          
        spanNameTag.innerHTML = spanNameTagValue;
        
    };
    
    iconTrash.addEventListener('click', deleteList);
    iconPen.addEventListener('click', editValueName);
    

};





plusButton.addEventListener('click', createToDoList)

