import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart.jsx'
import Order from './Pages/Order.jsx'



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="order" element={<Order />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
