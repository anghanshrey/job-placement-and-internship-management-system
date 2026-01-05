import API from "../api/api";

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
      role === "student" ? "/student" : "/company";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Select Your Role</h2>

      <button onClick={() => chooseRole("student")}>
        Student
      </button>

      <button onClick={() => chooseRole("company")}>
        Company
      </button>
    </div>
  );
}
