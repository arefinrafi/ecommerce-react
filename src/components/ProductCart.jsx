import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const ProductCart = ({grid}) => {

    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}` }>
                <Link to='/product/:id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    
                    <div className="product-image">
                        <img src={watch} alt="watch" className='img-fluid' />
                        <img src={watch2} alt="watch-1" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>

                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />

                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur ad soluta velit voluptate tempora voluptatem error provident, repellat nostrum.
                        </p>

                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt="prodcompare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}` }>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    
                    <div className="product-image">
                        <img src={watch} alt="watch" className='img-fluid' />
                        <img src={watch2} alt="watch-1" className='img-fluid' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>

                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />

                        <p className={`description ${grid === 12} ? "d-block" : "d-none" `}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur ad soluta velit voluptate tempora voluptatem error provident, repellat nostrum.
                        </p>

                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt="prodcompare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCart