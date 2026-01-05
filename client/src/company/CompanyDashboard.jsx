import { useState } from "react";
import API from "../api/api";
import "./Company.css";

export default function CompanyDashboard() {
  const [skills, setSkills] = useState([]);
  const [students, setStudents] = useState([]);

  const skillOptions = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI / ML",
    "Application Developer"
  ];

  const toggleSkill = (skill) => {
    setSkills((prev) =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const searchStudents = async () => {
    if (skills.length === 0) {
      alert("Select at least one skill");
      return;
    }

    const res = await API.get(
      `/students?skills=${skills.join(",")}`
    );

    setStudents(res.data);
  };

  return (
    <div className="dashboard">
      <h2>Company Dashboard</h2>

      <h3>Select Skills</h3>

      {skillOptions.map(skill => (
        <label key={skill}>
          <input
            type="checkbox"
            onChange={() => toggleSkill(skill)}
          />
          {skill}
        </label>
      ))}

      <button onClick={searchStudents}>Search</button>

      <hr />

      <h3>Student Details</h3>

      {students.length === 0 && <p>No students found</p>}

      {students.map(st => (
        <div key={st._id} className="card">
          <h4>{st.name}</h4>
          <p>Email: {st.email}</p>
          <p>College: {st.college}</p>
          <p>Degree: {st.degree}</p>
          <p>Skills: {st.skills.join(", ")}</p>
          <a href={st.github} target="_blank">GitHub</a> |{" "}
          <a href={st.linkedin} target="_blank">LinkedIn</a>
        </div>
      ))}
    </div>
  );
}
