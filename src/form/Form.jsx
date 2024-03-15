import { StyledForm } from "./Form.Styled";
import Step1 from "./steps/step-1/Step1";
// import Step2 from "./steps/step-2/Step2";
// import Step3 from "./steps/step-3/Step3";
import PropTypes from "prop-types";
import { useRef } from "react";

const Form = (props) => {
  const { currStep, setUsrData } = props;
  const steps = [Step1];
  const RenderedStep = steps[currStep];

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const refArr = [nameRef, emailRef, phoneRef];

  return (
    <StyledForm>
      <RenderedStep
        refArr={refArr}
        currStep={currStep}
        setUsrData={setUsrData}
      />
    </StyledForm>
  );
};

Form.propTypes = {
  currStep: PropTypes.number.isRequired,
  setUsrData: PropTypes.func.isRequired,
};

export default Form;
