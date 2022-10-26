const todolistTest = [
    {
        id: 1,
        todo: 'Задание 1',
        data: '19 sept',
        isChecked: true,
    },
    {
        id: 2,
        todo: 'Задание 2',
        data: '29 sept',
        isChecked: true,
    },
    {
        id: 3,
        todo: 'Задание 3',
        data: '19 sept',
        isChecked: false,
    }
]
export const todolist = initializeToDoItems()

function initializeToDoItems(){
    if(localStorage.getItem('ToDoList') === null){
        return localStorage.setItem('ToDoList', JSON.stringify(todolistTest))
    } else {
       const data = localStorage.getItem('ToDoList')
       return JSON.parse(data)
    }
}

