import { FC } from "react";
import RiskophobeProject from "./RiskophobeProject";
import FlashstakeProject from "./FlashstakeProject";
import ArturProject from "./ArturProject";
import UpsideWTFProject from "./UpsideWTFProject";
import EpochIslandProject from "./EpochIslandProject";

export interface ProjectContentProps {
  color: string;
}

interface Project {
  title: string;
  color: string;
  logo: string;
  content: FC<ProjectContentProps>;
}

const projectData: Project[] = [
  {
    title: "Riskophobe",
    logo: "/logos/Riskophobe.png",
    content: RiskophobeProject,
    color: "#6B46C1",
  },
  {
    title: "Flashstake",
    logo: "/logos/Flashstake.png",
    content: FlashstakeProject,
    color: "#FE0094",
  },
  {
    title: "EpochIsland",
    logo: "/logos/Epoch.png",
    content: EpochIslandProject,
    color: "#F1F1F1",
  },
  {
    title: "Artur.ai",
    logo: "/logos/Artur.png",
    content: ArturProject,
    color: "#3C6AF6",
  },
  {
    title: "Upside",
    logo: "/logos/Upside.png",
    content: UpsideWTFProject,
    color: "rgb(149, 255, 217)",
  },
];

export default projectData;
