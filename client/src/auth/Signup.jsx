import { useState } from "react";
import API from "../api/api";
import "./auth.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  const signup = async () => {
    await API.post("/auth/signup", form);
    alert("Signup successful");
    window.location.href = "/";
  };

  return (
    <div className="auth-card">
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})}/>

      <select onChange={e => setForm({...form, role:e.target.value})}>
        <option value="student">Student</option>
        <option value="company">Company</option>
      </select>

      <button onClick={signup}>Signup</button>
    </div>
  );
}
