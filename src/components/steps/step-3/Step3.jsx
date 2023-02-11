import React, { useState } from "react";
import { StyledStep } from "../shared/StyledStep";
import AddOn from "./add-on/AddOn";

const Step3 = (props) => {
  const { setData, isYearly, addOnData, selectedAddOns, checkMarkIcon } = props;

  const addOnElements = addOnData.map((a, i) => {
    const planPriceString = isYearly
      ? `+$${a.price.yr}/yr`
      : `+$${a.price.mo}/mo`;
    return (
      <AddOn
        key={i}
        index={i}
        setData={setData}
        service={a.service}
        details={a.details}
        planPriceString={planPriceString}
        checkMarkIcon={checkMarkIcon}
        selectedAddOns={selectedAddOns}
        addOnData={addOnData}
      />
    );
  });

  return (
    <StyledStep>
      <p className="title">
        Pick add-ons
        <span className="sub-title">
          Add-ons help enhance you gaming experience.
        </span>
      </p>

      <div className="container-flex-1 gap-1">{addOnElements}</div>
    </StyledStep>
  );
};

export default Step3;
