import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Dashboard</h3>

      <nav>
        {role === "student" && (
          <NavLink to="/student/dashboard">Profile</NavLink>
        )}

        {role === "company" && (
          <>
            <NavLink to="/company/dashboard">Students</NavLink>
          </>
        )}

        {role === "admin" && (
          <NavLink to="/admin/dashboard">Admin Panel</NavLink>
        )}
      </nav>
    </aside>
  );
}
