import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledProgressBar = styled.div`
  min-width: 100%;
  background-image: url(${images.mobileSidebarBg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 175px;

  .container-steps {
    width: 225px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
  }

  .step,
  .step-detail {
    display: none;
  }

  .step-indicator {
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 50%;
    border: solid 1px var(--white);
  }

  .active {
    background-color: var(--light-blue);
    border: solid 1px var(--light-blue);
    color: var(--marine-blue);
  }

  @media screen and (min-width: 900px) {
    background-image: url(${images.desktopSideBarBg});
    background-size: cover;
    height: 97%;
    border-radius: 15px;
    margin: 4%;

    .container-steps {
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 2rem;
      padding: 3rem 2.5rem;
    }

    .container-step {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .step,
    .step-detail {
      display: block;
      text-transform: uppercase;
      font-size: 1rem;
    }

    .step {
      font-weight: 500;
      color: var(--cool-gray);
      margin-bottom: 0.25rem;
    }

    .step-detail {
      font-weight: 700;
      color: var(--alabaster);
    }
  }
`;
