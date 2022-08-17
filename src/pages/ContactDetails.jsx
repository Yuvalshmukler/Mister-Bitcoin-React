import { Component } from 'react'
import { contactService } from '../services/contactService'
import TransferFund from '../cmps/TransferFund';
import { userService } from '../services/userService';
import MoveList from '../cmps/MoveList';
export class ContactDetails extends Component {

    state = {
        contact: null,
    }
    async componentDidMount() {
        console.log('mount');
        this.loadContact()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }
    getUserMoves() {
        const moves = userService.getUser().moves
        const contactId = this.state.contact._id
        return moves.filter(move => move.toId === contactId )
    }
    async loadContact() {
        const contactId = this.props.match.params.id
        const contact = await contactService.getContactById(contactId)
        this.setState({ contact })
    }
    onTransfer = (amount) => {
        console.log('transfer!');
        this.props.history.push('/')

        userService.model(this.state.contact, amount)
    }
    onBack = () => {
        this.props.history.push('/')
        // this.props.history.goBack()
    }

    render() {
        const { contact} = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-details'>
                <h2> {contact.name}</h2>
                <h3>Email: {contact.email}</h3>
                <h3>Phone: {contact.phone}</h3>
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <button onClick={this.onBack}>Back</button>
                <TransferFund contact={contact} onTransfer={this.onTransfer} ></TransferFund>
                <MoveList title="Your moves"  moves={this.getUserMoves()}></MoveList>
            </div>
        )
    }
}
