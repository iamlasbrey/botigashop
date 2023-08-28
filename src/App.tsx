import './App.css'
import { Route, Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import ShopPage from './Pages/ShopPage'
import BlogPage from './Pages/BlogPage'
import SinglePage from './Pages/SinglePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ErrorPage from './Pages/ErrorPage'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
// import Quickview from './components/quickview/Quickview'
// import Hamburger from './components/hamburger/Hamburger'

function App() {
  return (
    <>
    {/* <Quickview /> */}
    <Header />
    {/* <Hamburger /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/product/:id" element={<SinglePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    <Footer />
    <ToastContainer />
    </>
  )
}

export default App
