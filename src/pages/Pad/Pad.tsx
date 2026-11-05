export default function Pad(props: { color: string, on: boolean, onClick: () => void }) {

    const style = {
        backgroundColor: props.color
    }
    return (
        <button className={props.on ? "on" : ""} style={style} onClick={props.onClick}></button>
    );
}