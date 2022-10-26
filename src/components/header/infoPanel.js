export const getInfoTodoList = (todolist) =>{
    const infoBlock = document.createElement('div')
    infoBlock.className = 'info'
    infoBlock.id = 'infoBlock'
    const allTasks = document.createElement('span')
    allTasks.innerText = `All: ${todolist.length}`

    const commlpetedTasks = document.createElement('span')
    commlpetedTasks.innerText = `Completed: ${todolist.filter(item => item.isChecked).length}`
    
    infoBlock.append(allTasks)
    infoBlock.append(commlpetedTasks)

    return infoBlock
}