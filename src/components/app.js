import { createHeader } from './header/index'
import { createTodoList } from './content'
import { todolist } from '../data/todoList'

export const App = () =>{
    createHeader()
    createTodoList(todolist)
}