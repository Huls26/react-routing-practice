import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav-container">
            <ul>
                <li className="nav-link Home"><Link to={"/"}>Home</Link></li>
                <li className="nav-link Blog"><Link to={"posts"}>Blog</Link></li>
            </ul>
        </nav>
    )
}