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
  const addEducation = () => {
    const newEducation = { school: "", study: "", date: "" };
    setEducation([...resume.education, newEducation]);
  };

  const setWork = (arr) => setResume({ ...resume, work: arr });
  const addJob = () => {
    const newJob = { company: "", position: "", duties: "", from: "", to: "" };

    setWork([...resume.work, newJob]);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };
  return (
    <div className="container">
      {!isSubmitted ? (
        <div className="left">
          <form onSubmit={handleSubmit}>
            <GeneralInfo data={resume.general} onChange={setGeneral} />

            <EducationInfo
              data={resume.education}
              onChange={setEducation}
              addEducation={addEducation}
            />

            <JobInfo data={resume.work} onChange={setWork} addJob={addJob} />
            <button type="submit" className="submit-btn">
              Generate Resume
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="right">
            <Display resume={resume} />
            <button onClick={handleEdit} className="edit-btn">
              Edit Resume
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
