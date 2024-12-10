
function processStudents(students) {   
    let Student = students.filter(student => student.marks > 60);
    let sortedStudents = Student.sort((a, b) => b.marks - a.marks);
    let names = sortedStudents.map(student => student.name);
    return names;
  }

  let students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  console.log(processStudents(students)); 
  