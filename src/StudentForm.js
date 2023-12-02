// StudentForm.js
import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = ({ onAddStudent }) => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [studentPhoto, setStudentPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onAddStudent({ studentId, name, fatherName, dateOfBirth, address, studentPhoto });
    setStudentId('');
    setName('');
    setFatherName('');
    setDateOfBirth('');
    setAddress('');
    setStudentPhoto('');
  };

  return (
    <div className='studentform'>
     
      <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
        <label>
          Student ID:
          <input
            type="Number"
            placeholder='1321RS'
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            placeholder='Rohit Mishra'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Father's Name:
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default StudentForm;
