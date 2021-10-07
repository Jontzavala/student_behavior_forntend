class CourseService {
    constructor(port){
        this.port = port
    }

    getCourses(){
        fetch(`${this.port}/courses`)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                const c = new Course(element)
                c.addtoDom()
                c.addToDropDown()
            })
        })
    }

    deleteCourse(id){
        
        fetch(`${this.port}/courses/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'applicaton/json'
            }
        })
        .then(response => response.json())
        .then(json => alert(json.error))
        
    }
}