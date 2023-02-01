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

  .title-2 {
    font-size: 1rem;
    color: var(--marine-blue);
    font-weight: 500;
    text-transform: capitalize;
  }

  .grey-txt {
    color: var(--cool-gray);
    margin: 0.35rem 0;
  }

  .grey-txt-2 {
    font-size: 0.9rem;
    color: var(--purplish-blue);
  }

  .sml-blue-txt {
    font-size: 0.85rem;
    color: var(--marine-blue);
  }

  .container-flex-1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem 0;
  }

  .space-between {
    justify-content: space-between;
  }

  .container-flex-item {
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 1rem;
    border: solid 1px var(--light-gray);
    border-radius: 10px;
    cursor: pointer;
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

  .selected-plan {
    border: solid 2px var(--marine-blue);
  }

  .selected-plan {
    border: solid 1px var(--marine-blue);
    background-color: var(--alabaster);
  }

  .plan-icon {
    align-self: start;
  }

  .plan-price {
    font-size: 0.9rem;
  }

  .monthly,
  .yearly {
    font-size: 0.95rem;
    text-transform: capitalize;
  }

  .yearly {
    color: var(--cool-gray);
  }

  .monthly {
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

  /* STEP-3 =========================================================== */

  .container-check-mark {
    background-color: var(--purplish-blue);
    width: 22px;
    height: 22px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-on-details {
    font-size: 0.85rem;
  }

  .add-on-price {
    font-size: 0.85rem;
  }
`;
