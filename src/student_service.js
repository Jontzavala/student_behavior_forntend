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
                course_id: dropDown.value,
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
                let courObj = new Course({id: data.course_id, name: data.course_name})
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
            student.render(json)
        })
    }

    deleteStudent(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(this.port + `/students/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
        for(let i = 0; i<Student.all.length; i++){
            
            if(Student.all[i].id === parseInt(id)){
                Student.all.splice(i, 1)
            }
        }
    }
}