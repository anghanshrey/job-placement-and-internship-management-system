export default function AuthLayout({ children }) {
  return (
    // page-center provides full-height centering; auth-layout is just a semantic wrapper
    <div className="auth-layout page-center">
      {children}
    </div>
  );
}
