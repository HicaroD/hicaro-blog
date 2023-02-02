import projects from "../../api/projects";
import ProjectCard from "./components/ProjectCard";
import "./style.css";

export default function Projects() {
	return (
		<div className="projects">
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
