import { Fragment } from "react";
import { Header } from "./components/Layout/Header";
import { AvailableMeals } from "./components/Meals/AvailableMeals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <AvailableMeals></AvailableMeals>
      </main>
    </Fragment>
    
  );
}

export default App;
