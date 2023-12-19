
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'

import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'

import ContactPage from './pages/ContactPage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
     </BrowserRouter>
    </>
  )
}

export default App
