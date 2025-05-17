export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a73e8",
        color: "white",
        textAlign: "center",
        padding: "1rem 2rem",
        position: "sticky",
        bottom: 0,
        width: "100%",
        boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
      </p>
    </footer>
  );
}
