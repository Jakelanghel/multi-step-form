import React from "react";
import { StyledStep } from "../shared/StyledStep";

const Step5 = (props) => {
  return (
    <StyledStep>
      <div className="container-thanks">
        <img src={props.img} className="thanks-icon" alt="" />
        <h1 className="thanks-title">Thank you!</h1>
        <p className="thanks-p">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </StyledStep>
  );
};

export default Step5;
