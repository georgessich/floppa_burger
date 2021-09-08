import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Delivery from './pages/Delivery';
import Address from './pages/Address/Address';
import Cart from './pages/Cart/Cart';
import Drinks from './pages/Menu/Drinks';
import Fries from './pages/Menu/Fries';
import Sauces from './pages/Menu/Sauces';
import './App.css';
import CartProvider from './pages/Cart/CartProvider';
function App() {
  
  return (
    <CartProvider>
    <Layout>
      <Switch>
        <Route path='/floppa_burger' exact>
            <Home mealsId='burgers'/>
        </Route>
        <Route path='/floppa_burger/delivery'>
          <Delivery />
        </Route>
        <Route path='/floppa_burger/address'>
          <Address />
        </Route>
        <Route path='/floppa_burger/cart'>
          <Cart />
        </Route>
        <Route path='/floppa_burger/drinks'>
          <Drinks mealsId='drinks'/>
        </Route>
        <Route path='/floppa_burger/fries'>
          <Fries mealsId='fries'/>
        </Route>
        <Route path='/floppa_burger/sauces'>
          <Sauces mealsId='sauces'/>
        </Route>
      </Switch>
    </Layout>
    </CartProvider>
  );
}

export default App;
