import globeIcon from '../assets/globe.svg'
import '../App.css'

export default function Header() {
    return (
        <header className="header">
            <img src={globeIcon} className="header--icon" />
            <h2 className="header--title">React Travel Journal</h2>
        </header>
    )
}
