import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Sign Up</h3>

              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="text" name='name' placeholder='Name' />
                <CustomInput type="email" name='email' placeholder='Email' />
                <CustomInput type="tel" name='mobile' placeholder='Mobile Number' />
                <CustomInput type="password" name='password' placeholder='Password' />

                {/* <div>
                  <input type="text" name='name' className="form-control" placeholder='Name' />
                </div> */}

                <div>
                  <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                    <button className='button border-0'>Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp