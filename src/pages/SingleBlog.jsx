import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Container from '../components/Container'

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title="Dynamic Blog Name" />

        <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/> Back to Blogs</Link>
                        
                        <h3 className="title">
                            A Beautiful Sunday Renaissance
                        </h3>
                        <img src="images/blog-1.jpg" alt="blog-1" className='img-fluid w-100' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit minus maiores doloribus alias, repellat ipsam architecto tempora vero molestiae placeat voluptates dignissimos sint repellendus. Consequatur officia deserunt magnam tempora optio deleniti, corporis repudiandae et dolore? Expedita maiores inventore soluta repellendus ipsum laudantium, tempore cumque, maxime porro sequi sapiente aspernatur provident? Sed ratione provident autem vel, ut illum? Ex, ea quis!</p>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default SingleBlog