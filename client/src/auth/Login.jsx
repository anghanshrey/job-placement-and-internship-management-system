import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";
import "./Auth.css";
import AuthLayout from "../layouts/AuthLayout";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // 1️⃣ EMAIL / PASSWORD LOGIN
  // =========================
const login = async () => {
  try {
    setLoading(true);
    const res = await API.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    if (res.data.role === "student") {
      window.location.href = "/student/dashboard";
    } else if (res.data.role === "company") {
      window.location.href = "/company/dashboard";
    } else {
      window.location.href = "/admin/dashboard";
    }
  } catch (err) {
    alert("Invalid login credentials");
  } finally {
    setLoading(false);
  }
};


  // =========================
  // 2️⃣ SOCIAL LOGIN (STEP 2)
  // =========================
  const socialAuth = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);

      // store social user TEMPORARILY
      localStorage.setItem(
        "socialUser",
        JSON.stringify({
          name: result.user.displayName,
          email: result.user.email
        })
      );

      // STEP 2 → role selection page
      window.location.href = "/select-role";
    } catch (error) {
      alert("Social login failed");
    }
  };

  return (
    <AuthLayout>
      <div className="auth-box">
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} disabled={loading}>
  {loading ? "Logging in..." : "Login"}
</button>


        <p className="auth-link">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>

        <hr />

        <p className="auth-link">
          Admin? <Link to="/admin/login">Login here</Link>
        </p>

        <hr />

        {/* SOCIAL ICON BUTTONS */}
        <div className="social-icons">
          <button onClick={() => socialAuth(googleProvider)}>
            <img src="/google.png" alt="Google" />
          </button>

          <button onClick={() => socialAuth(facebookProvider)}>
            <img src="/facebook.png" alt="Facebook" />
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
