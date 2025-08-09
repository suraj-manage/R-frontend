import { useState } from "react";
import '../design/useState.css';

const colors = ["red", "blue", "green", "brown", "purple"];

function getRandomColor(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function UseState() {
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [bgColor, setBgColor] = useState(""); // random background color
  const [userGuess, setUserGuess] = useState(""); // user's selected color
  const [lastColor, setLastColor] = useState(""); // to show what color was picked

  const handlePlay = () => {
    const random = getRandomColor(colors);
    setBgColor(random);
    setLastColor(random);
    if (userGuess === random) {
      setWin(win + 1);
    } else {
      setLoss(loss + 1);
    }
  };

  return (
    <div className="useState-container" style={{ backgroundColor: bgColor }}>
      <h1>🎮 Color Guess Game</h1>

      <div className="game-stats">
        <h2>Game Stats</h2>
        <p>Wins: {win}</p>
        <p>Losses: {loss}</p>
      </div>

      <div className="game-actions">
        <label htmlFor="color-select">🎯 Pick a color:</label>
        <select
          id="color-select"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        >
          <option value="">--Choose--</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button onClick={handlePlay}>Play Game</button>

        <div className="content"  style={{backgroundColor: bgColor}}>
          <p>The color was: <strong>{lastColor || "???"}</strong></p>
          <div className="useState-wrapper">  
            <div bgColor='white'>    
               content here 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
