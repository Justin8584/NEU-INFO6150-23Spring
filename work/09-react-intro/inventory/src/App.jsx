import './App.css';
import { useState } from "react";
import Reorder from './Reorder';

function App() {

  const [cot, setCot] = useState(0);

  const addOneCot = () => {
    setCot(cot + 1);
  };
  const subtractOneCot = () => {
    if (cot > 0) {
      setCot(cot - 1);
    }
  };

  const onReorder = () => {
    setCot(cot + 5);
  };

  return (
    <div className="app">
      <h1>Counting Num: {cot}</h1>
      <button className='add-button' onClick={addOneCot}>+ 1</button>
      <button className='subtract-button' onClick={subtractOneCot} disabled={!cot}>- 1</button>

      {cot === 0 ? <Reorder onReorder={onReorder} /> : null}
      {/* {cot === 0 && <Reorder onReorder={onReorder} />} */}

    </div>
  );
}

export default App;
