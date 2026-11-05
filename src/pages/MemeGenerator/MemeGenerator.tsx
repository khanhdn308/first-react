import { useState, useEffect } from "react"
import Meme from "./Meme"
import WindowTracker from "./WindowTracker";

export default function MemeGeneratorPage() {
    const [meme, setMeme] = useState({
        imageUrl: "https://i.imgflip.com/b54xcv.jpg",
        topText: "When you realize",
        bottomText: "you can generate memes with React"
    });

    const [allMemes, setAllMemes] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes));
    }, []);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.currentTarget;
        setMeme(prev => ({
            ...prev, 
            [name]: value
        }));
    }

    function toggleShow() {
        setShow(prev => !prev);
    }

    function getRandomMeme() {
        const index = Math.floor(Math.random() * allMemes.length);
        setMeme(prev => ({
            ...prev,
            imageUrl: allMemes[index]["url"]
        }))
    }


    return (
        <main className="meme-page">
            <div className="meme-page__form">
                <label htmlFor="top-text">Top Text:
                    <input type="text" id="top-text" name="topText" placeholder="Setup" onChange={handleInputChange} />
                </label>
                
                <label htmlFor="bottom-text">Bottom Text:
                    <input type="text" id="bottom-text" name="bottomText" placeholder="Punchline" onChange={handleInputChange} />
                </label>

                <button onClick={getRandomMeme}>Generate Meme</button>
            </div>
            <Meme {...meme}/>

            <button onClick={toggleShow}>
                Toggle Tracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}