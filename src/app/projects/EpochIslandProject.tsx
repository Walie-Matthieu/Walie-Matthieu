import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const EpochIslandProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Onchain Silicon Valley
        </h4>
        <ul className="list-disc list-inside">
          <li>
            Contributed to the Epoch DAO, aiming to create a Network State 🗿
          </li>
          <li>
            Launched the world&lsquo;s first Initial Time Offering (ITO),{" "}
            <b>raising $100k/hour</b> on its first and second phases 📈
          </li>
          <li>
            DAO reached over <b>$7M market cap</b> 🚀
          </li>
          <li>
            Built <i>Fundr</i>, a decentralized application to fund builders
            through staking 💫
          </li>
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
