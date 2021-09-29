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
        Student.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="student_name">${this.name}</h2>
        <p class="course_id">${this.course_id}</p>
        <p class="seat_number">Seat Number: ${this.seat_number}</p>
        </div>
        `
        return this.element
    }

    attachToDom(){
        Student.container.appendChild(this.render())
    }
}