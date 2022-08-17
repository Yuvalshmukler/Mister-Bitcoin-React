import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
    console.log('_AppHeader -> props', props)
    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className="logo">Bit Coin</h1>
                <section className="back">
                    <button className='header-btn' onClick={props.history.goBack}>Back</button>
                </section>
                <nav>
                    <NavLink exact to='/' >Home</NavLink>
                    <NavLink to='/Contacts'>Contact</NavLink>
                    <NavLink to='/Statistics'>Statistics</NavLink>
                    <NavLink to='/Signup'>Signup</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)