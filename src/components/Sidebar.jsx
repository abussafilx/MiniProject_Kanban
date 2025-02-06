import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <nav className="sidebar"> 
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>)

}

export default Sidebar