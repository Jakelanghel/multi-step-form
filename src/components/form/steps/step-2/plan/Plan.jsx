import React, { useRef } from "react";

const Plan = (props) => {
  const { index, plan, isYearly, setData } = props;

  const planRef = useRef();

  const selectPlan = (e) => {
    const planElements = document.querySelectorAll(".selected-plan");
    planElements.forEach((plan) => plan.classList.remove("selected-plan"));
    planRef.current.classList.add("selected-plan");
    const index = planRef.current.dataset;
    setData((oldState) => ({
      ...oldState,
      selectedPlan: parseInt(index.index),
    }));
    console.log("X");
  };

  const price = isYearly ? plan.price.mo : plan.price.yr;
  const priceString = isYearly ? `$${price}/yr` : `$${price}/mo`;

  return (
    <div
      className="container-flex-item"
      onClick={selectPlan}
      data-index={index}
      ref={planRef}
    >
      <img src={plan.img} alt="" className="plan-icon" />
      <div className="container-plan-details">
        <p className="title-2">{plan.type}</p>
        <p className="grey-txt plan-price">{priceString}</p>
        {isYearly ? <p className="sml-blue-txt">2 months free</p> : null}
      </div>
    </div>
  );
};

export default Plan;
