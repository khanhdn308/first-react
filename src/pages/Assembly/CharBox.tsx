export default function CharBox(props: {content: string, background: string, eliminated: boolean}) {
    const { content, background, eliminated } = props;
    return (
        <span style={{backgroundColor: background}} className={`badge ${eliminated ? 'eliminated' : ''}`}>{content}</span>
    )
}