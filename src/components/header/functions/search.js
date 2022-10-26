import { todolist } from "../../../data/todoList"
import { updateContent } from "../../content/update"

export const search = () =>{
    const keyword = document.getElementById('SearchTask').value
    if(keyword){
      const arraySearch = []
        for (const iterator of todolist) {
            if(iterator.todo.toLowerCase() === keyword.toLowerCase()){
                arraySearch.push(iterator)
            }
        }
    updateContent(arraySearch)
}
}