import React from 'react'
import { Col, Row } from 'react-bootstrap';


function ClientRegister() {
    return (
        <>
            <div className='container d-flex justify-content-center align-items-center shadow flex-column mt-5'>
                <Row>
                    <h3 className='text-center mt-3 mb-3'>Client Registration</h3>
                    <Col md={6}>
                        <img src="https://st4.depositphotos.com/31915596/38727/v/450/depositphotos_387279966-stock-illustration-mom-baby-heart-love-logo.jpg" style={{height:'400px'}} alt="no image" />
                    </Col>
                    <Col md={6} className='mt-5'>
                        <input type="text" placeholder='Username' className='mb-3 form-control' />
                        <input type="email" placeholder='Email' className='mb-3 form-control' />
                        <input type="password" placeholder='Password' className='mb-3 form-control' />
                        <input type="tel" placeholder='Phone Number' className='mb-3 form-control' />
                        <textarea placeholder='Address' cols="100" className='mb-3 form-control' rows="2"></textarea>
                    </Col>
                </Row>
                <button className='w-50 mb-4 btn btn-danger' style={{borderRadius:'50px'}}>Register</button>
            </div >
        </>
    )
}

export default ClientRegister