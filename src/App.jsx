import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import JobInfo from "./components/JobInfo";
import Display from "./components/Display";
import "./styles/App.css";

function App() {
  const [resume, setResume] = useState({
    general: { name: "", email: "", phone: "" },
    education: [{ school: "", study: "", date: "" }],
    work: [{ company: "", position: "", duties: "", from: "", to: "" }],
  });

  const setGeneral = (obj) => setResume({ ...resume, general: obj });
  const setEducation = (arr) => setResume({ ...resume, education: arr });
  const setWork = (arr) => setResume({ ...resume, work: arr })
  return (
    <div className="container">
      <div className="left">
        <GeneralInfo 
        data={resume.general}
        onChange={setGeneral}/>
        <EducationInfo 
          data={resume.education}
          onChange={setEducation}
          />
        <JobInfo 
          data={resume.work}
          onChange={setWork}
          />
      </div>
      <div className="right">
        <Display resume={resume} />
      </div>
    </div>
  );
}

export default App;
