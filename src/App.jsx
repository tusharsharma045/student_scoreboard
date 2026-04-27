import { useState } from 'react';
import Header from './component/Header';
import AddStudentForm from './component/Addstudents';
import StudentTable from './component/Table';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 101, name: 'Rahul Kumar', score: 85 },
    { id: 102, name: 'Priya Singh', score: 92 },
    { id: 103, name: 'Vikram Patel', score: 78 },
    { id: 104, name: 'Anjali Sharma', score: 88 },
    { id: 105, name: 'Arjun Verma', score: 95 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score,
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: newScore } : student
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const totalStudents = students.length;
  const passedStudents = students.filter(student => student.score >= 40).length;
  const averageScore = totalStudents > 0 ? (students.reduce((sum, student) => sum + student.score, 0) / totalStudents).toFixed(0) : 0;

  return (
    <div className="app">
      <Header />
      <AddStudentForm onAddStudent={addStudent} />
      <div className="summary">
        <div className="summary-item">
          <h3>📊 Total Students</h3>
          <p>{totalStudents}</p>
        </div>
        <div className="summary-item">
          <h3>✅ Passed Students</h3>
          <p>{passedStudents}</p>
        </div>
        <div className="summary-item">
          <h3>📈 Average Score</h3>
          <p>{averageScore}</p>
        </div>
      </div>
      <StudentTable students={students} onUpdateScore={updateScore} onDeleteStudent={deleteStudent} />
    </div>
  );
}

export default App;