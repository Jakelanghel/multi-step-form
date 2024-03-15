import { StyledStepNav } from "./StepNav.Styled";
import PropTypes from "prop-types";

const StepNav = (props) => {
  const { currStep, txt, onClick } = props;

  const nxtClassName = txt === "Next Step" ? "next" : "confirm";

  return (
    <StyledStepNav>
      {currStep !== 0 ? <button className="back">Go Back</button> : null}
      <button className={`${nxtClassName}`} onClick={onClick}>
        {txt}
      </button>
    </StyledStepNav>
  );
};

StepNav.propTypes = {
  currStep: PropTypes.number.isRequired,
  txt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StepNav;
