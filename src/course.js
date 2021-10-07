class Course {
    static all = []

    static courseContainer = document.getElementById('courses-container')


    constructor({name, id, students}){
        this.name = name
        this.id = id
        this.students = students
        this.active = false

        this.element = document.createElement('button')
        this.element.dataset.id = this.id
        this.element.id = `course-${this.id}`
        this.element.addEventListener('click', this.deleteCourse)

        Course.all.push(this)
    }

    render(){
        this.element.innerHTML += `
        <p>${this.name}</p>
        <button id ='delete-bttn'>X</button>
        <br>
        `
        return this.element
    }

    addtoDom(){
        Course.courseContainer.append(this.render())
        this.addListeners()
    }

    addListeners(){
        this.element.addEventListener('click', this.setActiveCourse)
    }

    setActiveCourse = (e) => {
        let filteredCourse
        Course.all.forEach(c => {
            if(c.element === this.element && !this.active){
                c.element.classList.add('activated')
                c.active = true
                filteredCourse = c
            }else{
                c.element.classList.remove('activated')
                c.active = false
            }
            Student.filteredByCourse(filteredCourse)
        })
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }

    deleteCourse = (event) => {
        if(event.target.innerText === "X"){
            for(const s of Student.all){
                if(s.course_id === this.id){
                    s.element.remove()
                }
            }
            this.element.remove()
            courseCall.deleteCourse(this.id)
        }
    }
}