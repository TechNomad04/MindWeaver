import './App.css';
import { useState } from 'react';

function App(){
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalysis] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  const handleAnalysis = () => {
    setIsAnalysis(true);
    setAnalysisResult('');

    setTimeout(()=>{
      setIsAnalysis(false);
      setAnalysisResult(`mock analysis with ${query}`);
    },3000);
  }

  return (
    <div class="interface">
      <textarea className={`glowing-textarea ${isAnalyzing ? 'analyzing' : ''}`} id="inputText" placeholder="Enter your query here..." value={query} onChange={(e)=>setQuery(e.target.value)} disabled={isAnalyzing}></textarea>
      <button className={`analyze-button ${isAnalyzing ? 'disabled' : ''}`} id="analyzeBtn" onClick={handleAnalysis}>{isAnalyzing?"Analyzing":"Analyze"}</button>
      {isAnalyzing && (
        <div className="dna-spinner active">
          <div class="dna">
            <div class="strand"></div>
            <div class="strand"></div>
          </div>
        </div>
      )}

      {analysisResult && (
        <div className='analysis-result fade-in'>
          {analysisResult}
        </div>
      )}
  </div>
  );
}

export default App;