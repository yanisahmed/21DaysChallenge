import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  reset,
} from "./redux/features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="h-16">{count}</div>
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="bg-sky-500 hover:bg-sky-700 text-white rounded-2xl p-2 w-48 me-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-green-500 hover:bg-green-700 text-white rounded-2xl p-2 w-48 me-2"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-red-500 hover:bg-red-700 text-white rounded-2xl p-2 w-48"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
