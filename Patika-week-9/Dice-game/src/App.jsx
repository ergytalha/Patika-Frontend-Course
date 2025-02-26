import React, { useState } from 'react';

import diceImg1 from './assets/images/dice1.png';
import diceImg2 from './assets/images/dice2.png';
import diceImg3 from './assets/images/dice3.png';
import diceImg4 from './assets/images/dice4.png';
import diceImg5 from './assets/images/dice5.png';
import diceImg6 from './assets/images/dice6.png';

const DiceGame = () => {
  const [playerDice1, setPlayerDice1] = useState(1);
  const [playerDice2, setPlayerDice2] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  const diceImages = { 1: diceImg1, 2: diceImg2, 3: diceImg3, 4: diceImg4, 5: diceImg5, 6: diceImg6 };

  const handleImageError = (e, diceValue) => {
    console.log(`Resim yüklenemedi: ${diceImages[diceValue]}`);
    e.target.src = '/assets/images/default-dice.png'; // Varsayılan bir zar görseli ekleyebilirsin
  };

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    setWinner(null);
    
    const times = 10;
    const interval = setInterval(() => {
      setPlayerDice1(Math.floor(Math.random() * 6) + 1);
      setPlayerDice2(Math.floor(Math.random() * 6) + 1);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      setPlayerDice1(newDice1);
      setPlayerDice2(newDice2);

      const playerTotal = newDice1 + newDice2;
      const compDice1 = Math.floor(Math.random() * 6) + 1;
      const compDice2 = Math.floor(Math.random() * 6) + 1;
      const computerTotal = compDice1 + compDice2;

      let roundWinner;
      if (playerTotal > computerTotal) {
        setPlayerScore(prevScore => prevScore + 1);
        roundWinner = "Oyuncu";
      } else if (computerTotal > playerTotal) {
        setComputerScore(prevScore => prevScore + 1);
        roundWinner = "Bilgisayar";
      } else {
        roundWinner = "Berabere";
      }

      setWinner(roundWinner);
      setGameHistory(prev => [...prev, { player: { dice1: newDice1, dice2: newDice2, total: playerTotal }, computer: { dice1: compDice1, dice2: compDice2, total: computerTotal }, result: roundWinner }]);
      setRolling(false);
    }, 500);
  };

  const resetGame = () => {
    setPlayerDice1(1);
    setPlayerDice2(1);
    setPlayerScore(0);
    setComputerScore(0);
    setWinner(null);
    setGameHistory([]);
  };

  return (
    <div className="container">
      <h1>Draw 🤝</h1>
      <div className="scoreboard">
        <div className="score">
          <p>Oyuncu</p>
          <p>{playerScore}</p>
        </div>
        <div className="score">
          <p>Bilgisayar</p>
          <p>{computerScore}</p>
        </div>
      </div>
      <div className="dice-container">
        <img src={diceImages[playerDice1]} alt={`Zar ${playerDice1}`} onError={(e) => handleImageError(e, playerDice1)} className={rolling ? 'rolling' : ''} />
        <img src={diceImages[playerDice2]} alt={`Zar ${playerDice2}`} onError={(e) => handleImageError(e, playerDice2)} className={rolling ? 'rolling' : ''} />
      </div>
      {winner && <p className="winner">{winner === "Berabere" ? "Berabere!" : `Kazanan: ${winner}`}</p>}
      <div className="buttons">
        <button onClick={rollDice} disabled={rolling}>{rolling ? "Zarlar Atılıyor..." : "Zar At"}</button>
        <button onClick={resetGame}>Oyunu Sıfırla</button>
      </div>
    </div>
  );
};

export default DiceGame;
