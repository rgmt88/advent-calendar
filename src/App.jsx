import React, { useState, useEffect } from 'react';
import Square from './components/Square';
import './styles/main.css'

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);

  // Advent data array
  const adventData = [
    { day: 1, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 2, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 3, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 4, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 5, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 6, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 7, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 8, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 9, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 10, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 11, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 12, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 13, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 14, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 15, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 16, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 17, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 18, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 19, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 20, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 21, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 22, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 23, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 24, img: '', content: 'Day 1: A lovely snowflake!'},
    { day: 25, img: '', content: 'Day 1: A lovely snowflake!'},
  ];

  // Generate random numbers 1 to 25
  useEffect(() => {
    const shuffledNumbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    setNumbers(shuffledNumbers);

    // Get current day of December 2025
    const today = new Date();
    const isDecember2025 = today.getFullYear() === 2024 && today.getMonth() === 10;
    // December is month 11
    setCurrentDay(isDecember2025 ? today.getDate() : null);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setModalInfo(null);
      }
    };

    // Add event listener when modal is open
    if (modalInfo) {
      window.addEventListener('keydown', handleEscape);
    }

    // Cleanup listener when modal closes
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [modalInfo]);

  const handleSquareClick = (data) => {
    setModalInfo(data);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="app">
      <div className="grid">
        {numbers.map((number) => {
          // Match shuffled number to adventData
          const dayData = adventData[number - 1];
          const isAccessible = dayData.day <= currentDay;
          
          return (
            <Square 
              key={dayData.day}
              day={dayData.day}
              img={dayData.img}
              isAccessible={isAccessible}
              onClick={() => handleSquareClick(dayData)}
            />
          );
        })}
      </div>

      {modalInfo && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-button">X</button>
            <p>{modalInfo.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App
