import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#1a73e8",
        color: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        <li>
          <Link href="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/posts" style={linkStyle}>
            Posts
          </Link>
        </li>
        <li>
          <Link href="/about" style={linkStyle}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1.1rem",
  transition: "color 0.3s ease",
  cursor: "pointer",
};
