import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
    const ContactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }

    return (
        <div style={ContactStyle} className='contact-preview'>
            <Link to={`/contact/${contact._id}`} className='info'>
                <h3>{contact.name}</h3>
            </Link>
            <section className='actions'>
                <button onClick={() => onRemoveContact(contact._id)}>Delete</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </section>

        </div>
    )

}
