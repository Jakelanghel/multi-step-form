import React, { useState, useRef } from "react";
import { GlobalStyles } from "./components/shared/Global";

import ProgressBar from "./components/progress-bar/ProgressBar";
import FormNavigation from "./components/form-navigation/FormNavigation";
import Form from "./components/form/Form";

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

  const [currentStep, setCurrentStep] = useState(0);

  const [completed, setCompleted] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <div className="side-bar">
          <ProgressBar currentStep={currentStep} className="side-bar" />
        </div>
        <Form
          className="current-step"
          nameRef={nameRef}
          emailRef={emailRef}
          phoneRef={phoneRef}
          setData={setData}
          data={data}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        {!completed ? (
          <div className="form-navigation">
            <FormNavigation
              currentStep={currentStep}
              refArr={[nameRef, emailRef, phoneRef]}
              setCurrentStep={setCurrentStep}
              data={data}
              setData={setData}
              setCompleted={setCompleted}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
