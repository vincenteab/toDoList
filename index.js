let allItems = [{
    title: null,
    dueDate: null
        }];

function addItem(){
    let item = document.getElementById("new_item");
    let date = document.getElementById("date_picker");
    allItems.push({title: item.value, dueDate: date.value});
    let table = document.getElementById("table_list");
    let new_row = document.createElement('tr');
    new_row.setAttribute("id", "row_item");
    let element = document.createElement('td');
    element.setAttribute("id", "item_in_list");
    element.innerText = item.value;
    let element_date = document.createElement('td');
    element_date.setAttribute("id", "date_in_list");
    element_date.innerText = date.value;
    new_row.appendChild(element);
    new_row.appendChild(element_date);
    table.appendChild(new_row);


    //Gets rid of text in the input field
    document.getElementById('new_item').value = "";
    document.getElementById("date_picker").value = null;



}


