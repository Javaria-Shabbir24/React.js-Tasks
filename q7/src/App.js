import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');//sets name
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState(null);//sets submitted data

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the values on submit
    const data = { //data object with values
      name: name,
      email: email,
      age: age
    };
    // Update submitted data state
    setSubmittedData(data);
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}//onchange sets the new name
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display the submitted values after submit */}
      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
