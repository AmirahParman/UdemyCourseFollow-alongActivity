let toDoList = [];

while (toDoList !== 'quit') {
    let task = prompt('What would you like to do?');
    if (task == 'new') {
        let toDo = prompt('What would you like to add in your to-do list?');
        if (toDo == 'quit') {
            break
        }
        toDoList.push(toDo);
        console.log(`${toDo} is added to your List`)
    }
    else if (task == 'list') {
        console.log('*****');
        for (let item of toDoList) {
            let num = toDoList.indexOf(item);
            console.log(`${num}: ${item}`);
        }
        console.log('*****');
    }
    else if (task == 'delete') {
        let deleted = toDoList.pop(prompt('What would you like to delete from the list?'));
        console.log(`You've deleted ${deleted} from the list`)
    }
    else if (task == 'quit') {
        break;
    }
    else {
        task = prompt('Action invalid. Try again')
        if ('quit') {
            break
        }
    }
}

console.log("You've exited the program");


