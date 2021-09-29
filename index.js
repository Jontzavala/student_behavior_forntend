const port = `http://localhost:3000`;
const studentCall = new StudentService(port);

studentCall.getStudents()