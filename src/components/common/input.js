export const createInput = ({placeholder, id, change}) =>{
    root = document.createElement('input')
    root.placeholder = placeholder
    root.id = id
        if(typeof change === 'function'){
            root.addEventListener('keyup', function(event){
                if(event.code == 'Enter'){
                    change()
                }
            })
        }
    return root
}