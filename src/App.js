// import { addCount, subCount } from "./Store/actions";
import { AddOne, SubOne } from "./Redux/action";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatcher = useDispatch();
  const state = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h2>Counter : {state}</h2>
      <button
        onClick={() => {
          dispatcher(AddOne(1));
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatcher(SubOne(1));
        }}
      >
        Sub
      </button>
    </div>
  );
}
