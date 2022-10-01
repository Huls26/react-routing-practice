import { Outlet, Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <Link to={"/"} ><p className="nav--link Home">Home</p></Link>
                <Link to={`posts`}><p className="nav--link Blog">Blog</p></Link>
                <Link to={`contact`}><p className="nav--link Blog">Contact</p></Link>
                <Link to={`about`}><p className="nav--link Blog">About</p></Link>
            </nav>
        </header>
    )
}