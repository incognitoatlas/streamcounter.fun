import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, incrementCount] = useState(0);

  return (
    <div>
      <div id="buttonClass" className="centered">
        <h1>You have</h1>
        <input id="nameInput" placeholder="Clicked (edit me)" autoFocus autocomplete="off"></input>
        <h1>{count} times!</h1>
      </div>
      <div className="btnrow">
        <button className="button1 noselect inrow" onClick={() => incrementCount(count + 1)}>+</button>
        <button className="button1 noselect inrow" onClick={() => incrementCount(count - 1)}>-</button>
      </div>
      <div className="btnrow">
        <button className="button2 noselect ten" onClick={() => incrementCount(count + 10)}>+10</button>
        <button className="button2 noselect ten" onClick={() => incrementCount(count - 10)}>-10</button>
        <button className="button2 noselect ten" onClick={() => incrementCount(count + 100)}>+100</button>
        <button className="button2 noselect ten" onClick={() => incrementCount(count - 100)}>-100</button>
      </div>
      <div id="center">
      <button className="button2 noselect" id="resetbtn" onClick={() => incrementCount(0)}>Reset Counter</button>
      </div>
    </div>
  );
}

export default App;