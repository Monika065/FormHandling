import React, { useState } from "react";
import { useEffect } from "react";
import "./Form.css";
export default function Form() {
  // intially the object is empty for all the field
  const [data, setData] = useState({
    name: "",
    age: "",
    college: "",
    feedback: ""
  });
  //for storing the data of every time use renter
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (data.name && data.age && data.college) {
      setUser([...user]);
    }
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  const submitHandler = () => {
    if (data.name && data.age && data.college && data.email) {
      setUser([...user, data]);
      setData({ name: "", age: "", college: "", email: "" });
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };
  return (
    <div className="form-container">
      <div className="form-inputs">
        <h2>Enter user data</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Enter your name"
            type="text"
            id="name"
            value={data.name}
            name="name"
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            placeholder="Enter your age"
            type="number"
            id="age"
            value={data.age}
            name="age"
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="college">College:</label>
          <input
            placeholder="Enter your College name"
            id="college"
            type="text"
            value={data.college}
            name="college"
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            placeholder="Enter your email"
            id="email"
            type="text"
            value={data.email}
            name="email"
            onChange={changeHandler}
            required
          ></input>
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
      <div className="user-table">
        <h2>Student Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>College</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.college}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
