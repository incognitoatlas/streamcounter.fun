import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, incrementCount] = useState(0);
  const handleSpace= (e) => {
    if (e.keyCode === 32) {
      incrementCount(count+1);
    }
  };

  return (
    <div>
      <div id="buttonClass" className="centered">
      <h1>You have</h1>
      <input id="nameInput" placeholder="Clicked (edit me)" autoFocus></input>
      <h1>{count} times!</h1>
      </div>
      <button className="button1 noselect" onClick={() => incrementCount(count+1)}>Add Count</button>
      <button className="button2 noselect" onClick={() => incrementCount(0)} onKeyDown={handleSpace}>Reset Counter</button>
      
    </div>
  );
}

export default App;