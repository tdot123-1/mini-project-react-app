import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <NavLink to="/"
            style={({ isActive }) => ({
                color: isActive ? "rgb(4, 4, 186)" :
                "rgb(137, 169, 229)",
                textDecoration: isActive ? "underline" :
                "none"
            })}
            >Home</NavLink>
            <NavLink to="/about"
            style={({ isActive }) => ({
                color: isActive ? "rgb(4, 4, 186)" :
                "rgb(137, 169, 229)",
                textDecoration: isActive ? "underline" :
                "none"
            })}
            >About</NavLink>
        </aside>
    )
}

export default Sidebar;