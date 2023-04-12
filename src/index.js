import addProjectList from './addProject'
import tasks from './tasks'

const newProject = document.querySelector('.project-button')
const projectButton = document.querySelector('.projects-lists')

newProject.addEventListener('click', addProjectList.displayForm)

projectButton.addEventListener('click', (project) => {
    if (project.target.classList.contains('project')) {
       
        let targetProject = project.target.parentNode.parentNode
        let index = Array.from(targetProject.children).indexOf(project.target.parentNode)
        
        tasks(project.target,index)
    }
})