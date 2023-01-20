import './App.css';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Catalogue from './pages/catalogue/Catalogue'
import Cart from './pages/cart/Cart'
import Bill from './pages/bill/Bill'
import Contact from './pages/contact/Contact'
import Nav from './components/nav/Nav';

function App () {
  return (
    <>
    <main>
        <Nav/>
        <Home/>
        <About/>
        <Catalogue/>
        <Cart/>
        <Bill/>
        <Contact/>
      </main>   
    </>
  )
}

export default App
