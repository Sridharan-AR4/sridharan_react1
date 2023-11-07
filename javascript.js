const btn=document.getElementById("btn");
const list=document.getElementById("list");
const inputfield=document.getElementById("txt");

//const letter=document.createElement("li");
//letter.textContent=btn;
//list.appendChild(letter);
let count=1;
function addToList(){
    const listItem=document.createElement("li");
    listItem.textContent=inputfield.value;
    list.appendChild(listItem);
    //inputfield
}