import { useState } from "react";
import starEmpty from '../assets/star-empty.png';
import starFilled from '../assets/star-filled.png'
import avatar from '../assets/user.png'
import Star from "./Star";

export default function ContactCard() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact({ ...contact, isFavorite: !contact.isFavorite });
    }


    const { firstName, lastName, phone, email } = contact;
    return (
        <main className="card">
            <article className="content">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture"
                />
                <div className="info">
                    <Star filled={contact.isFavorite} onClick={toggleFavorite}/>
                    {/* <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        className="favorite-button"
                    >
                        <img
                            src={contact.isFavorite ? starFilled : starEmpty}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button> */}
                    <h2 className="name">
                        {firstName} {lastName}
                    </h2>
                    <p className="contact">{phone}</p>
                    <p className="contact">{email}</p>
                </div>

            </article>
        </main>
    )
}