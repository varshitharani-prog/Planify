import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <nav className="navbar">

        <div >
          <img src="/logop.jpeg" alt="Logo" className="logo"/>
        </div>

        <div
          className="hamburger"
          onClick={() => setOpen(true)}
        >
          ☰
        </div>

      </nav>

      {open && (
        <div
          className="overlay"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`sidebar ${open ? "active" : ""}`}
      >

        <span
          className="close"
          onClick={closeMenu}
        >
          ✖
        </span>

        <Link
          className="nav-btn"
          to="/"
          onClick={closeMenu}
        >
          🏠 Home
        </Link>

        <Link
          className="nav-btn"
          to="/progress"
          onClick={closeMenu}
        >
          📈 Progress
        </Link>

        <Link
          className="nav-btn"
          to="/assistant"
          onClick={closeMenu}
        >
          🤖 AI Assistant
        </Link>

        <Link
          className="nav-btn"
          to="/settings"
          onClick={closeMenu}
        >
          ⚙ Settings
        </Link>

        <Link
          className="nav-btn"
          to="/about"
          onClick={closeMenu}
        >
            ℹ  About
        </Link>

      </div>
    </>
  );
}

export default Navbar;