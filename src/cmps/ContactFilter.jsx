import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    render() {
        const { name, phone, email } = this.state
        return (
            <section>
                <h3 className='filter-title'>Filter By:</h3>
                <form className='contact-filter'>
                    <section>
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={this.handleChange} type="text" name="name" id="name" />
                    </section>
                    <section>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={this.handleChange} type="text" name="email" id="email" />
                    </section>
                    <section>
                        <label htmlFor="phone">Phone</label>
                        <input value={phone} onChange={this.handleChange} type="number" name="phone" id="phone" />
                    </section>
                </form>
            </section>
        )
    }
}
