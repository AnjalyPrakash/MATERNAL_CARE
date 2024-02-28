import React from 'react'
import '../Client/ClientRegister.css'
import { Col, Row } from 'react-bootstrap'
function ClientRegister() {
    return (
        <>
       <div className='client_div' style={{width:'100%',height:'100vh'}}>
        <Row >
            <Col lg={4}></Col>
            <Col lg={8} className='mt-5 d-flex justify-content-center align-items-center'>
                <div className='register_div rounded'   style={{width:'700px',height:'500px',backgroundColor:'yellow'}}>
                    

                </div>
            </Col>
        </Row>

       </div>
           
        </>
    )
}

export default ClientRegister