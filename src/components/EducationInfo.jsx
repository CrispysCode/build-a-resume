import React from "react";
import "../styles/EducationInfo.css";

export default function EducationInfo() {
  return (
    <div className="education">
      <h2>Education Information</h2>
      <label>
        School:
        <input type="text"></input>
      </label>
      <label>
        Study:
        <input type="tel"></input>
      </label>
      <label>
        Graduation: 
        <input type="date"></input>
      </label>
    </div>
  );
}
