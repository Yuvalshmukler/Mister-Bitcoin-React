import React from 'react'

export default function TransferFund({ contact, onTransfer }) {
    return (
        <div>
            <h2>Transfer coins to {contact.name}:</h2>
            <form onSubmit={(ev) => {
                ev.preventDefault()
                onTransfer(ev.target.elements.amount.value)
            }}
                >
                <label htmlFor="amount"></label>
                <input name='amount' type="number" id='amount' placeholder='Enter amount' />
                <button>Transfer</button>
            </form>
        </div>
    )
}
