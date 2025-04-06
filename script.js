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
console.log('1. Create student object')
student.whoami()
console.log('\n')

// Part 2: Working with JSON
// convert object to JSON
const jsonString = JSON.stringify(student)
const object = JSON.parse(jsonString)
console.log('2. Working with JSON')
console.log(`JSON STRING: ${jsonString}`)
console.log(`Covert JSON back to object:`, object)
console.log('\n')

// Part 3: Using Destructuring Assignment
// extract name and coures
const { name: studentName, courses: studentCourses } = student
console.log('3. Using Destructuring Assignment')
console.log('name:', studentName)
console.log('courses:', studentCourses)

// create array of scores
const scores = [100, 95, 85, 99, 77, 65, 45]
const [firstScore, secondScore] = scores
console.log('scores:', scores)
console.log('firstScore:', firstScore)
console.log('secondScore:', secondScore)
console.log('\n')

