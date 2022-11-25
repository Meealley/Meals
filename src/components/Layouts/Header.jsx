import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Meals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton  onClick={props.onShowCart}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals-img" />
      </div>
    </>
  );
};

export default Header;
