import React from 'react'
import '../Login/Login.css'
import { Col, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import google from '../Images/google2.png'

function Login() {
  return (
    <>
    <Row>
     <div className='login_page' style={{width:'100%',height:'130vh'}}>
      <Row className='mt-5'>
        <Col lg={1}></Col>
        <Col lg={10} className='mt-5 d-flex justify-content-center align-items-center'> 
          <div className='shadow rounded login_body' style={{width:'75%',height:'550px',backgroundColor:'white'}}>
            <Row>
              <Col lg={6}>
                <div className='d-flex  justify-content-center align-items-center'>
                <h2  className='mt-4 ms-4' style={{color:'white'}}>
                    HELLO<br>
                    </br>WELCOME!
                  </h2>
                </div>
                <div className='mt-2 d-flex justify-content-center align-items-center'>
                  <img src="https://media.istockphoto.com/id/1341609914/vector/pregnant-couple-background-vector-illustration-with-a-husband-takes-care-and-hugs-his-wife.jpg?s=612x612&w=0&k=20&c=IZ7k7IktzY_x61KybAj2yBioHTLk6r86jafhB3ExN0E=" style={{width:'300px',height:'300px',borderRadius:'50%'}} alt="" />
                </div>
                <div className=' d-flex justify-content-center align-items-center mt-3 ms-3'>
                  <p style={{fontWeight:'bold',color:'blueviolet'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dignissimos amet hic sed iusto illum similique sit, animi quam  </p>
                </div>
              </Col>
         
              <Col lg={6}>
              <div className='mt-4 me-3 rounded' style={{height:'500px',backgroundColor:'white'}}>
                <div className='d-flex justify-content-center align-items-center'>
                  <h4 className='mt-3' style={{color:'blueviolet'}}>Login Your Account</h4>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <TextField className='w-75 mt-4' id="standard-basic" type='email' label="Email" variant="standard" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <TextField className='w-75 mt-4' id="standard-basic" type='password' label="Password" variant="standard" />
                </div>
                <div className='d-flex'>
                <input className='ms-5 mt-4' style={{width:'25px'}} type="checkbox"/>
                <h6 className='mt-4 ms-3'>Remember?</h6>
                <a href="" className='mt-4 ms-5'>forgot password?</a>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className='btn login_button rounded w-50 mt-4'>Login</button>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <p className='mt-3'>or connect with google</p>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-row '>
                  <div className='google d-flex justify-content-evenly rounded' style={{width:'50%',height:'50px'}}>
                    <img className='ms-4 mt-2 me-1' src={google} style={{width:'25px',height:'25px'}} alt="" />
                    <h6 className=' mt-2'>Sign in with google</h6>
                  </div>
                </div>
              </div>
              </Col>
            </Row>

          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
   
     </div>
    </Row>
    </>
  )
}

export default Login