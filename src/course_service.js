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
                c.addToDropDown()
            })
        })
    }
}