import { useState } from "react";

export default function Toast() {
    const [messages, setMessages] = useState<string[]>(["Hello", "How are you?", "Goodbye"]);

    function getToastMessage() {
        switch (messages.length) {
            case 0:
                return "You're all caught up!";
            case 1:
                return "You have 1 new message";
            default:
                return `You have ${messages.length} new messages`;
        }
    }

    return (
        <div className="toast">
            <h1>{getToastMessage()}</h1>
        </div>
    );
}