import { connect, useSelector } from "react-redux";
import "./App.css";

function App({increment, decrement, reset }) {
  const numm=useSelector(data=>data.num)
  return (
    <div>
      <p>{numm}</p>
      <button onClick={increment}> Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

const mapStatetoprops = (state) => {
  return { num: state };
}; //useselect on class 
const mapDispatchtoprops = (dispatch) => {
  return {
    increment: () => dispatch({ type: "incrementation" }),
    decrement: () => dispatch({ type: "Decrementer" }),
    reset: () => dispatch({ type: "reset" }),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(App);
