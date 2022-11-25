import React, { useContext, useState, useEffect } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setIsbuttonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${"button"} ${
    buttonIsHighlighted === true ? "bump" : " "
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsbuttonIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsbuttonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
