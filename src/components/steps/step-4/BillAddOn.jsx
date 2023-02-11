import React from "react";

const BillAddOn = (props) => {
  const price = props.isYearly
    ? `+$${props.price.yr}/yr`
    : `+$${props.price.mo}/mo`;

  return (
    <div className="container-bill-item add-on ">
      <div className="col-1">
        <p className="bill-grey-txt">{props.service}</p>
      </div>

      <div className=" col-2">
        <p className="bill-add-on-price">{price}</p>
      </div>
    </div>
  );
};

export default BillAddOn;
