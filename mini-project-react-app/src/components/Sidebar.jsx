import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <NavLink to="/"
            style={({ isActive }) => ({
                color: isActive ? "red" :
                "blue"
            })}
            >Home</NavLink>
            <NavLink to="/about"
            style={({ isActive }) => ({
                color: isActive ? "red" :
                "blue"
            })}
            >About</NavLink>
        </aside>
    )
}

export default Sidebar;