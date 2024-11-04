import React from "react";
import { useSelector } from "react-redux";

const Left3 = () => {
  const number = useSelector((state) => state.number);
  console.log(number);
  return (
    <div>
      <h3>Left3: {number}</h3>
    </div>
  );
};

export default Left3;
