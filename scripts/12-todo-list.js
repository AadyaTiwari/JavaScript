const todoList = [{name:"make dinner", dueDate:'12-03-2024'}, {name:'wash dishes', dueDate:'12-03-2024'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index)=>{
        const {name, dueDate} = todoObject;
        //const () = todoObject.dueDate;
        const html = `
        <div>${name}</div>
        <div> ${dueDate} </div>
        <div><button class="delete-todo-button js-delete-button">Delete</button></div>
        `;
        todoListHTML += html;
    })


    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click',() => {
            todoList.splice(index,1);
            renderTodoList();
        } );
    })
}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
    addTodo();
});

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push({name:name, dueDate: dueDate});
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}