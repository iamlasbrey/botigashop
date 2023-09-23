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
import Quickview from './components/quickview/Quickview'
import ScrollToTop from './router/ScrollTop'
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getProducts, reset } from "./features/products/productSlice"
import { useNavigate } from 'react-router-dom'
import CartPage from './Pages/CartPage'
import { calculateTotal } from './features/cart/cartSlice'
// import Hamburger from './components/hamburger/Hamburger'



const App:React.FC =()=>{

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isError, message } = useAppSelector((state: any) => state.products)
  const {cartItems } =  useAppSelector((state: any) => state.products)

  useEffect(() => {
    if(isError) console.log(message);
    dispatch(getProducts())
    return () => { reset() }
  }, [ dispatch, isError, message, navigate])

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems?.quantity])
  

  return (
    <>
    <Quickview  /> 
    <Header />
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop/:category" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/product/:id" element={<SinglePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    <Footer />
    <ToastContainer />
    </>
  )
}

export default App
