import React, { useRef, useState } from "react";
import "./MealItemForm.css";
import Input from "./Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      
    }
    props.onAddToCart(enteredAmountNumber);
    console.log(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid amount</p>}
    </form>
  );
};

export default MealItemForm;
