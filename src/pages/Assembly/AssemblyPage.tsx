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

interface CharacterInf {
    content: string;
    status: string;
    key: number; 
}

const MAX_TRIES = 8;
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
        active: true,
        background: "blue"
    },
    {
        id: 9,
        name: "Assembly",
        active: true,
        background: "blue"
    }
]
const WORDS = ["HORSE", "MACHINE", "BOOK", "INJECTION", "ELEPHANT", "REFACTOR"];

function getRandomElement(list: string[]) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

function initKeyboard() {
    const keys = [];
    let index = 0;
    for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        keys.push({
            index: index++,
            content: String.fromCharCode(i),
            status: "unguessed"
        });
    }
    return keys;
}


import { useEffect, useRef, useState } from "react"
import Badge from "./Badge";
import "./assembly.style.css";
import CharBox from "./CharBox";

export default function AssemblyPage() {
    const [gameStatus, setGameStatus] = useState(GAME_IN_PROGRESS);
    const [totalTries, setTotalTries] = useState(0);
    const [languages, setLanguages] = useState(LANGUAGES);
    const [eliminateIndex, setEliminateIndex] = useState(-1);
    const [answer, useAnswer] = useState(getRandomElement(WORDS));

    const badgeComponents = languages.map((lang, index) => (
        <Badge key={index} content={lang.name} background="blue" eliminated={!lang.active}/>
    ));

    useEffect(() => {
        console.log(`Current try ${totalTries}`);
        if(totalTries === MAX_TRIES) {
            console.log(`You lost`);
        }
    }, [totalTries])
    
    // Choose the word to guess
    const chars= [];
    for(const ch of answer) {
        chars.push({
            content: ch,
            status: "unguessed"
        });
    }

    // Init the keyboard section
    const [keyboard, setKeyboard] = useState(initKeyboard);


    function guessCharacter(index: number) {
        const updatedKeys = keyboard.map((key) => {
            if (key.index == index) {
                const isCorrect = answer.includes(key.content);
                return { ...key, status: isCorrect ? "correct" : "incorrect"};
            }
            return key;
        });
        setTotalTries(totalTries + 1);
        setKeyboard(updatedKeys);
    }


    const charComponents = chars.map((char, index) => (
        <CharBox key={index} content={char.content} status={char.status} onClick={() => guessCharacter(index)}/>
    ));

    const keyboardComponents = keyboard.map((c, index) => (
        <CharBox key={index} content={c.content} status={c.status} onClick={() => guessCharacter(index)}/>
    ));

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

            <div className="guess-container">
                {charComponents}
            </div>

            <div className="char-container">
                {keyboardComponents}
            </div>
            
        </main>
    )
}