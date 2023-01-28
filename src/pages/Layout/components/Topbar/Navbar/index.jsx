import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
    return <ul id="navbar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>;
}