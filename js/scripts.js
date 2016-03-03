var listItems = [],
    form = document.querySelector('.form'),
    input = document.querySelector('.input'),
    list = document.querySelector('.list');
    date = document.querySelector('.date');
    priority = document.querySelector('.priority');

function renderItem(item) {
  var li = document.createElement('li');
  li.innerHTML = item.priority + ". " + item.title + "     Due: " + item.date;
  list.appendChild( li );
}

function renderAll() {
  list.innerHTML = '';
  for (var i = 0; i < listItems.length; i++) {
    renderItem(listItems[i]);
  }
}

form.onsubmit = function() { 
  var newItem = {
    title: input.value,
    date: date.value,
    priority: priority.value
  }
  listItems.push(newItem);
  renderAll();

  input.value = '';
  date.value = '';
  priority.value = '';
  return false;
};


renderAll();