import React from "react";
import Business from "./Business";
let businessArr = [];
for (let i = 0; i < 10;i++){
  businessArr.push(Business);
}

function BusinessList() {
  businessArr = businessArr.map((business) => <div>{business}</div>);
  return (
    <div>{businessArr}</div>
  );
}

export default BusinessList;