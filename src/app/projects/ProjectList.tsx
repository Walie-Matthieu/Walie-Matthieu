import { useState } from "react";
import { Reorder } from "framer-motion";
import ProjectBox from "../components/ProjectBox";
import projectData from "../projects/projectData";
import useIsMobile from "../useIsMobile";

const ProjectList = () => {
  const isMobile = useIsMobile();
  const [projects, setProjects] = useState(projectData);

  return (
    <Reorder.Group
      axis={"y"}
      values={projects}
      onReorder={setProjects}
      className="justify-self-center"
    >
      {projects.map((project, index, self) => (
        <Reorder.Item
          drag={!isMobile}
          key={project.title}
          value={project}
          className="cursor-grab active:cursor-grabbing"
          whileTap={
            isMobile
              ? {
                  marginTop: index > 0 ? 32 : 0,
                  marginBottom: index < self.length - 1 ? 32 : 0,
                }
              : {}
          }
        >
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
