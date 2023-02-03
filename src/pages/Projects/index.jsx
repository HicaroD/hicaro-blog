import projects from "../../api/projects";
import ProjectCard from "./components/ProjectCard";
import style from "./style.module.css";

export default function Projects() {
	return (
		<div className={style.projects}>
			{projects.map((project, index) => {
				return (
					<ProjectCard
						index={index}
						title={project.title}
						description={project.description}
						link={project.link}
					/>
				);
			})}
		</div>
	);
}
