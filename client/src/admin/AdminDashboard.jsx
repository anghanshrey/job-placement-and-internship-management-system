import { useEffect, useState } from "react";
import API from "../api/api";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/admin/students").then(res => setStudents(res.data));
    API.get("/admin/companies").then(res => setCompanies(res.data));
    API.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <h3>All Users (Login Details)</h3>
      {users.map(u => (
        <p key={u._id}>
          {u.name || "N/A"} | {u.email || "N/A"} | {u.role}
        </p>
      ))}

      <h3>Students</h3>
      {students.map(s => (
        <p key={s._id}>
          {s.name} | {s.email} | {s.skills.join(", ")}
        </p>
      ))}

      <h3>Companies</h3>

      {companies.length === 0 && <p>No companies found</p>}

      {companies.map(c => (
        <p key={c._id}>
            {c.companyName} | {c.email} | {c.requiredSkills.join(", ")}
        </p>
      ))}

    </div>
  );
}
