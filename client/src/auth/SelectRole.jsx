import API from "../api/api";
import "./SelectRole.css";

export default function SelectRole() {
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const chooseRole = async (role) => {
    const res = await API.post("/auth/social-login", {
      name: socialUser.name,
      email: socialUser.email,
      role
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    localStorage.removeItem("socialUser");

    window.location.href =
      role === "student" ? "/student/dashboard" : "/company/dashboard";
  };

  return (
    <div className="role-page">
      <div className="role-card">
        <h2>Select Your Role</h2>

        <button
          className="role-btn student"
          onClick={() => chooseRole("student")}
        >
          🎓 Student
        </button>

        <button
          className="role-btn company"
          onClick={() => chooseRole("company")}
        >
          🏢 Company
        </button>
      </div>
    </div>
  );
}
