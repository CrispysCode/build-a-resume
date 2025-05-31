import React from "react";
import "../styles/Display.css"
export default function Display({ resume }) {
   const { general, education, work } = resume;
     return (
        <div className="display">
            
            <h2>General Information</h2>
            <p>{general.name}</p>
            <p>{general.phone}</p>
            <p>{general.email}</p>

            <h2>Education Information</h2>
            {education.map((edu, index) => (
               <div key={index} className="education-entry">
               <p>{edu.school}</p>
            <p>{edu.study}</p>
            <p>{edu.gradDate}</p>
            </div>      
            ))}
            
            <h2>Employment History</h2>
            <p>{work.company}</p>
            <p>{work.position}</p>
            <p>{work.duties}</p>
            <p>{work.startDate}  {work.endDate} </p>
            
        </div>
     )

}