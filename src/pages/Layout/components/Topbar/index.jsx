import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./style.css";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="name">
				<Link to="/">
					<h1>HÍCARO</h1>
				</Link>
			</div>
			<Navbar />
		</div>
	);
}
