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
            <Link to={{ pathname: "https://drive.google.com/drive/folders/1HEgd8xXOdbcE1ve6Uhzkxa3vlJ06AfjY" }} target="_blank">Resume</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>;
}