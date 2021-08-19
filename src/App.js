import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Delivery from './pages/Delivery';
import Address from './pages/Address';
import Promo from './pages/Promo';
import Drinks from './pages/Menu/Drinks';
import Fries from './pages/Menu/Fries';
import Sauces from './pages/Menu/Sauces';
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            <Home title='Hello, world'/>
        </Route>
        <Route path='/delivery'>
          <Delivery />
        </Route>
        <Route path='/address'>
          <Address />
        </Route>
        <Route path='/promo'>
          <Promo />
        </Route>
        <Route path='/drinks'>
          <Drinks />
        </Route>
        <Route path='/fries'>
          <Fries />
        </Route>
        <Route path='/sauces'>
          <Sauces />
        </Route>
      </Switch>
    </Layout>
   
  );
}

export default App;
