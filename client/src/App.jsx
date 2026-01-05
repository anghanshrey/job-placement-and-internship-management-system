import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import StudentDashboard from "./student/StudentDashboard";
import CompanyDashboard from "./company/CompanyDashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SelectRole from "./auth/SelectRole";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Student Protected */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Company Protected */}
        <Route
          path="/company"
          element={
            <ProtectedRoute role="company">
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/dashboard"
          element={
            <ProtectedRoute role="company">
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />



        <Route path="/select-role" element={<SelectRole />} />
      </Routes>
    </BrowserRouter>
  );
}
