import { todolist } from "../../../data/todoList"
import { updateContent } from "../../content/update"

export const showCaomletedTask = () =>{
    const array = []
    for (const iterator of todolist) {
        if(iterator.isChecked){
            array.push(iterator)
        }
    }
    updateContent(array)
}