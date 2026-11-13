import globeIcon from '../assets/globe.svg'
import '../App.css'
import { NavLink } from 'react-router'

const routes = [
    { path: '/assembly', label: 'Assembly' },
    { path: '/contact', label: 'Contact' },
    { path: '/claude', label: 'Chef Claude' },
    { path: '/travel', label: 'Travel Journal' },
    { path: '/sign-up', label: 'Sign Up' },
    { path: '/pad', label: 'Pad' },
    { path: '/meme', label: 'Meme Generator' },
    { path: '/tenzies', label: 'Tenzies' },
    { path: '/counter', label: 'Counter' },
]

export default function Header(props: {user: string}) {
    const {user} = props;
    return (
        <header className="header">
            <div className="header--brand">
                <img src={globeIcon} className="header--icon" alt="" />
                <h2 className="header--title">React Projects</h2>
            </div>
            <nav className="header--nav" aria-label="Main navigation">
                {routes.map(({path, label}) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({isActive}) => `header--link${isActive ? ' is-active' : ''}`}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
            <p className="header--subtitle">Welcome back {user}</p>
        </header>
    )
}
