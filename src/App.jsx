import React, { useState, useRef } from "react";
import { GlobalStyles } from "./components/shared/Global";

import ProgressBar from "./components/progress-bar/ProgressBar";
import FormNavigation from "./components/form-navigation/FormNavigation";
import Form from "./components/form/Form";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <div className="side-bar">
          <ProgressBar currentStep={currentStep} className="side-bar" />
        </div>
        <Form
          className="current-step"
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </>
  );
}

export default App;
