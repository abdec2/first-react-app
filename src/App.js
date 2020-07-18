import React, {useState} from 'react';
import Message from './message';
import './App.css';

function App(){
  let [count, setCount] = useState(0);
  let [isDay, setDay] = useState(false);

  
return (
  <div className={`box ${isDay ? 'day' : ''}`}>
    <Message count={count} />
    <button onClick={()=>setCount(count + 1)}>Update Count</button>
    <button onClick={()=>setCount(0)}>Reset Count</button>
    <button onClick={()=>setDay(!isDay)}>toggle day</button>
  </div>

  
);
} // function ends here

export default App;