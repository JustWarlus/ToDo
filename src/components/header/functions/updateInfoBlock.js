import { getInfoTodoList } from "../InfoPanel"
import { todolist } from "../../../data/todoList"; 

export const updateInfo = () =>{
    const block = document.getElementById('infoBlock')
    block.remove()
    const panel = document.getElementById('subPanel')
    panel.prepend(getInfoTodoList(todolist))
}