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

    /* createStudents(){
        const studentInfor = {
            student: {
                name: studentNameValue.value,
                seat_number: seat_numberValue.value,
                course_id: course_idValue.value
            }
        }
        fetch(this.port + `/students`)
        .then(response => response.json())
        .then(data => )
    } */
}