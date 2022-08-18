import { Component } from 'react'
import { userService } from '../services/userService'
import { bitcoinService } from '../services/BitcoinService'
import MoveList from '../cmps/MoveList'
export class Home extends Component {
    state = {
        user: null,
        rate: null
    }
    componentDidMount() {
        this.getUser()
        this.getRate()
    }
    getUser() {
        const user = userService.getUser()
        this.setState({ user })
    }
    getLastMoves() {
        const userMoves = this.state.user.moves
        return userMoves.slice(-3);
    }
    async getRate() {
        try {
            const rate = await bitcoinService.getRate('USD')
            this.setState({ rate })
        } catch (err) {
            console.log('Cannot get rate', err);
        }
    }
    render() {
        const { user, rate } = this.state
        if (!user) return <div>Loading...</div>

        return (
            <section className='home'>
                <h2>Hello {user.name}! </h2>
                <p>Your balance is: {user.coins}</p>
                <p>BTC: {rate}</p>
                <img className='home-btc-icon' src="https://alenchernick.github.io/misterBitCoin-React/static/media/btc-icon.7f9e5e703a51754df4db.png" alt="" srcset="" />

                <MoveList moves={this.getLastMoves()} title={`Your last ${this.getLastMoves().length} moves:`}></MoveList>
            </section>
        )
    }
}
