import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./style.module.css";

export default function Topbar() {
	return (
		<div className={styles.topbar}>
			<div className={styles.name}>
				<Link to="/">
					<h1>HÍCARO</h1>
				</Link>
			</div>
			<Navbar />
		</div>
	);
}
