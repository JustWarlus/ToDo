import { updateContent } from "../../content/update"
import { todolist } from "../../../data/todoList"
import { updateInfo } from "./updateInfoBlock";

export const addTask = () =>{
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const title = document.getElementById('CreateTask')

    if(title.value){
        const date = new Date()
        const newTask = {}
        newTask.id = todolist.length + 1
        newTask.todo = title.value
        newTask.data = date.getDate() + ' ' + month[date.getMonth()]
        newTask.isChecked = false
        todolist.push(newTask)
        updateContent(todolist)
    }
    
    title.value = ''
    updateInfo()
    localStorage.setItem('ToDoList', JSON.stringify(todolist))
}
