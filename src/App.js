import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Delivery from './pages/Delivery';
import Address from './pages/Address/Address';
import Promo from './pages/Promo';
import Drinks from './pages/Menu/Drinks';
import Fries from './pages/Menu/Fries';
import Sauces from './pages/Menu/Sauces';
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/floppa_burger' exact>
            <Home/>
        </Route>
        <Route path='/floppa_burger/delivery'>
          <Delivery />
        </Route>
        <Route path='/floppa_burger/address'>
          <Address />
        </Route>
        <Route path='/floppa_burger/promo'>
          <Promo />
        </Route>
        <Route path='/floppa_burger/drinks'>
          <Drinks />
        </Route>
        <Route path='/floppa_burger/fries'>
          <Fries />
        </Route>
        <Route path='/floppa_burger/sauces'>
          <Sauces />
        </Route>
      </Switch>
    </Layout>
   
  );
}

export default App;
