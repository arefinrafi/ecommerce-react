import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome , AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />


      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8555681358157!2d91.81955831426964!3d22.359081796410308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sGEC%20More%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1674141246977!5m2!1sen!2sbd" 
                width="600" 
                height="450" 
                className="border-0 w-100" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title='maps'
              >
              </iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="4" className='w-100 form-control' placeholder='Comments'></textarea>
                    </div>

                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>
                          Home:02, Near O.R. Nizam Road, G.E.C, Chittagong
                        </address>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <BiPhoneCall className='fs-5'/>
                        <a href="tel:+880 1234 567890">+880 1234 567890</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:frootel@gmail.com">frootel@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-15'>
                        <BiInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 10 AM - 8AM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact