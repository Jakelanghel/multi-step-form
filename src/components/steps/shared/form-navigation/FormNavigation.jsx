import React from "react";
import { StyledFormNavigation } from "./FormNavigation.styled";

const FormNavigation = (props) => {
  return (
    <StyledFormNavigation>
      {props.currentStep > 1 ? <p className="go-back">go back</p> : null}
      <button onClick={props.nextStep}>next step</button>
    </StyledFormNavigation>
  );
};

export default FormNavigation;
