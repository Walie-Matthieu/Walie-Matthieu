import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const UpsideWTFProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="text-lg font-bold">
          Decentralized Social Finance Platform
        </h4>
        <p>
          Upside.wtf is an innovative platform that redefines social finance by
          enabling users to invest, trade, and interact in a decentralized and
          community-driven ecosystem powered by blockchain technology.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="text-lg font-bold">
          Stack.ai
        </h4>
        <ul className="list-disc list-inside">
          <li>
            📱 Frontend: <span className="font-bold">React.js + Next.js</span>
          </li>
          <li>
            ⚙️ Backend: <span className="font-bold">Node.js + PostgreSQL</span>
          </li>
          <li>
            🔗 Blockchain: <span className="font-bold">Solana + IPFS</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <a className="bullet-link" href="https://upside.wtf" target="_blank">
          <span>🌐</span>
          <span className="label">Visit Upside.wtf</span>
        </a>
      </div>
    </div>
  );
};

export default UpsideWTFProject;
