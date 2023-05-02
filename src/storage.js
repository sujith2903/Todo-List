import addProjectList from './addProject'
import dom from './DOM'

const storage = (function () {

    function populateData() {
        if (localStorage.getItem('project')) {
           
            let storageArray = JSON.parse(localStorage.getItem('project'))

            for (let i = 0; i < storageArray.length; i++){
                addProjectList.myProjectArray.push(storageArray[i])
            }

            dom.createProjectDiv()

        } else if (!localStorage.getItem('project')) {
            
            console.log('test')
            let defaultProjects = [{title: 'Gym',
                                    description: 'List of workouts',
                                    date: '',
                                    priority: 'Medium',
                                    tasks: [{ taskName: 'Deadlifts', isCompleted: false },        
                                            { taskName: 'Squat', isCompleted: false },
                                            { taskName: 'Bench Press', isCompleted: false }]
                                    },
                                    
                                    {title: 'Class',
                                    description: 'List of Home works',
                                    date: '2023-05-19',
                                    priority: 'High',
                                    tasks: [{taskName: 'Physics Assignment', isCompleted: true}]
                                    }]
            
            for (let i = 0; i < defaultProjects.length; i++){
                addProjectList.myProjectArray.push(defaultProjects[i])
            }

            dom.createProjectDiv()
            storeData()
        }
    }

    function storeData() {

        let storageArray = addProjectList.myProjectArray

        localStorage.setItem('project', JSON.stringify(storageArray))

        if (storageArray.length == 0) {
           localStorage.clear()
       }
    }

    return {
        populateData,
        storeData
    }
})();

export default storage