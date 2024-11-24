const Square = ({ day, img, isAccessible, onClick }) => {
    return (
        <div 
            className={`square ${!isAccessible ? 'locked' : ''}`}
            onClick={isAccessible ? onClick : null}
        >
            <div className="day-number">{day}</div>
            <img src={img} alt={`Christmas Image for Day ${day}`} className="day-image" />
        </div>
    );
};

export default Square;