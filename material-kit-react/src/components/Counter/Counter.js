import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slice/counterSlice";

const Counter = ({ cardId }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter);

  return (
    <div className="counter-wrapper">
      <button onClick={() => dispatch(decrement(cardId))}>-</button>
      <h2>{data.id === cardId ? data.count : 0}</h2>
      <button onClick={() => dispatch(increment(cardId))}>+</button>
    </div>
  );
};

export default Counter;
