const todoList = [{name:"make dinner", dueDate:'12-03-2024'}, {name:'wash dishes', dueDate:'12-03-2024'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i<todoList.length; i ++){
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        //const () = todoObject.dueDate;
        const html = `
        <div>${name}</div>
        <div> ${dueDate} </div>
        <div><button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        " class="delete-todo-button">Delete</button></div>
        `;
        todoListHTML += html;
    }

    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


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