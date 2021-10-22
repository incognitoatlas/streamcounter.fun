import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, incrementCount] = useState(0);

  return (
    <div>
      <div id="buttonClass" className="centered">
      <h1>You have</h1>
      <input id="nameInput" placeholder="Click me to edit!" autoFocus></input>
      <h1>{count} times!</h1>
      </div>
      <button className="button1 noselect" onClick={() => incrementCount(count+1)}>Add Count</button>
    </div>
  );
}

export default App;