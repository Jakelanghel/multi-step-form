import React, { useState, useRef } from "react";
import { GlobalStyles } from "./components/shared/Global";

import ProgressBar from "./components/progress-bar/ProgressBar";
import Step1 from "./components/steps/step-1/Step1";
import Step2 from "./components/steps/step-2/Step2";
import Step3 from "./components/steps/step-3/Step3";
import Step4 from "./components/steps/step-4/Step4";
import Step5 from "./components/steps/step-5/Step5";

import FormNavigation from "./components/form-navigation/FormNavigation";
import { plansData } from "./data/plans";
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

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <div className="side-bar">
          <ProgressBar currentStep={currentStep} className="side-bar" />
        </div>
        {currentStep === 1 ? (
          <div className="current-step">
            <Step1 nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef} />
          </div>
        ) : currentStep === 2 ? (
          <div className="current-step">
            <Step2
              setData={setData}
              isYearly={data.isYearly}
              plansData={plansData}
            />
          </div>
        ) : currentStep === 3 ? (
          <div className="current-step">
            <Step3
              setData={setData}
              isYearly={data.isYearly}
              addOnData={addOnData}
              selectedAddOns={data.addOns}
              checkMarkIcon={images.checkMarkIcon}
            />
          </div>
        ) : currentStep === 4 ? (
          <div className="current-step">
            <Step4
              selectedPlan={plansData[data.selectedPlan]}
              selectedAddOns={data.addOns}
              isYearly={data.isYearly}
              setCurrentStep={setCurrentStep}
            />
          </div>
        ) : (
          <div className="current-step">
            <Step5 img={images.thankyouIcon} />
          </div>
        )}

        {currentStep !== 5 ? (
          <div className="form-navigation">
            <FormNavigation
              currentStep={currentStep}
              refArr={[nameRef, emailRef, phoneRef]}
              setCurrentStep={setCurrentStep}
              data={data}
              setData={setData}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
