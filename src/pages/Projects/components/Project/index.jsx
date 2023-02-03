import styles from "./style.module.css";

export default function Project({ title, link, description }) {
	return (
		<p className={styles.project}>
			<a className={styles.project_link} href={link}>
				{title}
			</a>
			{" "}{description}
		</p>
	);
}
