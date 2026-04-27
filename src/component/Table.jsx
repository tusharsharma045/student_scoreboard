import React from 'react';
import StudentRow from './Row';

const StudentTable = ({ students, onUpdateScore, onDeleteStudent }) => {
  return (
    <div>
      <div className="records-header">
        <h2 className="records-title">Students Records</h2>
        <span className="records-count">Total: {students.length}</span>
      </div>
      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <StudentRow
                key={student.id}
                student={student}
                onUpdateScore={onUpdateScore}
                onDeleteStudent={onDeleteStudent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;