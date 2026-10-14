import '../App.css'
import marker from '../assets/marker.png'

interface EntryProps {
    country: string
    title: string
    googleMapsUrl: string
    dateRange: string
    description: string
    imgSrc: string
    imgAlt: string
}

export default function Entry(props: EntryProps) {

    return (
        <article className="entry">
            <div className="entry--image">
                <img className="entry--image--content" src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div>
                <img className="entry--marker" src={marker} />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="entry--title">{props.title}</h2>
                <p>{props.dateRange}</p>
                <p>{props.description}</p>
            </div>
        </article>
    )
}
