import { updateContent } from "../../content/update";
import { todolist } from "../../../data/todoList";

export const showAllTasks = () =>{
    updateContent(todolist)
}