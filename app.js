function onReady() {
  //intial state
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const todoList = document.getElementById('toDoList');
  //change state function
  function createNewToDo() {
    //access text input
    var newToDoText = document.getElementById('newToDoText');
    //push toDos toDoText value to task and complete to false in array
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    //clear textbox input
    newToDoText.value = '';
    //Call render UI function
    renderTheUI(toDos);
  }
  //render user interface function
  function renderTheUI(toDos) {
    //Set new li to empty string
    todoList.innerHTML = '';
    // function forEach method for array toDos
    toDos.forEach(function(toDos) {
      //create li and checkbox
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      //add toDo.title to newLi via innerHTML
      newLi.innerHTML = toDos.title;
      // now update the DOM
      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
}

  //event listener reset button
  addToDoForm.addEventListener('reset',function(event){
    event.preventDefault();
    toDos.length = 0;
    while(todoList.firstChild){
      todoList.removeChild(todoList.firstChild);
    }
  });
  //event listener submit button
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });
  //Call render UI function
  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
