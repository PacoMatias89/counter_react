import { useState } from "react";
import "./App.css";


const App = () => {
  //estados
  const [count, setCount] = useState(0);

  //Funciones handle para los botones
  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickReset = () => {
    setCount(0);
  }

  const handleClickMinus = () => {
    setCount(count - 1);
  }


  //Siempre tenemos que retornar algo, en este caso, será un elemento HTML
  return(
    <>
       <div className="container">
        <h1>Counter: {count}</h1>
        <hr />
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickReset}>Reset</button>
        <button onClick={handleClickMinus}>-</button>
      </div>
    </>
   
  );
};

export default App;