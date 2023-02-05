import React from 'react'
import { Link } from 'react-router-dom'

const BlogCart = () => {
  return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" alt="blog-1" className='img-fluid w-100' />
            </div>

            <div className="blog-content">
                <p className="date">1 Jan 2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et corrupti harum est</p>
                <Link to="/blogs/:id" className="button">Read More</Link>
            </div>
        </div>
  )
}

export default BlogCart