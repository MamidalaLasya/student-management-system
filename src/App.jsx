function Header() {
  return <h1>Student Management System</h1>;
}

function StudentList() {
  const students = [
    { id: 1, name: "Lasya", marks: 85 },
    { id: 2, name: "Srija", marks: 72 },
    { id: 3, name: "Ravi", marks: 35 },
    { id: 4, name: "Priya", marks: 90 },
    { id: 5, name: "Rahul", marks: 28 }
  ];

  return (
    <>
      <h2>Student List</h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.name} - {student.marks} -
          {student.marks >= 40 ? "Pass" : "Fail"}
        </p>
      ))}
    </>
  );
}

function Footer() {
  return <h3>End of Student List</h3>;
}

function App() {
  return (
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  );
}

export default App;