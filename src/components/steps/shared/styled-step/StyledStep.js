import styled from "styled-components";

export const StyledStep = styled.main`
  width: 90%;
  position: absolute;
  top: 107px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);

  .title {
    font-size: 1.75rem;
    font-weight: 700;
  }

  .sub-title {
    display: block;
    font-size: 1rem;
    font-weight: 300;
    color: var(--cool-gray);
    margin: 0.75rem 0;
    line-height: 1.5rem;
  }

  /* STEP-1 =========================================================== */
  .input-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.95rem;
    font-weight: 300;
    color: var(--marine-blue);
    text-transform: capitalize;
  }

  .error-txt {
    font-size: 0.85rem;
    color: var(--strawberry-red);
    opacity: 0;
  }

  .show-error {
    opacity: 1;
  }

  .input::placeholder {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--cool-gray);
  }

  .input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: solid 2px var(--light-gray);
    margin-bottom: 1rem;
  }

  .error {
    border: solid 2px var(--strawberry-red);
  }

  /* STEP-2 =========================================================== */

  .container-plans {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .plan {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border: solid 1px var(--light-gray);
    border-radius: 10px;
  }

  .plan-icon {
    align-self: start;
  }

  .plan-type {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1rem;
  }

  .plan-price {
    font-size: 0.95rem;
    color: var(--cool-gray);
    margin: 0.25rem 0;
  }

  .discount {
    font-size: 0.85rem;
    color: var(--marine-blue);
  }

  .container-slider {
    margin-top: 1rem;
    background-color: var(--alabaster);
    padding: 1rem;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .slider-bg {
    width: 50px;
    height: 25px;
    background-color: var(--marine-blue);
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 5px;
  }

  .slider-bg:hover {
    cursor: pointer;
  }

  .slider {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--white);
  }

  .slide-right {
    margin-left: auto;
  }
`;
