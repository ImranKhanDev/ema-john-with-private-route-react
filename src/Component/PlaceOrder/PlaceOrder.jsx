import React from "react";
import img from "../../images/giphy.gif";
const PlaceOrder = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>your order is placed </h1>
      <img style={{ width: "340px", height: "350px" }} src={img} alt="" />
    </div>
  );
};

export default PlaceOrder;
