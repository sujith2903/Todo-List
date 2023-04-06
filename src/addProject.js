const addProject = (function () {
   
    const displayForm = function () {
        const addProject = document.querySelector('.add-project')
        const title = document.querySelector('#title')
        const addButton = document.querySelector('.add')
        const cancelButton = document.querySelector('.cancel')
        addProject.style.display = 'flex'

        addButton.addEventListener('click', (event) => {
            if (title.value != '' ) {
                event.preventDefault()
                addProject.style.display = 'none'
            }
        })

        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            addProject.style.display = 'none'
        })

        addProject.addEventListener('click', (event) => {
            if (event.target == addProject) {
                addProject.style.display = 'none'
            }
        })
    }

    return {
        displayForm
    }

})();

export default addProject