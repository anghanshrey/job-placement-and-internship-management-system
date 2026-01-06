import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        style={{
          marginLeft: "220px",
          padding: "30px",
          width: "100%",
          minHeight: "100vh",
          background: "#1e1e1e"
        }}
      >
        {children}
      </main>
    </div>
  );
}
