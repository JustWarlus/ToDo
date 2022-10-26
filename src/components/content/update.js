import { createTodoList } from "."

export const updateContent = (todolist) =>{
    const content = document.getElementById('todo-list')
    content.remove()
    createTodoList(todolist)
}