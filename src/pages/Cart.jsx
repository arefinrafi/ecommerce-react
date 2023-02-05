import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from "../images/watch.jpg";

const Cart = () => {
  return (
    <>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />

        <section className="cart-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-content-center py-3">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>

                        <div className="cart-data d-flex justify-content-between align-content-center py-3">
                            <div className='cart-col-1 d-flex align-items-center gap-15'>
                                <div className='w-25'>
                                    <img src={watch} alt="productimage" className='img-fluid' />
                                </div>
                                <div className='2-75'>
                                    <h5 className="title">GDffdhg</h5>
                                    <p className="color">hgf</p>
                                    <p className="size">gfd</p>
                                </div>
                            </div>
                            <div className='cart-col-2'></div>
                            <div className='cart-col-3'></div>
                            <div className='cart-col-4'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart