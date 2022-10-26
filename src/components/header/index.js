import { createButton } from '../common/button'
import { createControlPanel } from './controlPanel'
import { createInput } from '../common/input'
import { getInfoTodoList } from './InfoPanel'
import { todolist } from '../../data/todoList'
import { deleteLast } from './functions/deleteLast'
import { deleteAll } from './functions/deleteAll'
import { addTask } from './functions/addTask'
import { showCaomletedTask } from './functions/showCompletedTasks'
import { showAllTasks } from './functions/showAll'
import { search } from './functions/search'

export const container = document.getElementById('root')

export const createHeader = () =>{
    createMainPanel()
    createSubPanel()
}

const createMainPanel = () =>{
    const mainPanel  = createControlPanel('mainPanel')
    container.append(mainPanel)
    mainPanel.append(createButton({id:'DeleteAll', label: 'Delete All', onClick: deleteAll}))
    mainPanel.append(createButton({id:'DeleteLast', label: 'Delete Last', onClick: deleteLast}))
    mainPanel.append(createInput({placeholder: 'Enter todo...', id:'CreateTask', change: addTask}))
    mainPanel.append(createButton({id:'AddTodo', label: 'Add', onClick: addTask}))
}

const createSubPanel = () =>{
    const subPanel = createControlPanel('subPanel')
    container.append(subPanel)
    subPanel.append(getInfoTodoList(todolist))
    subPanel.append(createInput({placeholder:'Search...', id:'SearchTask', change: search}))
    subPanel.append(createButton({id:'ShowAll',label: 'Show All', onClick: showAllTasks}))
    subPanel.append(createButton({id:'ShowCompleted', label:'Show Completed', onClick: showCaomletedTask}))
}