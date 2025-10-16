const students = [
    {name: "Aravind", age: 22, grade: "A"},
    {name: "Varun", age: 21, grade: "A+"},
    {name: "Poovendhan", age: 21, grade: "B+"}
]

for (let student of students){
    console.log("Name: " + student.name + ", Grade: " + student.grade);
}