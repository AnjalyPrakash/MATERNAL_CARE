import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../Images/logo.png'

function Footer() {
  return (
    <>
        <div className='footer'>
            <Row>
                <Col md={4}>
                    <img src={logo} style={{height:'100px',width:'100px'}} alt="no image" />
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Footer