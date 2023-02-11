import { checkStep1 } from "./check-steps/step-1/checkStep1";

export const nextStep = (
  refArr,
  currentStep,
  setCurrentStep,
  setData,
  data
) => {
  if (currentStep === 1) {
    const step1 = checkStep1(refArr, setData);
    step1 ? setCurrentStep((oldState) => (oldState += 1)) : null;
  }
  if (currentStep === 2) {
    data.selectedPlan !== null
      ? setCurrentStep((oldState) => (oldState += 1))
      : null;
  }
  if (currentStep === 3) {
    setCurrentStep((oldState) => (oldState += 1));
  }
  if (currentStep === 4) {
    setCurrentStep((oldState) => (oldState += 1));
  }
};
