import './App.css';
import { useState } from 'react';

function App(){
  const [query, setQuery] = useState('');
  return (
    <div class="interface">
      <textarea id="inputText" placeholder="Enter your query here..." value={query} onChange={(e)=>setQuery(e.target.value)}></textarea>
      <button id="analyzeBtn">Analyze</button>
  </div>
  );
}

export default App;