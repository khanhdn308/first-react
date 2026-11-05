import { useState, useEffect } from "react";
import "./meme.style.css";
export default function StarWar() {
    const [starWarState, setStarWarState] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarState(data));
    }, [count]);

    function incrementCount() {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <button onClick={incrementCount}>Hit me total {count}</button>
            <pre>{JSON.stringify(starWarState)}</pre>
        </div>
    )
}
