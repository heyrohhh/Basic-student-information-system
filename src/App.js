// App.js
import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const showDetails = (student) => {
    setSelectedStudent(student);
  };

  return (
    
    <div>
      <div><h1 >Student Information System</h1></div>
      <div className='main'><StudentList students={students} onShowDetails={showDetails} />
      <StudentForm onAddStudent={addStudent} />
      {selectedStudent && (
        <div className='studdet'>
          <h2>Student Details</h2>
          <p>{`Student ID: ${selectedStudent.studentId}`}</p>
          <p>{`Name: ${selectedStudent.name}`}</p>
          <p>{`Father's Name: ${selectedStudent.fatherName}`}</p>
          <p>{`Date of Birth: ${selectedStudent.dateOfBirth}`}</p>
          <p>{`Address: ${selectedStudent.address}`}</p>
        
        </div>
      )}</div>
      
    </div>
  );
};

export default App;
