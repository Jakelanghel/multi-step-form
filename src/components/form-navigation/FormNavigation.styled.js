import styled from "styled-components";

export const StyledFormNavigation = styled.div`
  width: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: 1.5rem 0;
  padding-right: 1rem;

  .next-btn {
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
    background-color: var(--marine-blue);
    border: none;
    border-radius: 5px;
    margin-left: auto;
    border: none;
    padding: 0.75rem 1rem;
  }

  .go-back {
    text-transform: capitalize;
    font-weight: 600;
    color: var(--cool-gray);
    padding: 1rem;
  }

  .next-btn:hover,
  .go-back:hover {
    cursor: pointer;
  }
`;
