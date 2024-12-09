import { useState, useEffect } from 'react';
import Square from './components/Square';
import './styles/main.css';
import adventData from './data/adventData';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    // Generate random numbers 1 to 25
    const shuffledNumbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    setNumbers(shuffledNumbers);

    // Get current day of December 2025
    const today = new Date();
    const isDecember2025 = today.getFullYear() === 2024 && today.getMonth() === 11;
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

  const rowSizes = [1, 2, 3, 4, 5, 6, 2, 2];

  return (
    <div className="app">
      <div className="tree">
        {rowSizes.map((rowSize, rowIndex) => {
          // Calculate the range of squares for this row
          const startIndex = rowSizes.slice(0, rowIndex).reduce((a, b) => a + b, 0);
          const rowSquares = numbers.slice(startIndex, startIndex + rowSize);

          return (
            <div key={rowIndex} className="tree-row">
              {rowSquares.map((number) => {
                const dayData = adventData[number - 1];
                return (
                  <Square 
                    key={dayData.day}
                    day={dayData.day}
                    img={dayData.img}
                    isAccessible={dayData.day <= currentDay}
                    onClick={() => handleSquareClick(dayData)}
                  />
                );
              })}
            </div>
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
