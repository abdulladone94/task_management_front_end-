import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Form, Button } from "react-bootstrap";

const UpdateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, {
        taskTitle,
        taskDetails,
        selectedDate,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
    console.log(taskTitle, taskDetails);
  };
  return (
    <div className="p-1 d-flex vh-100 bg-primary justify-content-center align-items-center p-md-5">
      <div className="p-3 bg-white rounded w-75">
        <form onSubmit={handleSubmit}>
          <h2>Update Task</h2>
          <div className="mb-2">
            <label htmlFor="">Task</label>
            <input
              type="text"
              placeholder="Enter Task"
              className="form-control"
              onChange={(e) => setTaskTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Task Details</label>
            <textarea
              type="text"
              placeholder="Enter Task"
              className="form-control"
              onChange={(e) => setTaskDetails(e.target.value)}
              required
            />
          </div>
          <div className="mb-2 ">
            <div className="flex-column d-flex">
              <label htmlFor="">Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy" // Customize date format
                // Show a clear button
                placeholderText="Select a date"
                required
              />
            </div>
          </div>
          <button className="btn btn-success me-2">Update</button>
          <Link to={"/"} className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
