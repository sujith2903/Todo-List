import addProjectList from './addProject'
import dom from './DOM'
import storage from './storage'

storage.populateData()

const newProject = document.querySelector('.project-button')

newProject.addEventListener('click', addProjectList.displayForm)

dom

