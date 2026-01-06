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
        ? prev.filter((s) => s !== skill)
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

  const saveCompanyProfile = async () => {
    await API.post("/company/profile", {
      companyName: "Facebook Pvt Ltd",
      requiredSkills: skills
    });
    alert("Company profile saved");
  };

  return (
    <div className="company-page">
      <div className="company-card">

        <h2>Company Dashboard</h2>

        {/* SKILLS */}
        <h3>Select Required Skills</h3>
        <div className="skills-grid">
          {skillOptions.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                checked={skills.includes(skill)}
                onChange={() => toggleSkill(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        <button className="search-btn" onClick={searchStudents}>
          Search Students
        </button>

        <hr />

        {/* STUDENTS */}
        <h3>Student Details</h3>

        {students.length === 0 ? (
  <p className="empty-text">No students found</p>
) : (
  <div className="table-wrapper">
    <table className="students-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>College</th>
          <th>Degree</th>
          <th>Skills</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {students.map((st) => (
          <tr key={st._id}>
            <td>{st.name}</td>
            <td>{st.email}</td>
            <td>{st.college}</td>
            <td>{st.degree}</td>
            <td>{st.skills.join(", ")}</td>
            <td>
              <a href={st.github} target="_blank">GitHub</a> |{" "}
              <a href={st.linkedin} target="_blank">LinkedIn</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


        <button className="save-btn" onClick={saveCompanyProfile}>
          Save Company Profile
        </button>

      </div>
    </div>
  );
}
