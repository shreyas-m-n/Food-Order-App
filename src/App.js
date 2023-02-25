import { Fragment, useState } from "react";
import { Header } from "./components/Layout/Header";
import { AvailableMeals } from "./components/Meals/AvailableMeals";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showTheCart = ()=> {setShowCart(true)};
  const hideTheCart = ()=> {setShowCart(false)};

  return (
    <Fragment>
      <Header onShowCart= {showTheCart}></Header>
      <main>
        {showCart && <Cart onClose= {hideTheCart}></Cart>}
        <AvailableMeals></AvailableMeals>
      </main>
    </Fragment>
    
  );
}

export default App;
