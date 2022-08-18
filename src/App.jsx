import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './assets/scss/global.scss'
import { BitcoinApp } from './pages/BitcoinApp';
import { AppHeader } from './cmps/AppHeader';
import { StatisticPage } from './pages/StatisticPage';
import { ContactDetails } from './pages/ContactDetails';
import { ContactPage } from './pages/ContactPage';
import ContactEdit from './pages/ContactEdit';
import {Signup} from './pages/Signup';

const PrivateRoute = (props) => {
  const isAdmin = true
  // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
  return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}


function App() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader />
        <main className='container'>
          <Switch>
            <Route path='/contact/edit/:id?' component={ContactEdit} />
            <PrivateRoute path='/contact/:id' component={ContactDetails} />
            <Route path='/Statistics' component={StatisticPage} />
            <Route path='/Contacts' component={ContactPage} />
            <Route path='/Signup' component={Signup} />
            <Route path='/' component={BitcoinApp} />
          </Switch>
        </main>
        <footer>
          <section className='container'>
            bitcoinRights YuvalShmukler 2022 &copy;
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
