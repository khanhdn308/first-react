import "../App.css";
import marker from "../assets/marker.png";

interface EntryProps {
  country: string;
  title: string;
  googleMapsLink: string;
  dates: string;
  text: string;
  img: {
    src: string;
    alt: string;
  };
}

export default function Entry(props: EntryProps) {
  const { country, title, googleMapsLink, dates, text, img } = props;

  return (
    <article className="entry">
      <div className="entry--image">
        <img className="entry--image--content" src={img.src} alt={img.alt} />
      </div>
      <div>
        <img className="entry--marker" src={marker} />
        <span className="country">{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className="entry--title">{title}</h2>
        <p>{dates}</p>
        <p>{text}</p>
      </div>
    </article>
  );
}
