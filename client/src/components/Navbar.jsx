import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <h3>Job Placement System</h3>

      <div>
        {role === "student" && <Link to="/student/dashboard">Dashboard</Link>}
        {role === "company" && <Link to="/company/dashboard">Dashboard</Link>}
        {role === "admin" && <Link to="/admin/dashboard">Admin</Link>}
        {!role && <Link to="/">Login</Link>}
        {!role && <Link to="/signup">Signup</Link>}
        {role && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}
