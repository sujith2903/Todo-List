import dom from './DOM'

const addProjectList = (function () {

    const addProject = document.querySelector('.add-project')
    const form = document.querySelector('form')
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')
    const date = document.querySelector('#date')
    const priority = document.querySelectorAll('.project-priority-button')
    const addButton = document.querySelector('.add')
    const cancelButton = document.querySelector('.cancel')

    let myProjectArray = []
    let priorityValue = ''
   
    const displayForm = function () {
        
        addProject.style.display = 'flex'

        addButton.addEventListener('click', (event) => {
            if (title.value != '') {
                event.preventDefault()
                const newProject = createProject(title.value, description.value, date.value,priorityValue)
                myProjectArray.push(newProject)
                dom.createProjectDiv()
                console.log(myProjectArray)
                addProject.style.display = 'none'
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

    const createProject = function (title, description, date, priority) {
        let tasks = []
        return {title,description,date,priority,tasks}
    }

    return {
        addProject,
        displayForm,
        myProjectArray
    }

})();

export default addProjectList

