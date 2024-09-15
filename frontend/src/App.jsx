import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './pages/sign_up';
import Login from './pages/login';
import Homepage from './pages/homepage';
import Account from './pages/account';
import About from './pages/static/about';
import Contact from './pages/contact';
import Error from './pages/static/error';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AnimatedCursor from "react-animated-cursor"
import Privacy from './pages/static/privacy';
import Refund from './pages/static/refund';
import Shipping from './pages/static/shipping';
import Term from './pages/static/term';
import Faq from './pages/static/faq';
import ProductsPage from './pages/products';
import CartPage from './pages/CartPage';
function App () {
    return (
        <BrowserRouter>
            <AnimatedCursor />
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path='/sign_up' element={ <Signup /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/products' element={ <ProductsPage /> } />
                <Route path='/cart' element={ <CartPage /> } />
                <Route path='/account' element={ <Account /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/error' element={ <Error /> } />
                <Route path='/privacy' element={ <Privacy /> } />
                <Route path='/refund' element={ <Refund /> } />
                <Route path='/shipping' element={ <Shipping /> } />
                <Route path='/term' element={ <Term /> } />
                <Route path='/faq' element={ <Faq /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App

