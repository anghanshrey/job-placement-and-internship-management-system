import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email/Password Login
  const login = async () => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    window.location.href =
      res.data.role === "student"
        ? "/student/dashboard"
        : res.data.role === "company"
        ? "/company/dashboard"
        : "/admin/dashboard";
  };

  // Google / Facebook Login
  const socialAuth = async (provider) => {
    const result = await signInWithPopup(auth, provider);

    localStorage.setItem(
      "socialUser",
      JSON.stringify({
        name: result.user.displayName,
        email: result.user.email
      })
    );

    window.location.href = "/select-role";
  };

  return (
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

      {/* ONLY ONE LOGIN BUTTON */}
      <button onClick={login}>Login</button>

      <p className="auth-link">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>

      <hr />

      <button onClick={() => socialAuth(googleProvider)}>
        Login with Google
      </button>

      <button onClick={() => socialAuth(facebookProvider)}>
        Login with Facebook
      </button>
    </div>
  );
}
