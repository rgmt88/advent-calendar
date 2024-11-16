const Square = ({ number, onClick }) => {
    return (
        <div className="square" onClick={() => onClick(number)}>
            <div className="number">{number}</div>
            <div className="figure">🎄</div>
        </div>
    );
};

export default Square;