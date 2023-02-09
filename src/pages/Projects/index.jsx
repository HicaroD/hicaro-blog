import projects from "../../api/projects";
import Project from "./components/Project";
import styles from "./style.module.css";

export default function Projects() {
	const getProjects = () => {
		return projects.map(({ title, link, description }, index) => (
			<li key={index}>
				<Project title={title} link={link} description={description} />
			</li>
		));
	};

	return (
		<div className={styles.projects}>
			<h1>Projects I've authored:</h1>
			<ul>{getProjects()}</ul>
		</div>
	);
}
