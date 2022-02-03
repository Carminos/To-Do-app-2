/*
//header
const dateElement = document.querySelector('.date');

// add-items & list
const input = document.getElementById('input');
const addItem = document.querySelector('.add-item');
const addButton = document.querySelector('.add-todo');
const list = document.querySelector('.list');
const list = document.querySelectorAll('.todos li');
let listlength = list.length;

// 
const delete = document.querySelector('.trash');

////////////////    */

function addToDo(toDo){ 
    const text = `<li class="item">
    <input type="checkbox" id="todo-${listLength}">
    <label for="todo-${listLength}">
    <span class="check"></span> ${todo}</label></li>`

    const position = 'afterbegin';
    list.insertAdjacentHTML('afterbegin', 'Yoga');

}

const input = document.getElementById('input');
document.addEventListener("keyup", function(event){
    if(event.keyCode ==13){
        const toDo = input.value;
            if(toDo){
                addToDo(toDo, id, false);
                    LIST.push(
                        {
                            name: toDo;
                            id: id;
                            done: false;
                        }
                    );
            }
            input.value="";
            id++;
        }
    });



    function addTodos(e) {
        e.preventDefault();
        const todo = submitForm.add.value.trim();
        if (todo.length) {
          listLenght = listLenght + 1;
          generateTempalate(todo);
          submitForm.reset();
        }
      }
      
      submitForm.addEventListener('submit', addTodos);
      addButton.addEventListener('click', addTodos);
      
      function deleteTodos(e) {
        if (e.target.classList.contains('delete')) {
          e.target.parentElement.remove();
        }
      }
      
      todoList.addEventListener('click', deleteTodos);





// DELETE =======

document.addEventListener("keydown", function(event) {
    if (event.key === "Delete") {
        // Do something
    }
});

