import React, { useState } from "react";
import { StyledStep } from "../shared/styled-step/StyledStep";
import { images } from "../../../constants/images";

const Step2 = (props) => {
  const isYearly = props.data.plan.annual;
  const selectPlan = (e) => {
    const plans = document.querySelectorAll(".selected-plan");
    plans.forEach((plan) => plan.classList.remove("selected-plan"));
    e.target.classList.add("selected-plan");
    const planId = e.target.id;
  };

  const toggleYearly = () => {
    props.setData((oldState) => ({
      ...oldState,
      plan: { annual: !oldState.plan.annual },
    }));
  };

  return (
    <StyledStep>
      <p className="title">
        Select your plan
        <span className="sub-title">
          You have the option of monthly or yearly billing.
        </span>
      </p>

      <div className="container-flex-1">
        <div
          className="container-flex-item"
          data-type="arcade"
          data-price="9"
          onClick={selectPlan}
        >
          <img src={images.arcadeIcon} alt="" className="plan-icon" />
          <div className="container-plan-details">
            <p className="title-2">arcade</p>
            <p className="grey-txt plan-price">
              {!isYearly ? "$9/mo" : "$90/yr"}
            </p>
            {isYearly ? <p className="sml-blue-txt">2 months free</p> : null}
          </div>
        </div>

        <div
          className="container-flex-item"
          data-type="advanced"
          data-price="12"
          onClick={selectPlan}
        >
          <img src={images.advancedIcon} alt="" className="plan-icon" />
          <div className="container-plan-details">
            <p className="title-2">advanced</p>
            <p className="grey-txt plan-price">
              {!isYearly ? "$12/mo" : "$120/yr"}
            </p>
            {isYearly ? <p className="sml-blue-txt">2 months free</p> : null}
          </div>
        </div>

        <div
          className="container-flex-item"
          data-type="pro"
          data-price="15"
          onClick={selectPlan}
        >
          <img src={images.proIcon} alt="" className="plan-icon" />
          <div className="container-plan-details">
            <p className="title-2">pro</p>
            <p className="grey-txt plan-price">
              {!isYearly ? "$15/mo" : "$150/yr"}
            </p>
            {isYearly ? <p className="sml-blue-txt">2 months free</p> : null}
          </div>
        </div>
      </div>

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
