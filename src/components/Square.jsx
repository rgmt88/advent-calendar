const Square = ({ day, img, onClick }) => {
    return (
        <div className="square" onClick={onClick}>
            <div className="day-number">{day}</div>
            <img src={img} alt={`Christmas Image for Day ${day}`} className="day-image" />
        </div>
    );
};

export default Square;