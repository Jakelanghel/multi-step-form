import React from "react";
import AddOn from "./add-on/AddOn";
import { StyledStep } from "../shared/StyledStep";
import { addOnData } from "./add-on/addOns";
import { images } from "../../../../constants/images";

const Step3 = (props) => {
  const { setData, isYearly, selectedAddOns } = props;

  const addOnElements = addOnData.map((a, i) => {
    return (
      <AddOn
        key={i}
        index={i}
        addOn={a}
        setData={setData}
        isYearly={isYearly}
        checkMarkIcon={images.checkMarkIcon}
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
