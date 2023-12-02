// StudentList.js
import React from 'react';
import './StudentList.css';

const StudentList = ({ students, onShowDetails }) => {
  return (
    <div className='studentlist'>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            
            {`Student ID: ${student.studentId}, Name: ${student.name}`}
            <button onClick={() => onShowDetails(student)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
