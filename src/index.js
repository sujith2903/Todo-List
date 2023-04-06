import addProject from './addProject'

const newProject = document.querySelector('.project-button')

newProject.addEventListener('click', addProject.displayForm)