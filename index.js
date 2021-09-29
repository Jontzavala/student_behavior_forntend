const port = `http://localhost:3000`;
const studentCall = new StudentService(port);
const form = document.getElementById("student-form")
const dropDown = document.getElementById("course-dropdown")
const studentNameValue = document.getElementById('student-name');

studentCall.getStudents()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    studentCall.createStudents()

}