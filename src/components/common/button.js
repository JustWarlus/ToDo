export const createButton = ({id, label, onClick}) => {
    root = document.createElement('button')
    root.id = id
    root.innerText = label
        if(typeof onClick === 'function'){
            root.addEventListener('click', onClick)
        }
    return root
}