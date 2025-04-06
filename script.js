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


// Part 4: The spread operator
// clone student object using spread operator
console.log('4. The spread operator')
// clone student
const cloneStudent = { ...student }
console.log('clone student object:', cloneStudent)

// add new property
cloneStudent.graduationYear = '2020'
console.log('clone student graduation year:', cloneStudent.graduationYear)

// merge two arrays
const newCourses = ['history', 'programming', 'sniper 101']
student.courses = [...cloneStudent.courses, ...newCourses]
console.log('Student courses combined:', student.courses)
console.log('\n')

// Part 5: Object methods
// add a method to add course
console.log('5. Object methods')
student.addCourse = function (course) {
  this.courses.push(course)
}
student.addCourse('swimming')
console.log('Add swimming to courses')
console.log(student.courses)

// add method to calculate and return total number of courses
student.howManyCourses = function () {
  const totalCourses = this.courses.length
  return totalCourses
}
console.log('Total Courses:', student.howManyCourses())


// Bonus Task
student.scores = scores
student.getAverageScore = function reduceScores() {
  const average = this.scores.reduce((acc, current, index, array) => {
    // if this is the last score calculate average 
    if (index === array.length - 1) {
      return Number(((acc + current) / array.length).toFixed(2))
    } else {
      return acc + current
    }
  }, 0)
  return average
}
console.log('Bonus Task')
console.log('Stduent Scores:', student.scores)
console.log("Student Scores Average:", student.getAverageScore())