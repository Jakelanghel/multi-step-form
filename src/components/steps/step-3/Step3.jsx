import React, { useState } from "react";
import { StyledStep } from "../shared/styled-step/StyledStep";
import { images } from "../../../constants/images";

const Step3 = () => {
  const [isChecked, setIsChecked] = useState([false, false, false]);

  const toggleCheckMark = (e) => {
    const selected = parseInt(e.target.id);
    setIsChecked((oldState) =>
      oldState.splice(selected, 1, !oldState[selected])
    );
  };

  const addOns = [
    { service: "Online service", price: 1 },
    { service: "Larger storage", price: 2 },
    { service: "Custom profile", price: 2 },
  ];
  return (
    <StyledStep>
      <p className="title">
        Pick add-ons
        <span className="sub-title">
          Add-ons help enhance you gaming experience.
        </span>
      </p>

      <div className="container-flex-1 ">
        {/*  Add on 1 ======================================================= **/}
        <div className="container-flex-item space-between" data-price="1">
          <div
            className="container-check-mark"
            onClick={toggleCheckMark}
            id="0"
          >
            {isChecked[0] ? (
              <img
                src={images.checkMarkIcon}
                alt=""
                onClick={toggleCheckMark}
              />
            ) : null}
          </div>
          <div className="add-on-details">
            <p className="title-2">{addOns[0].service}</p>
            <p className="grey-txt add-on-details">
              Access to multiplayer games
            </p>
          </div>

          <div className="add-on-price">
            <p className="grey-txt-2 add-on-price">+$1/mo</p>
          </div>
        </div>

        {/*  Add on 2 ======================================================= */}
        <div
          className="container-flex-item space-between"
          data-type="larger-storage"
          data-price="2"
        >
          <div
            className="container-check-mark"
            onClick={toggleCheckMark}
            id="1"
          >
            {isChecked[0] ? (
              <img
                src={images.checkMarkIcon}
                alt=""
                onClick={toggleCheckMark}
              />
            ) : null}
          </div>
          <div className="add-on-details">
            <p className="title-2">Larger storage</p>
            <p className="grey-txt add-on-details">Extra 1TB of cloud save</p>
          </div>

          <div className="add-on-price">
            <p className="grey-txt-2 add-on-price">+$1/mo</p>
          </div>
        </div>

        {/*  Add on 3 ======================================================= **/}
        <div
          className="container-flex-item space-between"
          data-type="custom profile"
          data-price="2"
        >
          <div
            className="container-check-mark"
            onClick={toggleCheckMark}
            id="2"
          >
            {isChecked[0] ? (
              <img
                src={images.checkMarkIcon}
                alt=""
                onClick={toggleCheckMark}
              />
            ) : null}
          </div>
          <div className="add-on-details">
            <p className="title-2">Custom profile</p>
            <p className="grey-txt add-on-details">
              Access to multiplayer games
            </p>
          </div>

          <div className="add-on-price">
            <p className="grey-txt-2 add-on-price">+$1/mo</p>
          </div>
        </div>
      </div>
    </StyledStep>
  );
};

export default Step3;
