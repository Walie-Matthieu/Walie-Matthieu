import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const EpochIslandProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="text-lg font-bold">
          Immersive Metaverse Gaming Experience
        </h4>
        <p>
          EpochIsland is a revolutionary metaverse platform that merges gaming,
          blockchain technology, and digital asset ownership, offering players a
          seamless and immersive experience in a decentralized virtual world.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="text-lg font-bold">
          Stack.ai
        </h4>
        <ul className="list-disc list-inside">
          <li>
            🎮 Frontend: <span className="font-bold">React.js + Three.js</span>
          </li>
          <li>
            🛠 Backend: <span className="font-bold">Node.js + Firebase</span>
          </li>
          <li>
            🔗 Blockchain: <span className="font-bold">Ethereum + IPFS</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <a className="bullet-link" href="https://epochisland.io" target="_blank">
          <span>🌐</span>
          <span className="label">Visit EpochIsland.io</span>
        </a>
      </div>
    </div>
  );
};

export default EpochIslandProject;
