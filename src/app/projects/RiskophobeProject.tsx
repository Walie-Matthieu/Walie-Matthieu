import { FC } from "react";
import { ProjectContentProps } from "./projectData";

const RiskophobeProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <div className="text-start space-y-6 font-medium text-inherit">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Are you a <i>riskophobe</i>?
        </h4>
        <p>
          Then this dApp is for you! Simply put, Riskophobe allows you to buy a
          token with the ability to return it and get your money back, within a
          certain timeframe. That way, you&lsquo;ll sleep better at night.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Stack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            🎮 Frontend:{" "}
            <span className="font-bold">Next.js + TailwindCSS + Wagmi</span>
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
      <p>
        The best part? It&lsquo;s <b>100% made by Benjamin Azoulay</b> (your
        humble servant), and <b>100% open-source</b> 🤗
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-start lg:justify-items-center">
        <a
          className="bullet-link"
          href="https://riskophobe.com"
          target="_blank"
        >
          <span>🌐</span>
          <span className="label">Visit Riskophobe.com</span>
        </a>
        <a
          className="bullet-link"
          href="https://github.com/BenAzlay/riskophobe-frontend"
          target="_blank"
        >
          <span>👀</span>
          <span className="label">Fontend code</span>
        </a>
        <a
          className="bullet-link"
          href="https://github.com/BenAzlay/riskophobe-contracts"
          target="_blank"
        >
          <span>🧠</span>
          <span className="label">Contracts code</span>
        </a>
        <a
          className="bullet-link"
          href="https://github.com/BenAzlay/riskophobe-backend"
          target="_blank"
        >
          <span>🍑</span>
          <span className="label">Backend code</span>
        </a>
      </div>
    </div>
  );
};

export default RiskophobeProject;
