"use strict";
let input = document.getElementById("input");
let addButton = document.getElementById("addButton");
let todoList = document.getElementById("todoList");
let completedList = document.getElementById("completedList");

addButton.addEventListener("click", ()=>{
    createTodoItem();
})

function createTodoItem(){
    let inputValue = input.value;
    let createdAt = new Date().toLocaleString();

    if(inputValue != ""){
        let itemNumTag = document.createElement("tr");
        todoList.appendChild(itemNumTag);

        let listItem = document.createElement("td");
        let itemContent = document.createTextNode(inputValue);
        listItem.appendChild(itemContent); 
        itemNumTag.appendChild(listItem);    

        let itemCreatedTag = document.createElement("td");
        let itemCreated = document.createTextNode(createdAt);
        itemCreatedTag.appendChild(itemCreated); 
        itemNumTag.appendChild(itemCreatedTag);

        let completeTag = document.createElement("td");
        let completedButton = document.createElement("button");
        let completedButtonText = document.createTextNode("完了");
        completedButton.appendChild(completedButtonText);
        completeTag.appendChild(completedButton); 
        itemNumTag.appendChild(completeTag);

        completedButton.addEventListener("click", ()=>{
            completedList.appendChild(itemNumTag);
            completeTag.remove()

            let itemCompletedTag = document.createElement("td");
            let completedAt = new Date().toLocaleString()
            let itemCompletedAt = document.createTextNode(completedAt);
            itemCompletedTag.appendChild(itemCompletedAt); 
            itemNumTag.appendChild(itemCompletedTag);
        })

        input.value = '';
    }
}