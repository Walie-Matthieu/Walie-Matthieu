import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const UpsideWTFProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Stock Market of X
        </h4>
        <p>
          Upside is a dApp to tokenize tweets and bet on bangers. It is like a
          blend between pump.fun, Reddit, and Polymarket.
        </p>
      </div>
      <p>🚀 Upside is currently still in its private beta launching phase.</p>
      <div>
        <h4 style={{ color }} className="box-section-title">
          UpStack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            🎮 Frontend:{" "}
            <span className="font-bold">React.js + MaterialUI</span>
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
        <a className="bullet-link" href="https://upside.wtf" target="_blank">
          <span>🌐</span>
          <span className="label">Visit Upside.wtf</span>
        </a>
      </div>
    </div>
  );
};

export default UpsideWTFProject;
