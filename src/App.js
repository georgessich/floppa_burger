import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Delivery from "./pages/Delivery";
import Address from "./pages/Address/Address";
import Cart from "./pages/Cart/Cart";
import Drinks from "./pages/Menu/Drinks";
import Fries from "./pages/Menu/Fries";
import Sauces from "./pages/Menu/Sauces";
import About from "./pages/About/About";
import "./App.css";
import CartProvider from "./pages/Cart/CartProvider";
function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path='/floppa_burger' element={<><Home mealsId='burgers'/><Fries mealsId='fries'/> <Sauces mealsId='sauces'/><Drinks mealsId='drinks'/></>} exact/>

          <Route path="/floppa_burger/delivery" element={<Delivery />} />

          <Route path="/floppa_burger/address" element={<Address />} />

          <Route path="/floppa_burger/cart" element={<Cart />} />

          <Route
            path="/floppa_burger/drinks"
            element={<Drinks mealsId="drinks" />}
          />

          <Route
            path="/floppa_burger/fries"
            element={<Fries mealsId="fries" />}
          />

          <Route
            path="/floppa_burger/sauces"
            element={<Sauces mealsId="sauces" />}
          />

          <Route element={<About path="/floppa_burger/about" exact />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
