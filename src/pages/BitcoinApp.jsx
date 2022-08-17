import { Component } from 'react'
import { Home } from '../pages/Home'
import { ContactPage } from '../pages/ContactPage'
import { StatisticPage } from './StatisticPage'
export class BitcoinApp extends Component {
    state = {
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='robot-app'>
                <Home />
            </div>
        )
    }
}
