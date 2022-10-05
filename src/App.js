
import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

function App() {
  const [markDown, setMarkdown] = useState('hello')
  return (
    <div className="App">
      <header className="App-header">
        <div className='text-container'>
          <textarea value={markDown} onChange={(event) => setMarkdown(event.target.value)} id="editor">

          </textarea>
        </div>
        <div className='text-container' id="preview">
        <div>
        <ReactMarkdown>
        {markDown}
        </ReactMarkdown>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
