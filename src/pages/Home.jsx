import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCart from '../components/BlogCart';
import ProductCart from '../components/ProductCart';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img className='img-fluid rounded-3' src="images/main-banner-1.jpg" alt="main-banner" />

              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>IPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-01.jpg" alt="catbanner-1" />

                <div className="small-banner-content position-absolute">
                  <h4>Best Sell</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 or <br />  $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-02.jpg" alt="catbanner-2" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad AIR</h5>
                  <p>From $599.00 or <br /> $49.91/mo. for 12 mo</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-03.jpg" alt="catbanner-3" />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br />  styles and colors.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img className='img-fluid rounded-3' src="images/catbanner-04.jpg" alt="catbanner-4" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelty playback & <br /> ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              }

              
              
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="Headphone" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="speaker" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="Headphone" />
              </div>

              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="speaker" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Featured Collection
            </h3>
          </div>

          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </Container>

      <Container class1="famous-wrapper home-wrapper-w py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-01.webp" alt="famous" className='img-fluid' />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
              
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-02.webp" alt="famous" className='img-fluid' />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5K Retina display</p>
              </div>
              
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-03.webp" alt="famous" className='img-fluid' />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>smartphones</h5>
                <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24mo. Footnote*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-04.webp" alt="famous" className='img-fluid' />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>home speakers</h5>
                <h6 className='text-dark'>Room-filling Sound.</h6>
                <p className='text-dark'>From $999.00 or $116.58/mo. for 12mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Special Products
            </h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
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
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </Container>

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand-1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand-2" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand-3" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand-4" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand-5" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand-6" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand-7" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand-8" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Our Latest Blogs
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <BlogCart />
          </div>
          <div className="col-3">
            <BlogCart />
          </div>
          <div className="col-3">
            <BlogCart />
          </div>
          <div className="col-3">
            <BlogCart />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home