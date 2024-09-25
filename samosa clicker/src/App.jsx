import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);

  const upgrades = [
    { name: 'Double Stuffed 👯‍♀️', description: '2x per click', cost: 10, multiplier: 2 },
    { name: 'Party Pack 🎉', description: '5x per click', cost: 100, multiplier: 5 },
    { name: 'Full Feast 👩🏽‍🍳', description: '10x per click', cost: 1000, multiplier: 10 }
  ];

  const applyUpgrade = (upgrade) => {
    if (count >= upgrade.cost) {
      setCount(count - upgrade.cost);
      setMultiplier(multiplier * upgrade.multiplier);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="./samosa.png" alt="Samosa" onClick={updateCount} />
      </div>
      <div className="container">
        {upgrades.map((upgrade, index) => (
          <div className="upgrade" key={index}>
            <h3>{upgrade.name}</h3>
            <p>{upgrade.description}</p>
            <button onClick={() => applyUpgrade(upgrade)}>
              {upgrade.cost} samosas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;