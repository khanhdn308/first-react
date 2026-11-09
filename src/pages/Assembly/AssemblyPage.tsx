// - Main Container 
// + Header
// + Result div 
// + Hangman section 
//     + Pill component (word, color)
// + Text area component 
//     + Letter section 
// + Alphabet section 
// Game loop: 
// 1. Choose random word from vocab
// 2. Display the word length 
// 3. User guess 
//     3.1 Disable Button 
//     3.2 If correct => green otherwise red 
// 4. Keep trying after 8 => user lost 
// 5. User won if all characters are revealed
const GAME_IN_PROGRESS = 1;
const GAME_WON = 2;
const GAME_LOST = 3;
const LANGUAGES = [
    {
        id: 1,
        name: "Java",
        active: true,
        background: "blue"
    },
    {
        id: 2,
        name: "JavaScript",
        active: true,
        background: "blue"
    },
    {
        id: 3,
        name: "C",
        active: true,
        background: "blue"
    },
    {
        id: 4,
        name: "C#",
        active: true,
        background: "blue"
    },
    {
        id: 5,
        name: "Python",
        active: true,
        background: "blue"
    },
    {
        id: 6,
        name: "Ruby",
        active: true,
        background: "blue"
    },
    {
        id: 7,
        name: "PHP",
        active: true,
        background: "blue"
    },
    {
        id: 8,
        name: "Rust",
        active: false,
        background: "blue"
    },
    {
        id: 9,
        name: "Assembly",
        active: true,
        background: "blue"
    }
]
const WORDS = ["HORSE", "MACHINE", "BOOK", "INJECTION", "ELEPHANT", "REFACTOR"]

import { useState } from "react"
import Badge from "./Badge";
import "./assembly.style.css";

export default function AssemblyPage() {
    const [gameStatus, setGameStatus] = useState(GAME_IN_PROGRESS);
    const [languages, setLanguages] = useState(LANGUAGES);
    const [eliminateIndex, setEliminateIndex] = useState(-1);

    const badgeComponents = languages.map((lang) => (
        <Badge content={lang.name} background="blue" eliminated={!lang.active}/>
    ))

    return (
        <main>
            <div>
                <h1>Assembly Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p> 
            </div>

            {(gameStatus == GAME_WON) && <div>
                <h2>You win</h2>
                <p>Well done, you've won but the fight is not over yet, keep fighting ✊</p>
            </div>}
            {(gameStatus == GAME_LOST) && <div>
                <h2>Game over</h2>
                <p>You lose, better learn Assembly</p>
            </div>}            

            <div>
                {badgeComponents}
            </div>
            <div>
                <div>A</div>
                <div>A</div>
                <div>A</div>
                <div>A</div>
                <div>A</div>
                <div>A</div>
                <div>A</div>
            </div>
            {/* Keyboard section */}
            <div>A</div>
            <div>B</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
        </main>
    )
}