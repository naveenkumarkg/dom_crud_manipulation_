var form = document.getElementById('addForm');
var newItem = document.getElementById('item');
var items = document.getElementById('items');
var filter = document.getElementById('filter');

// Event Listener
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem)


function addItem(e) {
    // Override default properties of submit button
    e.preventDefault();

    var newItemTextNode = document.createTextNode(newItem.value)

    // Create a new li element
    var li = document.createElement('li');
    console.log(li)
    li.className = 'list-group-item';
    li.appendChild(newItemTextNode);


    // Create new delete btn for li
    var button = document.createElement('button')
    button.className = 'btn btn-danger float-end delete';
    button.appendChild(document.createTextNode('X'));
    li.appendChild(button)

    // Append the li in the ul list
    items.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to remove')) {
            var li = e.target.parentElement
            items.removeChild(li);
        }
    }
}

function filterItem(e) {
    console.log(e.target.value)

    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // get the list of items
    var itemList = items.getElementsByTagName('li');

    // conver to array
    Array.from(itemList).forEach(function (item) {
        var itemName = item.firstChild.textContent;
           if(itemName.toLocaleLowerCase().indexOf(text) !== -1){
            item.style.display = 'block'

        }else{
            item.style.display = 'none'
        }
      
    })
 

}





{/* <li class="list-group-item ">Item 6 <button class="btn btn-danger float-end">X</button></li> */ }