import React from "react";
import { StyledProgressBar } from "./ProgressBar.Styled";

const ProgressBar = () => {
  return (
    <StyledProgressBar>
      <div className="container-steps">
        <div className="container-step">
          <p className="step-indicator">1</p>
          <div className="container">
            <p className="step">step 1</p>
            <p className="step-detail">your info</p>
          </div>
        </div>

        <div className="container-step">
          <p className="step-indicator">2</p>
          <div className="container">
            <p className="step">step 2</p>
            <p className="step-detail">select plan</p>
          </div>
        </div>

        <div className="container-step">
          <p className="step-indicator">3</p>
          <div className="container">
            <p className="step">step 3</p>
            <p className="step-detail">add ons</p>
          </div>
        </div>

        <div className="container-step">
          <p className="step-indicator">4</p>
          <div className="container">
            <p className="step">step 4</p>
            <p className="step-detail">summary</p>
          </div>
        </div>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
