import { createCardToDo } from "./Cards";
import { container } from "../header";

export const createTodoList = (todolist) =>{
const todoListBlock = document.createElement('div')
todoListBlock.className = 'todo-list'
todoListBlock.id = 'todo-list'
container.append(todoListBlock)
for (const iterator of todolist) {
    todoListBlock.append(createCardToDo(iterator))
    }   
}