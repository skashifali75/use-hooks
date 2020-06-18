import React, {useState} from 'react';
import Flasher from './Flasher.js';
import './App.css';

function App() {  
  let [flashed, setFlash] = useState(true);
   return (
    <div className={`area ${flashed ? 'flash' : ''}`}>
     <h2> The Area is {flashed ? 'flashed' : 'dark'}</h2>
     <button onClick={()=>{setFlash(!flashed) }} >Flash</button>

   <Flasher isGreen={flashed}/>
   <Flasher isGreen={!flashed}/>
    </div>

   );

}
export default App;