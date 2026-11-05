import "./meme.style.css";
export default function Meme(props: {imageUrl: string, topText: string, bottomText: string}) {
    const {imageUrl, topText, bottomText} = props;
    return (
        <section className="meme">
            <img src={imageUrl} alt="Meme" />
            <span className="meme__text meme__text--top">{topText}</span>
            <span className="meme__text meme__text--bottom">{bottomText}</span>
        </section>
    )
}
