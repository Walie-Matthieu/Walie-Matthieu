import { FC, Fragment } from "react";
import { ProjectContentProps } from "./projectData";

const RiskophobeProject: FC<ProjectContentProps> = ({ color }) => {
  return (
    <Fragment>
      <h4 style={{ color }}>
        Are you a <i>riskophobe</i>?
      </h4>
      Fully designed and developed a platform for crypto users to trade tokens
      with flexibility and reclaim collateral, enhancing risk management. Smart
      contracts in Solidity with hardhat, Subgraph GraphQL, Frontend in Next.js
      with Wagmi and TailwindCSS.
    </Fragment>
  );
};

export default RiskophobeProject;
