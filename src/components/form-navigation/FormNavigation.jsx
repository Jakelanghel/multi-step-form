import React from "react";
import { StyledFormNavigation } from "./FormNavigation.styled";
import { nextStep } from "./functions/nextStep";

const FormNavigation = (props) => {
  const { currentStep, refArr, setCurrentStep, data, setData } = props;

  const removeAddOns = (setData) => {
    setData((oldState) => ({ ...oldState, addOns: [] }));
    setCurrentStep((oldState) => (oldState -= 1));
  };

  const removePlan = (setData) => {
    setData((oldState) => ({
      ...oldState,
      selectedPlan: null,
      addOns: [],
      isYearly: false,
    }));
    setCurrentStep((oldState) => (oldState -= 1));
  };

  const removeAll = (setData) => {
    setData({
      name: null,
      email: null,
      phone: null,
      selectedPlan: null,
      addOns: [],
      isYearly: false,
    });
    setCurrentStep((oldState) => (oldState -= 1));
  };

  const goBack = (setCurrentStep) => {
    currentStep === 4
      ? removeAddOns(setData, setCurrentStep)
      : currentStep === 3
      ? removePlan(setData)
      : currentStep === 2
      ? removeAll(setData)
      : null;
  };
  return (
    <StyledFormNavigation>
      {currentStep > 1 ? (
        <p className="go-back" onClick={() => goBack(setCurrentStep)}>
          go back
        </p>
      ) : null}
      <button
        className="next-btn"
        onClick={() =>
          nextStep(refArr, currentStep, setCurrentStep, setData, data)
        }
      >
        {currentStep === 3 ? "confirm" : "next step"}
      </button>
    </StyledFormNavigation>
  );
};

export default FormNavigation;
