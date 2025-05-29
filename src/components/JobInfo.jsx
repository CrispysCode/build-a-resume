import React from "react";
import "../styles/JobInfo.css";

export default function JobInfo({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="job">
      <h2>Job History</h2>
      <label>
        Company
        <input
          type="text"
          name="company"
          value={data.company}
          onChange={handleChange}
        />
      </label>
      <label>
        Position
        <input
          type="text"
          name="position"
          value={data.position}
          onChange={handleChange}
        />
      </label>
      <label>
        Duties
        <input
          type="text"
          name="duties"
          value={data.duties}
          onChange={handleChange}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={data.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={data.endDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
