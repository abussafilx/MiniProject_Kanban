import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isCollapsed ? "☰" : "✖"}
            </button>
            <NavLink to="/" className="sidebar-link">
                Home
            </NavLink>
            <NavLink to="/about" className="sidebar-link">
                About
            </NavLink>
            <NavLink to="/newtask" className="sidebar-link">
                Add New Task
            </NavLink>
        </nav>
    );
}

export default Sidebar;
