import React, { Component } from 'react'
import { contactService } from '../services/contactService'
export default class ContactEdit extends Component {
  state = {
    contact: null
  }
  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
    this.setState({ contact }, () => {
      // this.inputRef.current.focus()
    })
  }
  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? (+target.value || '') : target.value
    this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
  }
  onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact({ ...this.state.contact })
    this.props.history.push('/')
  }
  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    console.log(contact);
    return (
      <section className='contact-edit'>
        <h2>{contact._id ? 'Edit' : 'Add'} contact</h2>
        <form onSubmit={this.onSaveContact}>
          <label htmlFor="name">Name</label>
          <input ref={this.inputRefFunc} value={contact.name} onChange={this.handleChange} type="text" name="name" id="name" />

          <label htmlFor="email">Email</label>
          <input value={contact.email} onChange={this.handleChange} type="email" name="email" id="name" />
          
          <label htmlFor="phone">Phone</label>
          <input value={contact.phone} onChange={this.handleChange} type="number" name="phone" id="phone" />
          <button>Save</button>
        </form>

      </section>
    )
  }
}
