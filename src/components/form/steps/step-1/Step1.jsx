import React from "react";
import { StyledStep } from "../shared/StyledStep";

const Step1 = (props) => {
  return (
    <StyledStep>
      <label htmlFor="personalInfo" className="title">
        Personal Info
        <span className="sub-title">
          Please provide you name, email address, and phone number.
        </span>
      </label>

      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        id="personalInfo"
      >
        <label htmlFor="nameInput" className="input-label">
          name
          <span className="error-txt" id="nameError">
            This field is required
          </span>
        </label>
        <input
          type="text"
          name="name"
          id="nameInput"
          className="input"
          placeholder="e.g Stephen King"
          ref={props.nameRef}
        />
        <label htmlFor="emailInput" className="input-label">
          email address
          <span className="error-txt" id="emailError">
            This field is required
          </span>
        </label>
        <input
          type="text"
          name="email"
          id="emailInput"
          className="input"
          placeholder="e.g stephenking@lorem.com"
          ref={props.emailRef}
        />

        <label htmlFor="phoneInput" className="input-label">
          phone number
          <span className="error-txt" id="phoneError">
            This field is required
          </span>
        </label>
        <input
          type="tel"
          name="phone"
          id="phoneInput"
          className="input"
          placeholder="e.g +1 234 567 8900"
          ref={props.phoneRef}
        />
      </form>
    </StyledStep>
  );
};

export default Step1;
