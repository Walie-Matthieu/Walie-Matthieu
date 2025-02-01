import { FC } from "react";
import RiskophobeProject from "./RiskophobeProject";
import FlashstakeProject from "./FlashstakeProject";

export interface ProjectContentProps {
  color: string;
}

interface Project {
  title: string;
  color: string;
  logo: string;
  content: FC<ProjectContentProps>;
  link: string;
}

const projectData: Project[] = [
  {
    title: "Riskophobe",
    logo: "/logos/Riskophobe.png",
    content: RiskophobeProject,
    link: "https://riskophobe.com/",
    color: "#6B46C1",
  },
  {
    title: "Flashstake",
    logo: "/logos/Flashstake.png",
    content: FlashstakeProject,
    link: "https://flashstake.io/",
    color: "#FE0094",
  },
];

export default projectData;
