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

function initChars(answer: string) {
    const chars= [];
    for(const ch of answer) {
        chars.push({
            content: ch,
            status: "hidden"
        });
    }
    return chars;
}


import { useEffect, useState } from "react"
import Badge from "./Badge";
import "./assembly.style.css";
import CharBox from "./CharBox";

export default function AssemblyPage() {
    const [gameStatus, setGameStatus] = useState(GAME_IN_PROGRESS);
    const [totalTries, setTotalTries] = useState(0);
    const [languages, setLanguages] = useState(LANGUAGES);
    const [eliminateIndex, setEliminateIndex] = useState(-1);
    const [answer, setAnswer] = useState(getRandomElement(WORDS));
    const [chars, setChars] = useState(initChars(answer));

    // Init the keyboard section
    const [keyboard, setKeyboard] = useState(initKeyboard);

    function guessCharacter(index: number, letter: string) {
        // Only process unguessed letters
        if(keyboard[index].status !== "unguessed") return;

        if (gameStatus !== GAME_IN_PROGRESS) {
            return;
        }
        let isCorrect = false;
        let hasWon = false;
        // Set the keyboard
        const updatedKeys = keyboard.map((key) => {
            if (key.index == index) {
                isCorrect = answer.includes(key.content);
                return { ...key, status: isCorrect ? "correct" : "incorrect"};
            }
            return key;
        });
        let nextTotalTries = totalTries;

        if(isCorrect) { // Guess is correct
            const newChars = chars.map(c => {
                if(c.content === letter) {
                    return {...c, status: "correct"}
                } else {
                    return c;
                }
            });
            if(newChars.every(c => c.status === "correct")) {
                hasWon = true;
            }
            setChars(newChars);
        } else {
            nextTotalTries++;
            const nextEliminated = eliminateIndex + 1;
            setEliminateIndex(nextEliminated);
            setLanguages(prev => prev.map((item, index) => index === nextEliminated ? {...item, active: false} : item));
        }
        const nextStatus = hasWon ? GAME_WON : nextTotalTries >= MAX_TRIES ? GAME_LOST : GAME_IN_PROGRESS;
        if (nextStatus === GAME_LOST) {
            const newChars = chars.map(c => {
                // Mark all hidden as failed
                if(c.status == "hidden") {
                    return {...c, status: "incorrect"}
                } else {
                    return c;
                }
            });
            setChars(newChars);
        }
        setTotalTries(nextTotalTries);
        setGameStatus(nextStatus);
        setKeyboard(updatedKeys);
    }

    const charComponents = chars.map((char, index) => (
        <CharBox key={index} content={char.content} status={char.status} onClick={() => {}}/>
    ));

    const keyboardComponents = keyboard.map((c, index) => (
        <CharBox key={index} content={c.content} status={c.status} disabled={gameStatus !== GAME_IN_PROGRESS} onClick={() => guessCharacter(index, c.content)}/>
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
            {languages.map((lang) => (
                <Badge 
                    key={lang.id}
                    content={lang.name} 
                    background={lang.background}
                    eliminated={!lang.active}
                />
            ))}
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