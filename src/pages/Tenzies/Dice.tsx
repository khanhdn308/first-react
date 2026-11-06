export default function Dice(props: { value: number, on: boolean, onClick: () => void }) {
    const { value, on, onClick } = props;
    return (
        <button className={on ? "on" : ""}  onClick={onClick}>{value}</button>
    );
}