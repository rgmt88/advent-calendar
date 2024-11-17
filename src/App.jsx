import React, { useState, useEffect } from 'react';
import Square from './components/Square';
import './styles/main.css'

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);

  // Generate random numbers 1 to 25
  useEffect(() => {
    const shuffledNumbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    setNumbers(shuffledNumbers);
  }, []);

  const handleSquareClick = (number) => {
    setModalInfo(`This is square number ${number}!`);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="app">
      <div className="grid">
        {numbers.map((number) => (
          <Square key={number} number={number} onClick={handleSquareClick} />
        ))}
      </div>

      {modalInfo && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">X</button>
            <p>{modalInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App
