import React, { useState } from "react";
import { StyledStep } from "../shared/StyledStep";
import Plan from "./plan/Plan";

const Step2 = (props) => {
  const { setData, isYearly, plansArr } = props;

  const toggleYearly = () => {
    setData((oldState) => ({
      ...oldState,
      isYearly: !oldState.isYearly,
    }));
  };

  const planElements = plansArr.map((p, i) => {
    return (
      <Plan
        key={i}
        index={i}
        yearlyPrice={p.price.yr}
        monthlyPrice={p.price.mo}
        planType={p.type}
        planImg={p.img}
        isYearly={isYearly}
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
          <div className={isYearly ? "slider slide-right" : "slider"}></div>
        </div>
        <p className="yearly">yearly</p>
      </div>
    </StyledStep>
  );
};

export default Step2;
