import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>

            <div className="col-7">
                <div className="input-group mb-0">
                  <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                  <span className="input-group-text p-2" id="basic-addon2">
                      Subscribe
                  </span>
                </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='mb-4 text-white'>Contact Us</h4>
              <div>
                <address className='text-white'>
                  Hno: 123 Near Houseton,<br/> Newyork, United States<br/>
                  Pincode: 123456
                </address>

                <a href="tel:+8801999999999" className='mt-2 d-block mb-1 text-white'>+880-1999-999999</a>
                <a href="mailto:admin@admin.com" className='mt-1 d-block mb-1 text-white'>admin@admin.com</a>

                <div className="social-icons d-flex align-items-center gap-15">
                  <a href="https://www.linkedin.com/">
                    <BsLinkedin className='text-white fs-5' />
                  </a>
                  <a href="https://www.instagram.com/">
                    <BsInstagram className='text-white fs-5' />
                  </a>
                  <a href="https://www.github.com/">
                    <BsGithub className='text-white fs-5' />
                  </a>
                  <a href="https://www.youtube.com/">
                    <BsYoutube className='text-white fs-5' />
                  </a>

                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='/term-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='mb-4 text-white'>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='mb-4 text-white'>Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Accessories</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by Tech Effectiva</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
