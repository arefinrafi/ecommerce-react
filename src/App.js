import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import CompareProduct from './pages/CompareProduct';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import OurStore from './pages/OurStore';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ResetPassword from './pages/ResetPassword';
import ShippingPolicy from './pages/ShippingPolicy';
import SignUp from './pages/SignUp';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import TermAndCondition from './pages/TermAndCondition';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
