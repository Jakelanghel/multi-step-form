import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        /* Primary  */
        --marine-blue: hsl(213, 96%, 18%);
        --purplish-blue: hsl(243, 100%, 62%);
        --pastel-blue: hsl(228, 100%, 84%);
        --light-blue: hsl(206, 94%, 87%);
        --strawberry-red: hsl(354, 84%, 57%);
        /* Neutral  */
        --cool-gray: hsl(231, 11%, 63%);
        --light-gray: hsl(229, 24%, 87%);
        --magnolia: hsl(217, 100%, 97%);
        --alabaster: hsl(231, 100%, 99%);
        --white: hsl(0, 0%, 100%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Ubuntu", sans-serif;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        font-family: 'Ubuntu', sans-serif;
        background-color: var(--light-gray);   
        
    }

    .container-app {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .form-navigation {
        margin-top: auto;
    }

    @media screen and (min-width: 900px) {

        body {
            background-color: var(--white);
        }
        .container-app {
            display: grid;
            width: 100%;
            overflow: hidden;

            grid-template-areas: 
                "side-bar side-bar side-bar ...... cur-step cur-step cur-step cur-step cur-step cur-step"
                "side-bar side-bar side-bar ...... cur-step cur-step cur-step cur-step cur-step cur-step"
                "side-bar side-bar side-bar ...... cur-step cur-step cur-step cur-step cur-step cur-step"
                "side-bar side-bar side-bar ...... form-nav form-nav form-nav form-nav form-nav form-nav";

            grid-template-columns: repeat(10,  1fr);
            grid-template-rows: repeat(4,  1fr);

            
        }

        .side-bar {
                grid-area: side-bar;
            }

            .current-step {
                grid-area: cur-step;
            }

            .form-navigation {
                grid-area: form-nav;
            }

            
    }

`;
