import addProjectList from './addProject'

const storage = (function () {

    function populateData() {
        if (localStorage.getItem('project')) {

            let storageArray = JSON.parse(localStorage.getItem('project'))

            for (let i = 0; i < storageArray.length; i++){
                addProjectList.myProjectArray.push(storageArray[i])

                console.log(storageArray[i])
            }
        }
    }

    function storeData() {

        let storageArray = addProjectList.myProjectArray

        localStorage.setItem('project', JSON.stringify(storageArray))

        console.log(JSON.parse(localStorage.getItem('project')))
    }

    return {
        populateData,
        storeData
    }
})();

export default storage