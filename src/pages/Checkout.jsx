import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
import watch from '../images/watch.jpg';

const Checkout = () => {
  return (
    <>
        <Container class1="checkout-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="website-name">Frootel</h3>

                        <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/cart' className='text-dark'>Cart</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Information</li>
                                <li className="breadcrumb-item active">Shipping</li>
                                <li className="breadcrumb-item active" aria-current="page">Payment</li>
                            </ol>
                        </nav>

                        <h4 className="title">
                            Contact Information
                        </h4>
                        <p className="user-details total">
                            Frootel (info@frootel.com)
                        </p>

                        <h4 className='mb-3'>Shipping Address</h4>

                        <form action="" className='d-flex justify-content-between flex-wrap gap-15'>
                            <div className='w-100'>
                                <select name="" id="" className='form-control form-select'>
                                    <option value="" selected disabled>Select Country</option>
                                </select>
                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" className='form-control' placeholder='First Name'/>
                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" className='form-control' placeholder='Last Name'/>
                            </div>

                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Address'/>
                            </div>

                            <div className='w-100'>
                                <input type="text" className='form-control' placeholder='Apartment, Suite, etc.'/>
                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" className='form-control' placeholder='City'/>
                            </div>

                            <div className='flex-grow-1'>
                                <select name="" id="" className='form-control form-select'>
                                    <option value="" selected disabled >Select State</option>
                                </select>
                            </div>

                            <div className='flex-grow-1'>
                                <input type="text" className='form-control' placeholder='Zip Code'/>
                            </div>

                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/cart" className='text-dark'>
                                        <BiArrowBack className='me-2'/>
                                        Return To Cart
                                    </Link>
                                    <Link to="/cart" className='button'>Continue To Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className='border-bottom py-4'>
                        <div className="d-flex align-items-center gap-10 mb-2">
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span style={{top: "-10px", right:"2px"}} className="badge bg-secondary text-white rounded-circle position-absolute p-2">
                                        1
                                    </span>
                                    <img src={watch} alt="" className='img-fluid'/>
                                </div>

                                <div>
                                    <h5 className="total-price">gfdhgf</h5>
                                    <p className='total-price'>s / #agfgfd</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <h5 className='total'>$ 100</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>SubTotal</p>
                            <p className='total-price'>$ 100000</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$ 100000</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$ 100000</h5>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout