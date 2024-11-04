import React from "react";
import { useDispatch } from "react-redux";

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Right3</h3>
      {/* <button onClick={() => props.onIncrease()}>+</button> */}

      <button
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      >
        +
      </button>
    </div>
  );
};

export default Right3;
