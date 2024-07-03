import logo from "../assets/png/logo-1.png"


const Navbar = () => {
    return (
        <nav className="nav-bar">
            <h3>ToMiD Accommodation</h3>
            <img src={logo} alt="app logo" className="app-logo"/>
        </nav>
    )
}

export default Navbar;