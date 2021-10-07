class StudentService {
    constructor(port){
        this.port = port
    }

    getStudents(){
        fetch(this.port + `/students`)
        .then(response => response.json())
        .then(data => {
            for(const student of data){
                let s = new Student(student)
                s.attachToDom()
            }
        })
    }

    createStudents(){
        const studentInfo = {
            student: {
                name: studentNameValue.value,
                seat_number: seatNumberValue.value,
                //course_id: dropDown.value
                course_name: courseInput.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(studentInfo)
        }
        fetch(this.port + `/students`, configObject)
        .then(response => response.json())
        .then(data => {
            const stu = new Student(data)
            const cour = Course.all.find(c => parseInt(c.id) === stu.course_id)
            if(!cour){
                let courObj = new Course(data)
                courObj.addtoDom()
                courObj.addToDropDown()
            }
            stu.attachToDom()
        })
    }

    updateStudent(student){
        const {name, seat_number, course_id, course, id} = student
        const studentInfo = {
            name,
            seat_number,
            course_id,
            course
        }
        const configObject = {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(studentInfo)
        }
        fetch(this.port + `/students/${id}`, configObject)
        .then( r => r.json())
        .then(json => {
            student.render()
        })
    }

    deleteStudent(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(this.port + `/students/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
        
    }
}