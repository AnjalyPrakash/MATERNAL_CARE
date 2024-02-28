import React from 'react'
import '../Client/ClientRegister.css'
import { Col, Row } from 'react-bootstrap'
function ClientRegister() {
    return (
        <>
       <div className='client_div' style={{width:'100%',height:'100vh'}}>
        <Row >
            <Col md={7}></Col>
            <Col md={5} className='mt-3 d-flex justify-content-center align-items-center flex-column'>
                <div className='register_div mt-5 d-flex justify-content-center align-items-center flex-column'>
                    <h3 className='text-white'>Client Registration</h3>
                    <input type="text" placeholder='Username' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-5'/>
                    <input type="email" placeholder='Email Address' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'/>
                    <input type="password" placeholder='Password' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'/>
                    <input type="tel" placeholder='Phone Number' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'/>
                    <textarea className='rounded form-control w-50' style={{borderRadius:'50px'}} placeholder='Address' cols="5" rows="5"></textarea>
                    <button className='w-50 mt-3 btn btn-danger' style={{borderRadius:'50px'}}>REGISTER</button>
                </div>
            </Col>
        </Row>
       </div>
           
        </>
    )
}

export default ClientRegister