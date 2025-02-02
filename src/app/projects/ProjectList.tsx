import { useState } from "react";
import { Reorder } from "framer-motion";
import ProjectBox from "../components/ProjectBox";
import projectData from "../projects/projectData";

const ProjectList = () => {
  const [projects, setProjects] = useState(projectData);

  return (
    <Reorder.Group axis="y" values={projects} onReorder={setProjects}>
      {projects.map((project, index) => (
        <Reorder.Item key={project.title} value={project} className="cursor-grab active:cursor-grabbing">
          <ProjectBox
            key={project.title}
            index={index}
            title={project.title}
            image={project.logo}
            color={project.color}
            Content={project.content}
          />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default ProjectList;
