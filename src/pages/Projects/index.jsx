import "./style.css";
import projects from "../../api/projects";

export default function Projects() {
    return <div className="projects">
        {
            projects.map((project, index) => {
                return <a id="project-link" href={project.link} target="_blank">
                    <div id="project" key={index}>
                        <h2 id="project-name">{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                </a>
            })
        }
    </div>;
}