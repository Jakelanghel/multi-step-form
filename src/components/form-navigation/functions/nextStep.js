import { checkStep1 } from "./checkStep1";

export const nextStep = (
  refArr,
  currentStep,
  setCurrentStep,
  setData,
  data
) => {
  let noErrors = false;

  if (currentStep === 0) {
    noErrors = checkStep1(refArr, setData);
  }
  if (currentStep === 1) {
    noErrors = data.selectedPlan;
  }
  if (noErrors) {
    setCurrentStep((oldState) => (oldState += 1));
  }
};
