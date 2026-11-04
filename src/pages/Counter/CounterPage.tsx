import { useState } from "react";
import "../../App.css";
import Count from "./Count";

export default function CounterPage() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }

    return (
        <div className="counter-page">
            <h1>Counter Page</h1>
            <Count count={count} />
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}