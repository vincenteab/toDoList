let allItems = [{
    title: null,
    dueDate: null
        }];

function addItem(){
    let item = document.getElementById("new_item");
    let date = document.getElementById("date_picker");
    allItems.push({title: item.value, dueDate: date.value});
    let element = document.createElement('div');
    element.setAttribute("id", "item_in_list");
    element.innerText = item.value;
    let element_date = document.createElement('div')
    element_date.setAttribute("id", "date_in_list");
    element_date.innerText = date.value;
    let to_do_list = document.getElementById('todo_list');
    to_do_list.appendChild(element);
    let to_do_list_date = document.getElementById('todo_list_date');
    to_do_list_date.appendChild(element_date);
    document.getElementById('new_item').value = "";




}


