import addProjectList from './addProject'
import tasks from './tasks'
import dom from './DOM'

const newProject = document.querySelector('.project-button')
const projectButton = document.querySelector('.projects-lists')



newProject.addEventListener('click', addProjectList.displayForm)

dom
