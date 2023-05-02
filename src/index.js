import addProjectList from './addProject'
import dom from './DOM'
import storage from './storage'

storage.populateData()

console.log(addProjectList.myProjectArray)

const newProject = document.querySelector('.project-button')

newProject.addEventListener('click', addProjectList.displayForm)

dom

