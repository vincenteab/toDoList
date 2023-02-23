let allItems = [];

function addItem(){
    let item = document.getElementById("new_item");
    allItems.push(item.value);
    let element = document.createElement('div');
    element.innerText = item.value;
    let to_do_list = document.getElementById('todo_list');
    to_do_list.appendChild(element);
    document.getElementById('new_item').value = "";

}


