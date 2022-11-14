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
          <Route path='/' element={<><Home mealsId='burgers'/><Fries mealsId='fries'/> <Sauces mealsId='sauces'/><Drinks mealsId='drinks'/></>} exact/>

          <Route path="/delivery" element={<Delivery />} />

          <Route path="/address" element={<Address />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/drinks"
            element={<Drinks mealsId="drinks" />}
          />

          <Route
            path="/fries"
            element={<Fries mealsId="fries" />}
          />

          <Route
            path="/sauces"
            element={<Sauces mealsId="sauces" />}
          />

          <Route element={<About path="/about" exact />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
