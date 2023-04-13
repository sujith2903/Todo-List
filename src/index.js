import addProjectList from './addProject'
import tasks from './tasks'
import dom from './DOM'

const newProject = document.querySelector('.project-button')
const projectButton = document.querySelector('.projects-lists')



newProject.addEventListener('click', addProjectList.displayForm)

dom

const a = function () {
    let x = 2;
    if (x % 2 == 0) {
        let y
        y = x * 2
        return y
    }
    
}

const b = function () {
    let c = a();
    console.log(c)
}

b()