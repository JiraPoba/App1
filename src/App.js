import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("Hello world");
  return (
    <div className="App">
      <h1>{data}</h1>
      <input type="text" onChange={(e)=>{
setData(e.target.value)
      }}/>
    </div>
  );
}

export default App;
