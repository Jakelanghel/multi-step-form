import React, { useState, useRef } from "react";
import Step1 from "./steps/step-1/Step1";
import Step2 from "./steps/step-2/Step2";
import Step3 from "./steps/step-3/Step3";
import Step4 from "./steps/step-4/Step4";
import Step5 from "./steps/step-5/Step5";
import { plansData } from "../../data/plans";
import { addOnData } from "../../data/addOns";
import { images } from "../../constants/images";
import FormNavigation from "../form-navigation/FormNavigation";
import { StyledForm } from "./Form.Styled";

const Form = (props) => {
  const { currentStep, setCurrentStep } = props;

  const [data, setData] = useState({
    name: null,
    email: null,
    phone: null,
    selectedPlan: false,
    addOns: [],
    isYearly: false,
    completed: false,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const stepComponents = [Step1, Step2, Step3, Step4, Step5];
  const StepComponent = stepComponents[currentStep];
  const refArr = [nameRef, emailRef, phoneRef];

  return (
    <StyledForm>
      <StepComponent
        setData={setData}
        isYearly={data.isYearly}
        plansData={plansData}
        addOnData={addOnData}
        selectedAddOns={data.addOns}
        checkMarkIcon={images.checkMarkIcon}
        selectedPlan={plansData[data.selectedPlan]}
        setCurrentStep={setCurrentStep}
        img={images.thankyouIcon}
        nameRef={nameRef}
        emailRef={emailRef}
        phoneRef={phoneRef}
      />
      {!data.completed ? (
        <FormNavigation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          refArr={refArr}
          data={data}
          setData={setData}
        />
      ) : null}
    </StyledForm>
  );
};

export default Form;
