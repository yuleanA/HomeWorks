import { useCounter } from "./hooks/useCounter";
export const Counter = ({ value }) => {
  const { counter, add, sub, res } = useCounter(value);

  return (
    <>
      <h1> Counter </h1>
      <sapn> {counter} </sapn>
      <button onClick={() => add()}> +1 </button>
      <button onClick={() => sub()}> -1 </button>
      <button onClick={() => res()}> reset </button>
    </>
  );
};

export default Counter;
