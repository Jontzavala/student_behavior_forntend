const port = `http://localhost:3000`;
const studentCall = new StudentService(port);
const courseCall = new CourseService(port);
const form = document.getElementById("student-form")
const searchForm = document.getElementById("student-search")
const dropDown = document.getElementById("course-dropdown")
const courseInput = document.getElementById('course-id')
const studentNameValue = document.getElementById('student-name');
const seatNumberValue = document.getElementById('student-seat-number');

studentCall.getStudents()
courseCall.getCourses()
form.addEventListener('submit', handleSubmit)
searchForm.addEventListener('submit', Student.handleSearch)

function handleSubmit(e){
    e.preventDefault();
    studentCall.createStudents();
    e.target.reset();

}


if(true){
    let number = 42
}
