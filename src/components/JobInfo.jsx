import React from "react";
import "../styles/JobInfo.css";

export default function JobInfo({ data, onChange, addJob }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedJobs = data.map((job, i) =>
      i === index ? { ...job, [name]: value } : job
    );
    onChange(updatedJobs);
  };

  return (
    <div className="job">
      <h2>Job History</h2>
      {data.map((job, index) => (
        <div key={index} className="jobEntry">
          <label>
            Company
            <input
              type="text"
              name="company"
              value={job.company}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Position
            <input
              type="text"
              name="position"
              value={job.position}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Duties
            <input
              type="text"
              name="duties"
              value={job.duties}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="from"
              value={job.from}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="to"
              value={job.to}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addJob} className="addJob">
        Add Experience
      </button>
    </div>
  );
}
