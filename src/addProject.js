const addProject = (function () {

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
                console.log(newProject)
                displayProject()
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
        
        return {title,description,date,priority}
    }

    const displayProject = function () {
        const projectsList = document.querySelector('.projects-list')
        const deleteProjectButton = document.createElement('button')
        const editProjectButton = document.createElement('button')

        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project-display')
        projectsList.appendChild(projectDiv)

        const projectTitleDiv = document.createElement('div')
        projectTitleDiv.textContent = myProjectArray[myProjectArray.length-1]['title']
        projectDiv.appendChild(projectTitleDiv)

        deleteProjectButton.classList.add('delete-project-button')
        deleteProjectButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
        projectDiv.appendChild(deleteProjectButton)

        deleteProjectButton.addEventListener('click', () => {
            projectsList.removeChild(projectDiv)
        })

        editProjectButton.classList.add('edit-project-button')
        editProjectButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>'
        projectDiv.appendChild(editProjectButton)

        editProjectButton.addEventListener('click', () => {
            displayForm()
        })
    }

    return {
        displayForm,
    }

})();

export default addProject