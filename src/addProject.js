const addProject = (function () {

    const addProject = document.querySelector('.add-project')
    const form = document.querySelector('form')
    const title = document.querySelector('#title')
    const addButton = document.querySelector('.add')
    const cancelButton = document.querySelector('.cancel')
   
    const displayForm = function () {
        
        addProject.style.display = 'flex'

        addButton.addEventListener('click', (event) => {
            if (title.value != '') {
                event.preventDefault()
                displayProject()
                addProject.style.display = 'none'
                console.log(title.value)
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
    }

    const displayProject = function () {
        const projectsList = document.querySelector('.projects-list')

        const projectDiv = document.createElement('div')
        projectDiv.classList.add('.project-display')
        projectsList.appendChild(projectDiv)

        const projectTitleDiv = document.createElement('div')
        projectDiv.textContent = title.value
        projectDiv.appendChild(projectTitleDiv)

    }


    return {
        displayForm
    }

})();

export default addProject