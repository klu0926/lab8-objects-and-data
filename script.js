// Part 1: Understanding and Creating Objects
const student = {
  name: 'Peter',
  age: '12',
  enrolled: true,
  courses: ["math", "english", "science", "art of murder"],
  whoami() {
    const entrollText = this.enrolled ? "currently enrolled" : "not enrolled"
    const coursesText = this.courses.join(' , ')
    console.log(`Hi I am ${this.name}, age ${this.age}, I am ${entrollText}.\nI am taking ${coursesText}`)
  }
}
student.whoami()
console.log('\n')

// Part 2: Working with JSON
// convert object to JSON
const jsonString = JSON.stringify(student)
console.log(`JSON STRING: ${jsonString}`)
const object = JSON.parse(jsonString)
console.log(`Covert JSON back to object:`, object)


