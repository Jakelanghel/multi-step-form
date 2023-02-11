import React from "react";
import { nanoid } from "nanoid";
import { StyledStep } from "../shared/StyledStep";
import BillAddOn from "./BillAddOn";

const Step4 = (props) => {
  console.log(props.selectedPlan);
  const getPlanPrice = (plan, isYearly) => {
    const price = isYearly ? plan.price.yr : plan.price.mo;
    return `$${price}/${isYearly ? "yr" : "mo"}`;
  };

  const getPlanType = (plan, isYearly) => {
    return `${plan.type} (${isYearly ? "yearly" : "monthly"})`;
  };

  const getTotal = (plan, arr, isYearly) => {
    let price = isYearly ? plan.price.yr : plan.price.mo;
    arr.forEach((addOn) => {
      isYearly ? (price += addOn.price.yr) : (price += addOn.price.mo);
    });
    return props.isYearly ? `+$${price}/yr` : `+$${price}/mo`;
  };

  const planString = getPlanType(props.selectedPlan, props.isYearly);
  const priceString = getPlanPrice(props.selectedPlan, props.isYearly);
  const totalString = getTotal(
    props.selectedPlan,
    props.selectedAddOns,
    props.isYearly
  );

  const addOnElements = props.selectedAddOns.map((a) => {
    return (
      <BillAddOn
        key={nanoid()}
        service={a.service}
        price={a.price}
        isYearly={props.isYearly}
      />
    );
  });

  return (
    <StyledStep>
      <p className="title">
        Finishing up
        <span className="sub-title">
          Double-check everything looks Ok before confirming.
        </span>
      </p>

      <div className="container-plan-summary">
        <div className="container-bill-item plan ">
          <div className="bill-col-1 col-1">
            <p className="bill-plan-type">{planString}</p>
            <button className="change-plan-btn">change</button>
          </div>

          <div className="col-2">
            <p className="bill-plan-price">{priceString}</p>
          </div>
        </div>

        <div className="container-add-ons">
          {props.selectedAddOns.length > 0 ? addOnElements : null}
        </div>
      </div>

      <div className="container-bill-item total">
        <p className="bill-grey-txt">
          {`total (per ${props.isYearly ? "year" : "month"})`}
        </p>
        <p className="total-price">{totalString}</p>
      </div>
    </StyledStep>
  );
};

export default Step4;
