import React, { useState } from 'react'
import axios from 'axios'
import '../App.css';

const RandomFact = () => {
  const [fact, setFact] = useState('Click \'Get Fact\' to get started!');
  const onClick = () => {
    axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`)
      .then(res => {
        const fact = res.data.text;
        setFact(fact);
      })
  }

  return (
    <div className="container">
      <div className="card">
        <div className="fact">
          <h3>Random Fact of the Day: </h3>
          <p>{fact}</p>
        </div>
      </div>
      <h2 className="btn" onClick={onClick}>Get Fact</h2>
    </div>
  )
}

export default RandomFact;
