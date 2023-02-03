import styles from "./style.module.css";

export default function ProjectCard({ index, title, description, link }) {
	return (
		<a id={styles.project_link} href={link} target="_blank">
			<div className={styles.project} key={index}>
				<div className="description">
					<h2 id="project-name">{title}</h2>
					<p id="project-description">{description}</p>
				</div>
			</div>
		</a>
	);
}
