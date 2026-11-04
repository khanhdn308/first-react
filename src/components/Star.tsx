import starFilled from "../assets/star-filled.png";
import starEmpty from "../assets/star-empty.png";

export default function Star(props: {filled: boolean, onClick: () => void}) {
    const filled = props.filled;


    function toggleFavorite() {
        props.onClick();
    }

    return (
        <button
            onClick={toggleFavorite}
            aria-pressed={filled}
            className="favorite-button"
        >
            <img
                src={filled ? starFilled : starEmpty}
                alt={filled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}