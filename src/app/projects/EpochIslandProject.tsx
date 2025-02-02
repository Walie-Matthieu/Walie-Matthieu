import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const EpochIslandProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="text-lg font-bold">
          The Onchain Silicon Valley
        </h4>
        <ul className="list-disc list-inside">
          <li>Contributed to the Epoch DAO, the first Network State.</li>
          <li>
            Built <span className="font-bold">Fundr</span>, a decentralized
            application to fund builders through staking.
          </li>
          <li>Launched the world's first Initial Time Offering (ITO)</li>
        </ul>
      </div>
      <div className="text-center">
        <a
          className="bullet-link"
          href="https://epochisland.io"
          target="_blank"
        >
          <span>🌐</span>
          <span className="label">Visit EpochIsland.io</span>
        </a>
      </div>
    </div>
  );
};

export default EpochIslandProject;
