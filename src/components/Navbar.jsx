import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = ({ toggleTheme }) => (
  <nav className="navbar">
    <Link to="/">
      <img className="logo" src={logo} alt="App Logo" />
    </Link>
    <h1>Kanban Board</h1>
    <div>
      <span className="dark-mode">Dark Mode</span>
      <label className="theme-switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  </nav>
);

export default Navbar;
