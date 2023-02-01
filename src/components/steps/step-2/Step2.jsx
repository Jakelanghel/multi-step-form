import React, { useState } from "react";
import { StyledStep } from "../shared/styled-step/StyledStep";
import { images } from "../../../constants/images";

const Step2 = (props) => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleYearly = () => {
    setIsYearly((oldState) => !oldState);
  };

  const getPlan = (e) => {
    const selectedPlan = e.target.id;
    console.log(selectedPlan);
    if (isYearly) {
      if (selectedPlan === "plan1") {
        props.setData((oldState) => ({ ...oldState, price: 90 }));
      } else if (selectedPlan === "plan2") {
        props.setData((oldState) => ({ ...oldState, price: 120 }));
      } else if (selectedPlan === "plan3") {
        props.setData((oldState) => ({ ...oldState, price: 150 }));
      }
    } else {
      if (selectedPlan === "plan1") {
        props.setData((oldState) => ({ ...oldState, price: 9 }));
      } else if (selectedPlan === "plan2") {
        props.setData((oldState) => ({ ...oldState, price: 12 }));
      } else if (selectedPlan === "plan3") {
        props.setData((oldState) => ({ ...oldState, price: 15 }));
      }
    }
  };
  return (
    <StyledStep>
      <p className="title">
        Select your plan
        <span className="sub-title">
          You have the option of monthly or yearly billing.
        </span>
      </p>

      <div className="container-plans" onClick={getPlan}>
        <div className="plan" id="plan1">
          <img src={images.arcadeIcon} alt="" className="plan-icon" />
          <div className="container-plan-details">
            <p className="plan-type">arcade</p>
            <p className="plan-price">{!isYearly ? "$9/mo" : "$90/yr"}</p>
            {isYearly ? <p className="discount">2 months free</p> : null}
          </div>
        </div>

        <div className="plan" id="plan2" onClick={getPlan}>
          <img src={images.advancedIcon} alt="" className="plan-icon" />
          <div className="container-plan-details">
            <p className="plan-type">advanced</p>
            <p className="plan-price">{!isYearly ? "$12/mo" : "$120/yr"}</p>
            {isYearly ? <p className="discount">2 months free</p> : null}
          </div>
        </div>

        <div className="plan" id="plan3" onClick={getPlan}>
          <img src={images.proIcon} alt="" className="plan-icon" />
          <div className="container-plan-details">
            <p className="plan-type">pro</p>
            <p className="plan-price">{!isYearly ? "$15/mo" : "$150/yr"}</p>
            {isYearly ? <p className="discount">2 months free</p> : null}
          </div>
        </div>
      </div>

      <div className="container-slider">
        <p>monthly</p>
        <div className="slider-bg" onClick={toggleYearly}>
          <div className={isYearly ? "slider slide-right" : "slider"}></div>
        </div>
        <p>yearly</p>
      </div>
    </StyledStep>
  );
};

export default Step2;
