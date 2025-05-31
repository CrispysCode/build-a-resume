import React from "react";
import "../styles/EducationInfo.css";

export default function EducationInfo({ data, onChange, addEducation }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = data.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    onChange(updatedEducation);
  };
  return (
    <div className="education">
      <h2>Education Information</h2>
      {data.map((education, index) => (
        <div key={index} className="educationEntry">
          <label>
            School:
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Study:
            <input
              type="text"
              name="study"
              value={education.study}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Graduation:
            <input
              type="date"
              name="gradDate"
              value={education.gradDate}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
        </div>
      ))}
      <button type="button" className="addEducation" onClick={addEducation}>
        Add Experience
      </button>
    </div>
  );
}
