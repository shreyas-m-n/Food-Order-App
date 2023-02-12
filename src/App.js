import { Fragment } from "react";
import { Header } from "./components/Layout/Header";
import { AvailableMeals } from "./components/Meals/AvailableMeals";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Cart></Cart>
        <AvailableMeals></AvailableMeals>
      </main>
    </Fragment>
    
  );
}

export default App;
