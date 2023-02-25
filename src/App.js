import { Fragment, useState } from "react";
import { Header } from "./components/Layout/Header";
import { AvailableMeals } from "./components/Meals/AvailableMeals";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/store/contextProvider";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showTheCart = ()=> {setShowCart(true)};
  const hideTheCart = ()=> {setShowCart(false)};

  return (
    <CartProvider>
      <Header onShowCart= {showTheCart}></Header>
      <main>
        {showCart && <Cart onClose= {hideTheCart}></Cart>}
        <AvailableMeals></AvailableMeals>
      </main>
    </CartProvider>
    
  );
}

export default App;
