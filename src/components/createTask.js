import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
// import { Form, Button } from "react-bootstrap";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/create", {
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

  //   const formattedDate = date ? format(date, "yyyy-MM-dd HH:mm:ss") : null;

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="p-3 bg-white rounded w-50">
        <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>
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
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
                required
              />
            </div>
          </div>
          <button className="me-2 btn btn-success">Submit</button>
          <Link to={"/"} className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
