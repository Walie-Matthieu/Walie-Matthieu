import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const FlashstakeProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Instant Upfront Yield
        </h4>
        <p>
          Flashstake is a revolutionary DeFi protocol that lets you &quot;time
          travel&quot; your yield, instantly earning rewards upfront instead of
          waiting, turning future returns into immediate liquidity with zero
          delay!
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          Flashstack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            🎮 Frontend:{" "}
            <span className="font-bold">React.js + MaterialUI + Web3Auth</span>
          </li>
          <li>
            🍑 Backend: <span className="font-bold">GraphQL</span>
          </li>
          <li>
            🧠 Smart contracts:{" "}
            <span className="font-bold">Solidity + Hardhat</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <a className="bullet-link" href="https://flashstake.io" target="_blank">
          <span>🌐</span>
          <span className="label">Visit Flashstake.io</span>
        </a>
      </div>
    </div>
  );
};

export default FlashstakeProject;
