import { useEffect, useState } from "react";
import "../../App.css";
import "./tenzies.style.css";
import Dice from "./Dice";

interface DiceItem {
    id: number;
    value: number;
    isHold: boolean;
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomizeDices(): DiceItem[] {
    const dices = [];
    for(let i = 0; i < 10; i++) {
        dices.push({id: i, value: getRandomNumber(1,6), isHold: false})
    }
    return dices;
}

function rollDices(dices: DiceItem[]): DiceItem[] {
    return dices.map(dice => {
        if(dice.isHold) return dice;
        return {...dice, value: getRandomNumber(1, 6)}
    })
}


export default function TenziesPage() {
    const [dices, setDices] = useState(randomizeDices);
    useEffect(() => {
        const current = dices[0].value;
        for(let i = 1; i < 10; i++) {
            if (current != dices[i].value) return;
        }
        console.log("YOU WON !!!");
    }, [dices])

    function roll() {
        setDices(rollDices);
    }

    function holdDice(index: number) {
        setDices(dices.map(dice => {
            if(dice.id === index) return {...dice, isHold: true};
            return dice;
        }))
    }


    const diceElements = dices.map((dice) => (
        <Dice
            key={dice.id}
            onClick={() => holdDice(dice.id)}
            value={dice.value}
            on={dice.isHold}
        />
    ))

    return (
        <main className="tenzies">
            <div className="tenzies__container">
                {diceElements}
            </div>
            <button onClick={roll}>Roll</button>
        </main>
    );
}