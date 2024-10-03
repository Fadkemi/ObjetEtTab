const student = {
    name: "Marie",
    age: 20,
    courses: []
}
console.log(student);
student.age = 21 
student.grade = "A"
student.courses.push("Maths","Physics","Chemistry")
console.log(student);
const index = student.courses.indexOf("Physics");
const deux = student.courses.slice(0,2);
console.log(student);
console.log(deux);
console.log(index);