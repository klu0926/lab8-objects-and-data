const student = {
  name: 'Peter',
  age: '12',
  enrolled: true,
  courses: ["math", "english", "science", "art of murder"],
  whoami() {
    const entrollText = this.entrolled ? "currently enrolled" : "not enrolled"
    const coursesText = this.courses.join(' , ')
    console.log(`Hi I am ${this.name}, age ${this.age}, I am ${entrollText}.\nI am taking ${coursesText}`)
  }
}
student.whoami()