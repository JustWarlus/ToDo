import { updateContent } from "../../content/update"
import { todolist } from "../../../data/todoList"
import { updateInfo } from "./updateInfoBlock"

export const deleteAll = () =>{
    todolist.splice(0, todolist.length)
    updateContent(todolist)
    updateContent(todolist)
    updateInfo()
    localStorage.setItem('ToDoList', JSON.stringify(todolist))
}