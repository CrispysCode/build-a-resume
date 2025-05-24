import React from "react";
import "../styles/GeneralInfo.css";


export default function GeneralInfo() {
  return (
    <div className="general">
      <h2>General Information</h2>
      <label>
        Name:
        <input type="text"></input>
      </label>
      <label>
        Phone:
        <input type="tel"></input>
      </label>
      <label>
        Email:
        <input type="email"></input>
      </label>
    </div>
  );
}
