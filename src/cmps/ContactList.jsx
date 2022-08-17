import React from 'react'
import {ContactPreview} from './ContactPreview'
export default function ContactList({contacts,onRemoveContact}) {
    console.log(contacts);
    return (
        <div className='contact-list simple-cards-grid'>
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact}/> )}
        </div>
    )
}
