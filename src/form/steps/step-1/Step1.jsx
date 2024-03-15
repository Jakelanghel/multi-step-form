import { StyledStep } from "../Step.Styled";
import InputField from "./input-feild/InputFeild";
import PropTypes from "prop-types";
import StepNav from "../step-nav/StepNav";
import check from "./check-functions/index";
import { handleErrors } from "./check-functions/handleErrors";

const Step1 = (props) => {
  const { refArr, currStep, setUsrData } = props;

  const checkStep = () => {
    const nameComplete = check.name(refArr[0]);
    const emailComplete = check.email(refArr[1]);
    const phoneComplete = check.phone(refArr[2]);

    const step1Complete = handleErrors(refArr, [
      nameComplete,
      emailComplete,
      phoneComplete,
    ]);

    if (step1Complete) {
      const name = refArr[0].current.value;
      const email = refArr[1].current.value;
      const phone = refArr[2].current.value;
      setUsrData((oldData) => ({
        ...oldData,
        currentStep: oldData.currentStep + 1,
        name: name,
        email: email,
        phone: phone,
      }));
    }
  };

  return (
    <div className="container-step">
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
          <InputField
            name="name"
            label="name"
            type="text"
            id="nameInput"
            placeholder="e.g Stephen King"
            ref={refArr[0]}
          />

          <InputField
            name="email"
            label="email address"
            type="text"
            id="emailInput"
            placeholder="e.g stephenking@lorem.com"
            ref={refArr[1]}
          />

          <InputField
            name="phone number"
            label="phone number"
            type="tel"
            id="phoneInput"
            placeholder="e.g +1 234 567 8900"
            ref={refArr[2]}
          />
        </form>
      </StyledStep>

      <StepNav currStep={currStep} onClick={checkStep} txt="Next Step" />
    </div>
  );
};

Step1.propTypes = {
  refArr: PropTypes.array.isRequired,
  currStep: PropTypes.number.isRequired,
  setUsrData: PropTypes.func.isRequired,
};

export default Step1;
