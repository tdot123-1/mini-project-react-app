import Logo from "../assets/png/logo-1.png"


const Navbar = () => {
    return (
        <nav className="nav-bar">
            <h3>App Name</h3>
            <img src={Logo} alt="app logo" className="app-logo"/>
        </nav>
    )
}

export default Navbar;