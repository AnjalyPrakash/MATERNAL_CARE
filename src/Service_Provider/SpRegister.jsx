import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SpRegister() {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
            <Container>
                <Row className='rounded shadow'>
                    <Col md={6}>
                        <img src="https://drnupurakashikar.com/resources/assets/images/services/maternal-care.jpeg" alt="no image" style={{height:'500px',width:'100%'}} className='p-2'/>
                    </Col>
                    <Col md={6}>
                        <h3 className='text-center mt-3'>Server Provider Registration</h3>
                        <input type="text" className='form-control mt-3' placeholder='Username'/>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default SpRegister