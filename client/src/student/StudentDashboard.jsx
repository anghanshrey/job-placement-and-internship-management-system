import { useState } from "react";
import API from "../api/api";
import "./Student.css";

export default function StudentDashboard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    degree: "",
    skills: [],
    github: "",
    linkedin: ""
  });

  const skillsList = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI / ML",
    "Application Developer"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleSkill = (skill) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const submitProfile = async () => {
    try {
      await API.post("/students/profile", form);
      alert("Profile saved successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Error saving profile");
    }
  };

  return (
    <div className="dashboard">
      <h2>Student Profile</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="college" placeholder="College Name" onChange={handleChange} />
      <input name="degree" placeholder="Degree" onChange={handleChange} />

      <h4>Select Skills</h4>
      {skillsList.map(skill => (
        <label key={skill}>
          <input
            type="checkbox"
            onChange={() => toggleSkill(skill)}
          />
          {skill}
        </label>
      ))}

      <input name="github" placeholder="GitHub Profile Link" onChange={handleChange} />
      <input name="linkedin" placeholder="LinkedIn Profile Link" onChange={handleChange} />

      <button onClick={submitProfile}>Save Profile</button>
      <div style={{ color: "white", marginTop: "120px" }}>
        <h1>STUDENT DASHBOARD LOADED</h1>
      </div>
    </div>
  );
}
