import styled from "styled-components";

export const StyledStepNav = styled.nav`
  width: 100%;
  margin-top: auto;
  background-color: var(--white);
  padding: 1rem;
  display: flex;

  position: absolute;
  bottom: 0;
  .next {
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 0.75rem 1rem;
    color: var(--white);
    background-color: var(--marine-blue);
    border: none;
    border-radius: 3px;
    margin-left: auto;
  }
`;
