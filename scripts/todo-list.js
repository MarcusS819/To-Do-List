let todoList = JSON.parse(localStorage.getItem('todoList'))

if(todoList === null)
    todoList = [];
else
    updatePage();

function updatePage()
{
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++)
    {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const date = todoObject.date;

        todoListHTML += 
            `<div>${name}</div>
             <div>${date}</div>
             <button onClick=
                 "deleteToDo(${i});
                  updatePage();
             " class="todo-delete-button">Delete</button>`
    }

    document.querySelector('.js-todo-list').innerHTML
        = todoListHTML;
}

function deleteToDo(i) {
    todoList.splice(i, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addToDo()
{
    const todoElement = document.querySelector('.js-todo-input-item');
    const dateElement = document.querySelector('.js-todo-date');

    const name = todoElement.value;
    const date = dateElement.value;

    if (name === "" || date === "")
        document.querySelector('.js-input-error').innerHTML
            = 'Error: To do item or date is empty'
    else 
    {
        document.querySelector('.js-input-error').innerHTML
            = ''
        todoList.push({
            name: name, 
            date: date
        });
    }

    localStorage.setItem('todoList', JSON.stringify(todoList));

    updatePage();
}
