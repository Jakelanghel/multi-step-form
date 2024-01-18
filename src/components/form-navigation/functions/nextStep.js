import { checkStep1 } from "./checkStep1";

export const nextStep = (
  refArr,
  currentStep,
  setCurrentStep,
  setData,
  data,
  setCompleted
) => {
  if (currentStep === 0) {
    const step1 = checkStep1(refArr, setData);
    step1 ? setCurrentStep((oldState) => (oldState += 1)) : null;
  }
  if (currentStep === 1) {
    data.selectedPlan !== null
      ? setCurrentStep((oldState) => (oldState += 1))
      : null;
  }
  if (currentStep === 2) {
    setCurrentStep((oldState) => (oldState += 1));
  }
  if (currentStep === 3) {
    setCurrentStep((oldState) => (oldState += 1));
  }
};
