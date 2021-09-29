class Course {
    constructor({name, id, students}){
        this.name = name
        this.id = id
        this.students = students
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}