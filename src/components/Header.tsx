import globeIcon from '../assets/globe.svg'
import '../App.css'

export default function Header(props: {user: string}) {
    const {user} = props;
    return (
        <header className="header">
            <img src={globeIcon} className="header--icon" />
            <h2 className="header--title">React Travel Journal</h2>
            <h3 className="header--subtitle">Welcome back {user}</h3>
        </header>
    )
}
