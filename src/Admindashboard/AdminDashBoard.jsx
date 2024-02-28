import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import '../Admindashboard/AdminDashBoard.css'
import { useState } from 'react';



function AdminDashBoard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='top_nav mb-2' style={{width:'100%',height:'60px'}}>
    <Row className="d-flex justify-content-between align-items-center">
        <Col md={4}>
            <Dropdown>
                <Dropdown.Toggle className='ms-2 mt-2 mb-2' onClick={handleShow} variant="dark" id="dropdown-basic">
                    <i class="fa-solid fa-bars"></i>
                </Dropdown.Toggle>
            </Dropdown>
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center'>
            <h3>Welcome Admin</h3>
        </Col>
        <Col md={4} className='mt-2 d-flex justify-content-end'>
            <button className='dash_btn btn me-2 text-white'>Logout <i class="fa-solid fa-power-off ms-2"></i></button>
        </Col>
    </Row>
</div>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default AdminDashBoard