import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>Coming Soon</h1>

      <p style={{ marginTop: "1rem", color: "#555" }}>
        We're working on this page.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          background: "#b33125",
          color: "#fff",
          padding: "0.7rem 1rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "800"
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}