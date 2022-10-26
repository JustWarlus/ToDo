import { updateContent } from "../../content/update"
import { todolist } from "../../../data/todoList"
import { updateInfo } from "./updateInfoBlock"

export const deleteLast = () =>{
    todolist.splice(-1, 1)
    updateContent(todolist)
    updateContent(todolist)
    updateInfo()
    localStorage.setItem('ToDoList', JSON.stringify(todolist))
}