export default function Badge(props: {content: string, background: string, eliminated: boolean}) {
    const { content, background, eliminated } = props;
    return (
        <button disabled={eliminated} style={{backgroundColor: background}} className={`badge ${eliminated ? 'eliminated' : ''}`}>{content}</button>
    )
}