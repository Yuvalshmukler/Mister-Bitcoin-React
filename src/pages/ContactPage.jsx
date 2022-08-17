import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContactList from '../cmps/ContactList'
import { contactService } from '../services/contactService'
import { ContactFilter } from '../cmps/ContactFilter'
export class ContactPage extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null
  }
  componentDidMount() {
    this.loadContacts()
  }
  onSelectContactId = (ContactId) => {
    this.setState({ selectedContactId: ContactId })
  }
  onRemoveContact= async (contactId) => {
    console.log('hi',contactId);
    await contactService.deleteContact(contactId)
    this.loadContacts()
}

  onChangeFilter = (filterBy) => {
    console.log('filterBy', filterBy);
    this.setState({ filterBy }, this.loadContacts)
  }

  async loadContacts() {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      console.log(contacts);
      this.setState({ contacts })
    } catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    const { contacts, selectedContactId } = this.state
    if (!contacts) return <div>Loading...</div>
    return (
      <section className='contact-page-container'>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link className='add-link' to="/contact/edit">Add Contact</Link>
        <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact} />
      </section>
    )
  }
}
