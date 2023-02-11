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
`;
