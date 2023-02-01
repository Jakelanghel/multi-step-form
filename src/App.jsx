import React, { useState, useRef } from "react";
import { GlobalStyles } from "./components/shared/Global";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Step1 from "./components/steps/step-1/Step1";
import Step2 from "./components/steps/step-2/Step2";
import Step3 from "./components/steps/step-3/Step3";
import Step4 from "./components/steps/step-4/Step4";
import FormNavigation from "./components/steps/shared/form-navigation/FormNavigation";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [data, setData] = useState({
    name: null,
    email: null,
    phone: null,
    plan: { annual: false, type: null, price: null, addOns: [] },
  });

  const [currentStep, setCurrentStep] = useState(2);

  const validateName = () => {
    return nameRef.current.value.trim().split(" ").length === 2 ? true : false;
  };

  const validateEmail = () => {
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    return emailRegex.test(emailRef.current.value);
  };

  const validatePhone = () => {
    const res = /^[0-9]+$/.test(phoneRef.current.value);
    if (res) {
      return phoneRef.current.value.length === 10 ? true : false;
    } else {
      return false;
    }
  };

  const removeErrors = (ref, id) => {
    ref.current.classList.remove("error");
    document.getElementById(`${id}`).classList.remove("show-error");
  };

  const checkStep1 = () => {
    const validName = validateName();
    const validEmail = validateEmail();
    const validPhone = validatePhone();
    if (!validName) {
      nameRef.current.classList.add("error");
      document.getElementById("nameError").classList.add("show-error");
    }
    if (!validEmail) {
      emailRef.current.classList.add("error");
      document.getElementById("emailError").classList.add("show-error");
    }

    if (!validPhone) {
      phoneRef.current.classList.add("error");
      document.getElementById("phoneError").classList.add("show-error");
    }
    if (validName && validEmail && validPhone) {
      removeErrors(nameRef, "nameError");
      removeErrors(emailRef, "emailError");
      removeErrors(phoneRef, "phoneError");
      setData((oldState) => ({
        ...oldState,
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      }));
      return true;
    }
  };

  const checkStep2 = () => {
    const selectedPlan = document.querySelector(".selected-plan");
    if (!selectedPlan) {
      return;
    } else {
      let planPrice = parseInt(selectedPlan.dataset.price);
      planPrice = data.plan.annual ? planPrice * 10 : planPrice;
      setData((oldState) => ({
        ...oldState,
        plan: {
          ...oldState.plan,
          price: planPrice,
          type: selectedPlan.dataset.type,
        },
      }));
      return true;
    }
  };

  const nextStep = () => {
    // currentStep === 1 ? checkStep1() : getPlan();
    if (currentStep === 1) {
      const step1 = checkStep1();
      if (step1) {
        setCurrentStep((oldState) => (oldState += 1));
      }
    } else if (currentStep === 2) {
      const step2 = checkStep2();
      if (step2) {
        setCurrentStep((oldState) => (oldState += 1));
      }
    }
  };

  console.log(data);
  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <ProgressBar />
        {currentStep === 1 ? (
          <Step1
            setData={setData}
            nameRef={nameRef}
            emailRef={emailRef}
            phoneRef={phoneRef}
          />
        ) : currentStep === 2 ? (
          <Step2 setData={setData} data={data} />
        ) : currentStep === 3 ? (
          <Step3 setData={setData} />
        ) : (
          <Step4 setData={setData} />
        )}
        <FormNavigation currentStep={currentStep} nextStep={nextStep} />
      </div>
    </>
  );
}

export default App;
