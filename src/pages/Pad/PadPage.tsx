import { useState } from "react";
import padsData from "../../consts/pads.ts";
import Pad from "./Pad.tsx";
import './pad.style.css';

export default function PadPage() {
    const [pads, setPads] = useState(padsData);

    function togglePad(id: number) {
        const updatedPads = pads.map((pad) => {
            if (pad.id === id) {
                return { ...pad, on: !pad.on };
            }
            return pad;
        });
        setPads(updatedPads);
    }

    function toggleAllPads() {
        const allOn = pads.every((pad) => pad.on);  
        const updatedPads = pads.map((pad) => ({ ...pad, on: !allOn }));
        setPads(updatedPads);
    }

    const buttonElements = pads.map((pad) => (
        <Pad
            key={pad.id}
            color={pad.color}
            on={pad.on}
            onClick={() => togglePad(pad.id)}
        />
    ))
    return (
        <main className="pad-page">
            <div className="pad-container">
                {buttonElements}
            </div>
            <button className="toggle-all" onClick={toggleAllPads}>
                Toggle All
            </button>
        </main>
    );
}
