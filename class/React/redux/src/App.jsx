// App.jsx
import { useDispatch, useSelector } from 'react-redux';
import { incCount, decCount } from './';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={() => dispatch(incCount())}>
        Increment
      </button>

      <button onClick={() => dispatch(decCount())}>
        Decrement
      </button>
    </div>
  );
}

export default App;