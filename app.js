const Btn = document.body.querySelector("button");

const toDoList = [];

Btn.addEventListener('click', () => {
    let whatToDo = prompt('What would you like to do?');
    while (whatToDo.trim() !== 'quit') {
        if (whatToDo.trim() === '') {
            whatToDo = prompt('You  must write something');
            if (whatToDo.trim() === 'new') {
                let newTodo = prompt('Add a Todo');
                while (newTodo === '') {
                    newTodo = prompt('You  must write something');
                };
                toDoList.push(newTodo);
                console.log(`${newTodo} was added to the list`);
            } else if (whatToDo.trim() === 'list') {
                console.log('*********************');
                for (let toDo of toDoList) {
                    console.log(`${toDoList.indexOf(toDo)}: ${toDo}`)
                }
                console.log('*********************')
            } else if (whatToDo.trim() === 'delete') {
                let index = parseInt(prompt('What task do you want to delete?'));
                while (isNaN(index)) {
                    index = parseInt(prompt('You must enter the index number of a To Do from the list'));
                };
                toDoList.splice(index, 1)

            }
            whatToDo = prompt('What would you like to do?')
        } else if (whatToDo.trim() === 'new') {
            let newTodo = prompt('Add a Todo');
            while (newTodo === '') {
                newTodo = prompt('You  must write something');
            };
            toDoList.push(newTodo);
            console.log(`${newTodo} was added to the list`);
        } else if (whatToDo.trim() === 'list') {
            console.log('*********************');
            for (let toDo of toDoList) {
                console.log(`${toDoList.indexOf(toDo)}: ${toDo}`)
            }
            console.log('*********************')
        } else if (whatToDo.trim() === 'delete') {
            let index = parseInt(prompt('What task do you want to delete?'));
            while (isNaN(index)) {
                index = parseInt(prompt('You must enter the index number of a To Do from the list'));
            };
            toDoList.splice(index, 1)

        }
        whatToDo = prompt('What would you like to do?')
    }
    alert('You quit the To DO app. Bye!!!')
})













