import React from "react";
import { StyledStep } from "../../../components/form/steps/shared/StyledStep";
import Plan from "./plan/Plan";
import { plansData } from "./plan/plans";

const Step2 = (props) => {
  const { setData, data } = props;

  const toggleYearly = () => {
    setData((oldState) => ({
      ...oldState,
      isYearly: !oldState.isYearly,
    }));
  };

  const planElements = plansData.map((p, i) => {
    return (
      <Plan
        key={i}
        index={i}
        plan={p}
        isYearly={data.isYearly}
        setData={setData}
      />
    );
  });
  return (
    <StyledStep>
      <p className="title">
        Select your plan
        <span className="sub-title">
          You have the option of monthly or yearly billing.
        </span>
      </p>

      <div className="container-flex-1 gap-1">{planElements}</div>

      <div className="container-slider">
        <p className="monthly">monthly</p>
        <div className="slider-bg" onClick={toggleYearly}>
          <div
            className={data.isYearly ? "slider slide-right" : "slider"}
          ></div>
        </div>
        <p className="yearly">yearly</p>
      </div>
    </StyledStep>
  );
};

export default Step2;
