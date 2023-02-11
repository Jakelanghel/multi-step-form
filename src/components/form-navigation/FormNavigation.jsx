import React from "react";
import { StyledFormNavigation } from "./FormNavigation.styled";
import { nextStep } from "./functions/nextStep";

const FormNavigation = (props) => {
  return (
    <StyledFormNavigation>
      {props.currentStep > 1 ? <p className="go-back">go back</p> : null}
      <button
        onClick={() =>
          nextStep(
            props.refArr,
            props.currentStep,
            props.setCurrentStep,
            props.setData,
            props.data
          )
        }
      >
        next step
      </button>
    </StyledFormNavigation>
  );
};

export default FormNavigation;
