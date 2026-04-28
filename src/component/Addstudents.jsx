import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Name cannot be empty');
      return;
    }
    const scoreNum = parseInt(score);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      alert('Score must be a number between 0 and 100');
      return;
    }
    onAddStudent(name.trim(), scoreNum);
    setName('');
    setScore('');
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <div className="form-top">
        <div className="panel-title">Add New Student</div>
      </div>
      <div className="form-row">
        <div className="field-block">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <div className="field-block">
          <label htmlFor="studentScore">Score (0-100)</label>
          <input
            type="number"
            id="studentScore"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Enter score"
            min="0"
            max="100"
          />
        </div>
        <button type="submit" className="add-btn">➕ Add</button>
      </div>
    </form>
  );
};

export default AddStudentForm;