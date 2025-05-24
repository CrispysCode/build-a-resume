import React from "react";
import "../styles/GeneralInfo.css";

export default function GeneralInfo({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  return (
    <div className="general">
      <h2>General Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
