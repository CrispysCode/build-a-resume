import React from "react";
import "../styles/EducationInfo.css";

export default function EducationInfo({ data, onChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  }
  return (
    <div className="education">
      <h2>Education Information</h2>
      <label>
        School:
        <input type="text"
        name="school"
        value={data.school}
        onChange={handleChange}
        />
      </label>
      <label>
        Study:
        <input type="text"
        name="study"
        value={data.study}
        onChange={handleChange} />
      </label>
      <label>
        Graduation: 
        <input type="date"
         name="gradDate"
         value={data.gradDate}
         onChange={handleChange}
         />
      </label>
    </div>
  );
}
