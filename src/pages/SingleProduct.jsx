import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCart from '../components/ProductCart'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../components/Container'

const SingleProduct = () => {

    const [orderedProduct, setOrderedProduct] = useState(true)
    const props = {width: 600, height: 500, zoomWidth: 500, img: "https://5.imimg.com/data5/SELLER/Default/2022/2/EK/LO/GR/79306562/whatsapp-image-2022-02-04-at-11-53-46-pm-1000x1000.jpeg"};
    const copyToClipboard = (text) => {
        // console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />

            <Container class1="main-product-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>

                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div>
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/IZ/DN/YN/5019689/fossil-leather-brown-watch-500x500.jpg" className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/IZ/DN/YN/5019689/fossil-leather-brown-watch-500x500.jpg" className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/IZ/DN/YN/5019689/fossil-leather-brown-watch-500x500.jpg" className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/IZ/DN/YN/5019689/fossil-leather-brown-watch-500x500.jpg" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>Kids Headdphones Bulk 10 Pack Multi Colored For Students</h3>
                            </div>

                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>

                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars 
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor='#ffd700'
                                    />
                                    <p className="mb-0 t-review">( 2 Reviews )</p>
                                </div>

                                <a className='review-btn' href='#review'>Write a Review</a>
                            </div>

                            <div className="border-bottom py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3>
                                    <p className='product-data'>Watch</p> 
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3> 
                                    <p className='product-data'>Havels</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3> 
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3> 
                                    <p className='product-data'>watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availability :</h3> 
                                    <p className='product-data'>In Stock</p>
                                </div>

                                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3> 
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3> 
                                    <Color />
                                </div>
                                <div className='d-flex flex-row align-items-center gap-15 mt-2 mb-3 ms-5'>
                                    <h3 className='product-heading'>Quantity :</h3> 
                                    <div>
                                        <input type="number" name="" id="" min={1} max={10} style={{ width: "100px" }} className="form-control" />
                                    </div>

                                    <div className='d-flex align-items-center gap-30'>
                                        <button className="button border-0" type='submit'>Add To Cart</button>
                                        <button className="button signup">Buy It Now</button>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <Link to=''><TbGitCompare className='fs-5 me-2'/> Add To Compare</Link>
                                    </div>
                                    <div>
                                    <Link to=''><AiOutlineHeart className='fs-5 me-2'/> Add To Wishlist</Link>
                                    </div>
                                </div>

                                <div className='d-flex flex-column gap-10 my-3'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                    <p className='product-data'>Free shipping and returns available on all orders! we ship all US domestic orders within <b>5-10 business days!</b></p> 
                                </div>

                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link :</h3>

                                    <Link onClick={() => {copyToClipboard("https://5.imimg.com/data5/SELLER/Default/2022/2/EK/LO/GR/79306562/whatsapp-image-2022-02-04-at-11-53-46-pm-1000x1000.jpeg");}}>Copy Product Link</Link>

                                    {/* <button onClick={() => {copyToClipboard("https://5.imimg.com/data5/SELLER/Default/2022/2/EK/LO/GR/79306562/whatsapp-image-2022-02-04-at-11-53-46-pm-1000x1000.jpeg");}}>Copy Product Link</button> */}
                                    
                                    {/* <a href="javascript:void(0)" onClick={() => {copyToClipboard("https://5.imimg.com/data5/SELLER/Default/2022/2/EK/LO/GR/79306562/whatsapp-image-2022-02-04-at-11-53-46-pm-1000x1000.jpeg");}}>
                                        Copy Product Link
                                    </a>  */}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="description-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque ipsa, voluptatibus architecto cupiditate, tenetur quasi ipsum laudantium quas excepturi doloremque molestiae nam omnis ratione corporis doloribus tempore provident praesentium?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="reviews-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor='#ffd700' />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                
                                {orderedProduct && 
                                (
                                    <div>
                                        <Link to='' className='text-dark text-decoration-underline'>Write a Review</Link>
                                    </div>
                                )
                                }
                                
                            </div>

                            <div id='review' className="review-form py-4">

                                <h4>Write a Review</h4>
                                
                                <form action="" className='d-flex flex-column gap-15'>
                                    
                                    <div>
                                        <ReactStars count={5} size={24} value={4} edit={true} activeColor='#ffd700' />
                                    </div>

                                    <div>
                                        <textarea name="" id="" cols="30" rows="4" className='w-100 form-control' placeholder='Comments'></textarea>
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>

                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex align-items-center gap-10">
                                        <h6 className='mb-0'>Shajid</h6>
                                        <ReactStars 
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        
                                    </div>

                                    <p className='mt-3'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus nam non repellendus, nobis necessitatibus vitae dignissimos praesentium quam consequuntur? Nisi laborum magnam reprehenderit saepe et ex a ea unde?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="popular-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCart />
                </div>
            </Container>
        </>
  )
}

export default SingleProduct