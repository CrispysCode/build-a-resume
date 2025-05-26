import React from "react";

export default function Display({ resume }) {
   const { general, education, work } = resume;
     return (
        <div className="display">
            
            <h2>General Information</h2>
            <p>{general.name}</p>
            <p>{general.phone}</p>
            <p>{general.email}</p>

            <h2>Education Information</h2>
            <p></p>
        </div>
     )

}