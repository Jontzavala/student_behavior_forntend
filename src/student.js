class Student {
    static all = [];
    static container = document.getElementById("students-container")
    constructor({name, id, seat_number, course_id, behaviors, course}){
        this.name = name
        this.id = id
        this.seat_number = seat_number
        this.course_id = course_id
        this.behaviors = behaviors
        this.course = course
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `student-${id}`;
        this.element.addEventListener('click', this.handleClick)
        Student.all.push(this)
    }

    static filteredByCourse(filteredCourse){
        if(filteredCourse){
            for(const s of Student.all){
                if(s.course_id === parseInt(filteredCourse.id)){
                    s.element.style.display = ""
                }else{
                    s.element.style.display = "none"
                }
            }
        }else{
            for(const s of Student.all){
                s.element.style.display = ""
            }
        }
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="student_name">${this.name}</h2>
        
        <p class="course">${this.course.name}</p>
        <p class="seat_number">${this.seat_number}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Student</button>
        <button class="delete" data-id=${this.id}>Delete Student</button>
        `
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
        }
        
    }

    updatedStudent(){
        this.name = this.element.querySelector(".edit-student_name").value;
        //this.course_id = this.element.querySelector(".edit-course_id").value;
        this.seat_number = this.element.querySelector(".edit-seat_number").value;
        studentCall.updateStudent(this)
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Student"){
            console.log(e.target)
            e.target.innerText = "Save Student"
            this.createEditForm(e.target)
        }else if(e.target.innerText === "Delete Student"){
            studentCall.deleteStudent(e)

        }else if(e.target.innerText === "Save Student"){
            console.log("save student")
            e.target.innerText = "Edit Student"
            this.updatedStudent()
        }
    }

    attachToDom(){
        Student.container.appendChild(this.render())
    }
}