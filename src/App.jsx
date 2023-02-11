import React, { useState, useRef } from "react";
import { GlobalStyles } from "./components/shared/Global";

import ProgressBar from "./components/progress-bar/ProgressBar";
import Step1 from "./components/steps/step-1/Step1";
import Step2 from "./components/steps/step-2/Step2";
import Step3 from "./components/steps/step-3/Step3";
import Step4 from "./components/steps/step-4/Step4";
import FormNavigation from "./components/form-navigation/FormNavigation";
import { plans } from "./data/plans";
import { addOnData } from "./data/addOns";

import { images } from "./constants/images";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [data, setData] = useState({
    name: null,
    email: null,
    phone: null,
    selectedPlan: null,
    addOns: [],
    isYearly: false,
  });

  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <ProgressBar />
        {currentStep === 1 ? (
          <Step1 nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} />
        ) : currentStep === 2 ? (
          <Step2
            setData={setData}
            // data={data}
            isYearly={data.isYearly}
            plansArr={plans}
          />
        ) : currentStep === 3 ? (
          <Step3
            setData={setData}
            isYearly={data.isYearly}
            addOnData={addOnData}
            selectedAddOns={data.addOns}
            checkMarkIcon={images.checkMarkIcon}
          />
        ) : (
          <Step4
            plans={plans}
            addOnData={addOnData}
            selectedPlan={plans[data.selectedPlan]}
            selectedAddOns={data.addOns}
            isYearly={data.isYearly}
          />
        )}
        <FormNavigation
          currentStep={currentStep}
          refArr={[nameRef, emailRef, phoneRef]}
          setCurrentStep={setCurrentStep}
          data={data}
          setData={setData}
        />
      </div>
    </>
  );
}

export default App;
