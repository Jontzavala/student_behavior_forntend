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
        const studentInfor = {
            student: {
                name: studentNameValue.value,
                seat_number: seatNumberValue.value,
                course_id: dropDown.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(studentInfor)
        }
        fetch(this.port + `/students`, configObject)
        .then(response => response.json())
        .then(data => {
            const stu = new Student(data)
            stu.attachToDom()
        })
    }
}