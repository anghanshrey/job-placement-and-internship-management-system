import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import AdminLogin from "./admin/AdminLogin";
import StudentDashboard from "./student/StudentDashboard";
import CompanyDashboard from "./company/CompanyDashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SelectRole from "./auth/SelectRole";
import AdminDashboard from "./admin/AdminDashboard";
import DashboardLayout from "./layouts/DashboardLayout";


function Layout() {
  const location = useLocation();

  // 👇 AUTH PAGES (NO NAVBAR)
  const hideNavbarRoutes = ["/", "/signup", "/admin/login", "/select-role"];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/select-role" element={<SelectRole />} />

        {/* Student */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <DashboardLayout>
                <StudentDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />


        {/* Company */}
<Route
  path="/company/dashboard"
  element={
    <ProtectedRoute role="company">
      <DashboardLayout>
        <CompanyDashboard />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>


        {/* Admin */}
       <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute role="admin">
      <DashboardLayout>
        <AdminDashboard />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
