import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Navbar() {
	return (
		<ul className={styles.navbar}>
			<li>
				<Link to="/">Projects</Link>
			</li>
			<li>
				<Link
					to={{
						pathname:
							"https://drive.google.com/drive/folders/1HEgd8xXOdbcE1ve6Uhzkxa3vlJ06AfjY",
					}}
					target="_blank"
				>
					Resume
				</Link>
			</li>
			<li>
				<a href="mailto:hdanrlley1@gmail.com" target="_blank">
					E-mail
				</a>
			</li>
		</ul>
	);
}
