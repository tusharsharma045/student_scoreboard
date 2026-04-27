
import React, { useState } from 'react';

const StudentRow = ({ student, onUpdateScore, onDeleteStudent }) => {
  const [newScore, setNewScore] = useState(student.score);

  const handleUpdate = () => {
    const scoreNum = parseInt(newScore);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      alert('Score must be a number between 0 and 100');
      return;
    }
    onUpdateScore(student.id, scoreNum);
  };

  const status = student.score >= 40 ? 'PASS ✓' : 'FAIL ✗';
  const statusClass = student.score >= 40 ? 'pass' : 'fail';

  return (
    <tr className={`student-row ${statusClass}`}>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
          min="0"
          max="100"
        />
      </td>
      <td>
        <span className={`status-badge ${statusClass}`}>{status}</span>
      </td>
      <td>
        <button onClick={handleUpdate} className="update-btn">✏️ Update</button>
        <button onClick={() => onDeleteStudent(student.id)} className="delete-btn">🗑️ Delete</button>
      </td>
    </tr>
  );
};

export default StudentRow;
