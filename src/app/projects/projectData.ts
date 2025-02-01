import { FC, ReactNode } from "react";
import RiskophobeProject from "./RiskophobeProject";

interface Project {
  title: string;
  color: string;
  logo: string;
  content: FC;
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
];

export default projectData;
