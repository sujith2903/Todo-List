import dom from './DOM'

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

    let openProject
    let myProjectArray = []
    let priorityValue = 'Low'
   
    const displayForm = function () {
        
        form.reset()
        addProject.style.display = 'flex'

        addButton.addEventListener('click', (event) => {
            if (title.value != '') {
                event.preventDefault()
                const newProject = createProject(title.value, description.value, date.value, priorityValue)
                myProjectArray.push(newProject)
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
                console.log(priorityValue)
            })
        })
    }

    const displayEditForm = function (index) {

        editProject.style.display = 'flex'
        console.log(index)
        openProject = myProjectArray[index]

        editTitle.value = openProject['title']
        editDescription.value = openProject['description']
        editDate.value = openProject['date']

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

        editProject.style.display = 'none'
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

