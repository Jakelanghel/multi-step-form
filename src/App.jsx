import { useState } from "react";
import ProgressBar from "./progress-bar/ProgressBar";

import { GlobalStyles } from "./global-styles/GlobalStyles";

import Form from "./form/Form";

function App() {
  const [usrData, setUsrData] = useState({
    currentStep: 0,
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <div className="side-bar">
          <ProgressBar currentStep={usrData.currentStep} className="side-bar" />
        </div>
        <Form currStep={usrData.currentStep} setUsrData={setUsrData} />
      </div>
    </>
  );
}

export default App;
