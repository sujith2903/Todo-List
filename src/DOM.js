import { is } from 'date-fns/locale';
import addProjectList from './addProject'

const dom = (function () {
    
    let index
    let taskIndex
    let openProject
    const projectsList = document.querySelector('.projects-lists')
    const mainContent = document.querySelector('.main-content')
    const projectTitle = document.querySelector('.project-title')
    const projectDescription = document.querySelector('.project-description')
    const projectDue = document.querySelector('.project-due')
    const projectPriority = document.querySelector('.priority')
    const taskButton = document.querySelector('.task-button')
    const allTasks = document.querySelector('.all-tasks')

    const createProjectDiv = function () {

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

        if (addProjectList.myProjectArray[index] === openProject) {
            mainContent.style.display='none'
        }

        addProjectList.myProjectArray.splice(index , 1)
    }

    const generateNewTask = function () {

        const newTask = document.createElement('div')
        newTask.classList.add('individual-task')
        allTasks.appendChild(newTask)

        const newCheckbox = document.createElement('div')
        newCheckbox.classList.add('task-checkbox-div')
        newTask.appendChild(newCheckbox)
        newCheckbox.innerHTML = '<label for="task1-checkbox"></label><input type="checkbox" class = "task-checkbox" id="task1-checkbox" name="checkbox">'
        
        const newInput = document.createElement('div')
        newInput.classList.add('task-input-div')
        newTask.appendChild(newInput)
        newInput.innerHTML = '<label for="task1-input"></label><input type="text" class="task-input" id="task1-input" name="task" required>'
        
        const taskDeleteButton = document.createElement('div')
        taskDeleteButton.classList.add('task-delete-button')
        newTask.appendChild(taskDeleteButton)
        taskDeleteButton.innerHTML = '<svg class="deleteSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="deleteSVG" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
         
    }

    const generateTaskObject = function (taskName, isCompleted) {

        if (isCompleted == undefined) {
            isCompleted = false
        }
       
        return {taskName, isCompleted}
    }

    const generateTaskList = function () {
        for (let i = 0; i < openProject['tasks'].length; i++){
            generateNewTask()

            const taskInput = document.querySelectorAll('.task-input')
            const checkBox  = document.querySelectorAll('.task-checkbox')
            taskInput[i].value = openProject['tasks'][i]['taskName']
            checkBox[i].checked = openProject['tasks'][i]['isCompleted']

        }
    }

    const clearTaskList = function () {

        const individualTask = document.querySelectorAll('.individual-task')
       
        individualTask.forEach((task) => {
            allTasks.removeChild(task)
        })
    }

    projectsList.addEventListener('click', (project) => {
        if ((project.target.classList.contains('project')) ||
            (project.target.classList.contains('deleteSVG')) ||
            (project.target.classList.contains('editSVG'))) {
        
            let targetProject = project.target.closest('.project-display')
            index = Array.from(targetProject.parentNode.children).indexOf(targetProject)
        }
    })

    // Event handler when a project is deleted
    projectsList.addEventListener('click', (project) => {
        if (project.target.classList.contains('deleteSVG')) {
            const projectDiv = project.target.closest('.project-display')
            deleteProject(index)
            projectsList.removeChild(projectDiv)
            
        }
    })

    // Event handler when a project is clicked
    projectsList.addEventListener('click', (project) => {
        if (project.target.classList.contains('project')) {
            
            mainContent.style.display = 'flex'
            openProject = addProjectList.myProjectArray[index]

            console.log(openProject)

            projectTitle.textContent = openProject['title']
            projectDescription.textContent  = openProject['description']
            projectDue.textContent  = openProject['date']
            projectPriority.textContent = openProject['priority']
            
            clearTaskList()
            generateTaskList()
        }
    })

    allTasks.addEventListener('click', (event) => {
        if ((event.target.classList.contains('task-checkbox')) ||
            (event.target.classList.contains('task-input')) ||
            (event.target.classList.contains('deleteSVG'))) {
            
            let targetTask = event.target.closest('.individual-task')
            
            taskIndex = Array.from(targetTask.parentNode.children).indexOf(targetTask)
        }
    })

    // Event handler for new task creation
    taskButton.addEventListener('click', () => {
    
        generateNewTask()
        const taskInput = document.querySelectorAll('.task-input')
        let taskName
        let isCompleted 
       
        taskInput.forEach((task) => {

            const taskCheckBoxDiv = task.closest('.individual-task')
            const taskCheckBox = taskCheckBoxDiv.querySelector('.task-checkbox')

            task.addEventListener('change', () => {

                taskName = task.value
                const taskObject = generateTaskObject(taskName, isCompleted)
                addProjectList.myProjectArray[index]['tasks'][taskIndex] = taskObject
            }) 

            taskCheckBox.addEventListener('change', () => {

                isCompleted = taskCheckBox.checked
                const taskObject = generateTaskObject(taskName, isCompleted)
                addProjectList.myProjectArray[index]['tasks'][taskIndex] = taskObject
            })
        })
    })

    // Event handler for deleting a task
    allTasks.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteSVG')) {

            const currentTask = event.target.closest('.individual-task')
            addProjectList.myProjectArray[index]['tasks'].splice(taskIndex,1)
            allTasks.removeChild(currentTask)
        }
    }) 

    /*
    editProjectButton.addEventListener('click', () => {
        addProjectList.addProject.style.display = 'flex'

    })*/

    return {
        createProjectDiv,
        deleteProject
    }

})();
    
export default dom