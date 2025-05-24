import React from "react";
import "../styles/JobInfo.css"


export default function JobInfo() {
  return (
    <div className="job">
      <h2>Job History</h2>
      <label>
        Company
        <input type="text"></input>
      </label>
      <label>
        Position
        <input type="text"></input>
      </label>
      <label>
        Duties
        <input type="text"></input>
      </label>
      <label>
        Start Date:
        <input type="date"></input>
      </label>
      <label>
        End Date:
        <input type="date"></input>
      </label>
    </div>
  );
}
