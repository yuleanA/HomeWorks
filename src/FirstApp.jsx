import { useState } from "react";

const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const subtracts = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1> counter </h1>
      <sapn> {counter} </sapn>
      <button onClick={() => handleAdd()}> +1 </button>
      <button onClick={() => subtracts()}> -1 </button>
      <button onClick={() => reset()}> reset </button>
    </>
  );
};
export default FirstApp;
