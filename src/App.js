import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = (props) => {
  const [cartIShown, setCartIsShown] = useState(false)

const showCartHandler =() => {
  setCartIsShown(true)
}
const hideCartHandler = () => {
  setCartIsShown(false)
}

  return (
    <CartProvider>
      {cartIShown && <Cart onHideCart = {hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
};

export default App;
