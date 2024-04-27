import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import './index.css'
import Body from './Body'
import Footer from './Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AdminLogin from './AdminLogin'
import Dashboard from './Dashboard'
import Blog from './Blog'
import LocateUs from './LocateUs'
import Facilities from './Facilities'
import ContactUs from './ContactUs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Navbar/>
    
    <Routes>
    
  <Route path='/' element={<Body/>} />

  <Route path='/blog' element={<Blog/>} />
  <Route path='/admin' element={<AdminLogin/>} />
  <Route path='/locate' element={<LocateUs/>}/>
  <Route path='/facilities' element={<Facilities/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    
  </React.StrictMode>,
)
