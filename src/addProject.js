import dom from './DOM'
import storage from './storage'

const addProjectList = (function () {

    const addProject = document.querySelector('.add-project')
    const editProject = document.querySelector('.edit-project')
    const form = document.querySelector('.add-project-form')
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')
    const date = document.querySelector('#date')
    const priority = document.querySelectorAll('.project-priority-button')
    const addButton = document.querySelector('.add')
    const cancelButton = document.querySelector('.cancel')
    const editTitle = document.querySelector('#edit-title')
    const editDescription = document.querySelector('#edit-description')
    const editDate = document.querySelector('#edit-date')
    const editButton = document.querySelector('.edit')
    const editCancelButton = document.querySelector('.edit-cancel')
    const editPriority = document.querySelectorAll('.edit-project-priority-button')

    let openProject
    let myProjectArray = []
    let priorityValue = 'Low'
    let editPriorityValue
    let priorityBorder 
   
    const displayForm = function () {
        
        form.reset()
        addProject.style.display = 'flex'

        addButton.addEventListener('click', (event) => {
            if (title.value != '') {
                event.preventDefault()
                const newProject = createProject(title.value, description.value, date.value, priorityValue)
                myProjectArray.push(newProject)
                storage.storeData()
                dom.createProjectDiv()
                console.log(myProjectArray)
                addProject.style.display = 'none'
                priorityValue = 'Low'
                form.reset()
            }
        })

        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            addProject.style.display = 'none'
            form.reset()
        })

        addProject.addEventListener('click', (event) => {
            if (event.target == addProject) {
                addProject.style.display = 'none'
            }
        })

        priority.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                priorityValue = button.textContent
            })
        })
    }

    const displayEditForm = function (index) {

        editProject.style.display = 'flex'
        console.log(index)
        console.log(dom.index)
        openProject = myProjectArray[index]

        editTitle.value = openProject['title']
        editDescription.value = openProject['description']
        editDate.value = openProject['date']

        for (let i = 0; i < 3; i++){
            if (editPriority[i].textContent == openProject['priority']) {
                
                priorityBorder =  editPriority[i]
                priorityBorder.style.border = '3px solid black'
            } else {
                editPriority[i].style.border = 'none'
            }
        }

        editCancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            editProject.style.display = 'none'
            form.reset()
        })

        editProject.addEventListener('click', (event) => {
            if (event.target == editProject) {
                editProject.style.display = 'none'
            }
        })

        editPriority.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                priorityBorder.style.border = 'none'
                button.style.border = '3px solid black'
                editPriorityValue = button.textContent
            })
        })

    }

    const createProject = function (title, description, date, priority) {
        let tasks = []
        return {title,description,date,priority,tasks}
    }

    editButton.addEventListener('click', (event) => {
        event.preventDefault();
        openProject['title'] = editTitle.value
        openProject['description'] = editDescription.value 
        openProject['date'] = editDate.value
        openProject['priority'] = editPriorityValue
        
        editProject.style.display = 'none'
        priorityBorder.style.border = 'none'
        storage.storeData()
        dom.editProjectDiv()
        form.reset()
    })

    return {
        addProject,
        addButton,
        displayForm,
        title,
        description,
        date,
        priority,
        myProjectArray,
        createProject,
        displayEditForm
    }

})();

export default addProjectList

