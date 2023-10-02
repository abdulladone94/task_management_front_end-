import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setTask(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-2 p-md-5">
      <div className="bg-white rounded w-md-75 ">
        <Link to={"create"} className="mb-3 btn btn-success col-md-3">
          Add +
        </Link>
        <table className="table" style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Date</th>
              <th>Task Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tasks) && tasks.length > 0 ? (
              tasks.map((task, id) => (
                <tr key={id}>
                  <th>{task.task}</th>
                  <th>{task.date}</th>
                  <th>{task.detail}</th>
                  <th>
                    <div className="d-flex flex-column flex-md-row align-items-center">
                      <Link
                        to={`update/${task.id}`}
                        className="m-1 btn btn-primary"
                      >
                        Update
                      </Link>
                      <button className="m-1 btn btn-danger">Delete</button>
                    </div>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No tasks found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
