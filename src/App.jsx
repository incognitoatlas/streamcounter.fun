import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, incrementCount] = useState(0);

  return (
    <button className="button1 noselect" onClick={() => incrementCount(count+1)}>Count: {count}</button>
  );
}

export default App;