import React, { useState, useEffect } from 'react';
import './App.css';
import 'https://github.com/lottalaakso/IMBd.git';

import Sentiment from 'sentiment';
const sentiment = new Sentiment();
//comment

function App() {

  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Sentiment Analysis</h2>

        <input value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ padding: '20px', fontSize: '20px', width: '70%', borderRadius: '20px', border: 'white' }}
        />

        {
          sentimentScore !== null ?
            <p>Sentiment Score: {sentimentScore.score}</p>
            : ''
        }

  {sentimentScore ? (
    <p>
      Sentiment: {sentimentScore.score === 0 ? 'Neutral' : sentimentScore.score > 0 ? 'Positive :)' : 'Negative :('}
    </p>
  ) : ''}

      </header>
    </div>
  );
}

export default App;
