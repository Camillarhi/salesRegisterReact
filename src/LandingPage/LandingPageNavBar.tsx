import "./landingPagenavbar.css";

export default function NavBar(){
    return(
        <nav className="navbar">
            <span className="navbar_logo">Landing Page</span>
            <ul className="navbar_list">
                <li className="navbar_item">Home</li>
                <li className="navbar_item">Launch</li>
                <li className="navbar_item">Login</li>
            </ul>
        </nav>
    )
}