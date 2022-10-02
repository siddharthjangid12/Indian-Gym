import React from 'react'
import Header from './component/Header'
import Footer from "./component/Footer"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Trainer from "./pages/Trainer"
import Contact from "./pages/Contact"


const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path = "/" element= { <Home />} />
    <Route path = "/about" element= { <About />} />
    <Route path = "/service" element= { <Service />} />
    <Route path = "/trainer" element= { <Trainer />} />
    <Route path = "/contact" element= { <Contact />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App