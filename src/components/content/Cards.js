import { updateInfo } from "../header/functions/updateInfoBlock"
import { todolist } from "../../data/todoList"
import { updateContent } from "./update"


export const createCardToDo = (object) =>{
    const card = document.createElement('div')
    card.className = 'todo'
    card.id = 'todo'

    const input = document.createElement('input')
    input.type = 'checkbox'
    if(object.isChecked){
        input.checked = 'checked'
    }
    card.append(input)
    input.addEventListener('click', () => {
        if(object.isChecked){
            object.isChecked = false
        } else {
            object.isChecked = true
        }
        updateInfo()
        localStorage.setItem('ToDoList', JSON.stringify(todolist))
    })

    const title = document.createElement('span')
    title.innerText = `${object.todo}`
    card.append(title)

    const itemCard = document.createElement('div')
    itemCard.className = 'todo-item'
    card.append(itemCard)

    const close = document.createElement('div')
    close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>`
    itemCard.append(close)
    
    close.addEventListener('click', () =>{
        todolist.splice([todolist.indexOf(object)],1)
        updateContent(todolist)
        updateInfo()
        localStorage.setItem('ToDoList', JSON.stringify(todolist))
    })

    const data = document.createElement('div')
    data.className = 'data'
    data.innerText = `${object.data}`
    itemCard.append(data)

    return card
}