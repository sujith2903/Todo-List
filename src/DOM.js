import addProjectList from './addProject'

const dom = (function () {
    
    let index
    const projectsList = document.querySelector('.projects-lists')

    const createProject = function () {

        const deleteProjectButton = document.createElement('button')
        const editProjectButton = document.createElement('button')
        const projectDiv = document.createElement('div')
        const projectTitleDiv = document.createElement('div')

        projectDiv.classList.add('project-display')
        projectsList.appendChild(projectDiv)

        projectTitleDiv.classList.add('project')
        projectTitleDiv.textContent = addProjectList.myProjectArray[(addProjectList.myProjectArray).length - 1]['title']
        projectDiv.appendChild(projectTitleDiv)

        deleteProjectButton.classList.add('delete-project-button')
        deleteProjectButton.innerHTML = '<svg class="deleteSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="deleteSVG" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
        projectDiv.appendChild(deleteProjectButton)

        editProjectButton.classList.add('edit-project-button')
        editProjectButton.innerHTML = '<svg class="editSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="editSVG" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>'
        projectDiv.appendChild(editProjectButton)
    }

    const deleteProject = function (index) {
        
        console.log(index)
        addProjectList.myProjectArray.splice(index , 1)
        
    }

    projectsList.addEventListener('click', (project) => {
        if ((project.target.classList.contains('project')) ||
            (project.target.classList.contains('deleteSVG')) ||
            (project.target.classList.contains('editSVG'))) {
        
            let targetProject = project.target.closest('.project-display')
            console.log(targetProject)
            index = Array.from(targetProject.parentNode.children).indexOf(targetProject)
            
            console.log(index)
        }
    })

    projectsList.addEventListener('click', (project) => {
        if (project.target.classList.contains('deleteSVG')) {
            const projectDiv = project.target.closest('.project-display')
            deleteProject(index)
            projectsList.removeChild(projectDiv)
            console.log(addProjectList.myProjectArray)
        }
    })

    /*

    createProject.deleteProjectButton.addEventListener('click',deleteProject)
                deleteProjectButton.addEventListener('click', () => {
                projectsList.removeChild(projectDiv)
    })

    editProjectButton.addEventListener('click', () => {
        addProjectList.addProject.style.display = 'flex'

    })*/

    

    return {
        createProject,
        deleteProject
    }

})();
    
export default dom