
import './App.css'
import './bootstrap-icons/bootstrap-icons.css';

import Header from './components/header'
import Hero from './components/hero/Hero'
import Clases from './components/clasess/Clases';
import Bmi from './components/bmi/Bmi';
import Trainer from './components/trainer/Trainer';
import Products from './components/products/Products';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import Footer from './components/footer';


function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Clases />
      <Bmi />
      <Trainer />
      <Products />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}

export default App
