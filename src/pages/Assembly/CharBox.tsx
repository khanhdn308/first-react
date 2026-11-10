export default function CharBox(props: {content: string, status: string, onClick: () => void, disabled?: boolean}) {
    const {status, content, onClick, disabled = false } = props;

    let background = "#FCBA29";
    switch(status) {
        case "unguessed":
            background = "#FCBA29";
            break;
        case "correct":
            background = "#10A95B";
            break;
        case "incorrect":
            background = "#EC5D49";
            break;
    }

    return (
        <button className="char-box" style={{backgroundColor: background}} onClick={onClick} disabled={disabled}>{status !== "hidden" && content}</button>
    )
}