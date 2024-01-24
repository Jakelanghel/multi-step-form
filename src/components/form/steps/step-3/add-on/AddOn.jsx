import React, { useState, useRef } from "react";

const AddOn = (props) => {
  const {
    index,
    addOn,
    setData,
    isYearly,
    checkMarkIcon,
    selectedAddOns,
    addOnData,
  } = props;

  const AddOnRef = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const checkIsSelected = (selectedAddOns, addOnIndex) => {
    return selectedAddOns.every((a) => a.index !== addOnIndex);
  };

  const removeAddon = (setData, addOnIndex) => {
    setData((oldState) => {
      const updatedAddOns = oldState.addOns.filter(
        (a) => a.index !== addOnIndex
      );
      return { ...oldState, addOns: updatedAddOns };
    });
  };

  const addAddOn = (setData, addOnData, addOnIndex) => {
    setData((oldState) => {
      const newAddOn = addOnData[addOnIndex];
      return { ...oldState, addOns: [...oldState.addOns, newAddOn] };
    });
  };

  const toggleCheckMark = (setData, addOnData) => {
    setIsChecked((oldState) => !oldState);
    const addOnIndex = AddOnRef.current.dataset.index;
    const notSelected = checkIsSelected(selectedAddOns, addOnIndex);

    notSelected
      ? addAddOn(setData, addOnData, addOnIndex)
      : removeAddon(setData, addOnIndex);
  };

  const checked = (selectedAddOns, addOnIndex) => {
    const isCheck = selectedAddOns.every((a) => a.index !== addOnIndex);
    console.log(isCheck);
  };

  const addOnPriceString = isYearly
    ? `+$${addOn.price.yr}/yr`
    : `+$${addOn.price.mo}/mo`;

  return (
    <div
      className="container-flex-item space-between"
      onClick={() => toggleCheckMark(setData, addOnData)}
      ref={AddOnRef}
      data-index={index}
    >
      <div className="container-check-mark">
        {isChecked ? <img src={checkMarkIcon} alt="" /> : null}
      </div>
      <div className="add-on-details">
        <p className="title-2">{addOn.service}</p>
        <p className="grey-txt add-on-details">{addOn.details}</p>
      </div>

      <div className="add-on-price">
        <p className="grey-txt-2 add-on-price">{addOnPriceString}</p>
      </div>
    </div>
  );
};

export default AddOn;
