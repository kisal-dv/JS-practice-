const students=[
    {id: 1, name: "kisal", age: 22, scores:{ math:85, science:50}},
    {id: 2, name: "sahan", age: 23, scores:{ math:75, science:40}},
    {id: 3, name: "namal", age: 24, scores:{ math:56, science:30}}
    
];

console.log(students);

const studentNames = students.map(student => student.name);
console.log(studentNames);

const topMathStudents = students.filter(student => student.scores.math > 70);
console.log(topMathStudents);

students.forEach(student =>{
    console.log(`${student.name} is ${student.age} years old.`);
});

students.forEach(({name, scores:{math, science}}) =>{
    console.log(`${name} - Math: ${math}, Science: ${science}`);

});

const newStudent ={id: 4, name: "ethana", age:21, scores: { math: 88, science:78}};
const updatedStudents =[...students, newStudent];

console.log(updatedStudents);

const updatedStudentlist = students.map(student =>
    student.id === 2? { ...student, scores: { ...student.scores, math: 95}} : student

);

console.log(updatedStudentlist);