import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import '../Admindashboard/AdminDashBoard.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TextField from '@mui/material/TextField';




function AdminDashBoard() {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
  
    const handleCloseLeft = () => setShowLeft(false);
    const handleShowLeft = () => setShowLeft(true);
  
    const handleCloseRight = () => setShowRight(false);
    const handleShowRight = () => setShowRight(true);


    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  

  return (
    <>
    <div className='top_nav ' style={{width:'100%',height:'60px'}}>
    <Row className="d-flex justify-content-between align-items-center">
        <Col md={4}>
            <Dropdown>
                <Dropdown.Toggle className='ms-2  mb-2' onClick={handleShowLeft} variant="dark" id="dropdown-basic">
                    <i class="fa-solid fa-bars"></i>
                </Dropdown.Toggle>
            </Dropdown>
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center'>
            <h3>Welcome Admin</h3>
        </Col>
        <Col md={4} className=' d-flex justify-content-end'>
      <button className='btn' onClick={handleShowRight}><h1 className=' text-dark me-2 '><i class="fa-solid fa-circle-user"></i></h1></button> 

        </Col>
    </Row>
    </div>
    {/* home section desings */}
    <div className='admin_home' style={{width:'100%',height:'100vh'}}>
      <Row className='d-flex justify-content-center align-items-center '>
        <Col md={1}></Col>
        <Col  md={10} className='d-flex justify-content-center align-items-center mt-5'>
          <div className='img_div rounded shadow bg-white' style={{height:'560px',width:'100%',borderRadius:'30%'}}>

          <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img style={{height:'560px',width:'100%'}} src='https://images.pexels.com/photos/3270224/pexels-photo-3270224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'   />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'560px',width:'100%'}} src="https://images.pexels.com/photos/3875083/pexels-photo-3875083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'560px',width:'100%'}} src="https://images.pexels.com/photos/7282837/pexels-photo-7282837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </Carousel.Item>
      </Carousel>

          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>

    {/* side bar of admin */}

        <Offcanvas show={showLeft} onHide={handleCloseLeft} placement="start">
        <Offcanvas.Header className='side_bar bg-dark' closeButton>
          <Offcanvas.Title >Left Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='side_bar bg-dark'>
          This offcanvas comes from the left side.
        </Offcanvas.Body>
      </Offcanvas>

      {/*profile side bar  */}
 
      <Offcanvas show={showRight} onHide={handleCloseRight} placement="end">
        <Offcanvas.Header className='bg-dark d-flex' closeButton>
          <Offcanvas.Title className='text-white'>Admin Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-dark'>
         <div className='ms-5' style={{backgroundColor:'black',height:'400px',width:'300px',borderRadius:'5%'}}>
            <div className='d-flex align-items-center justify-content-center mt-4'>
              <label htmlFor="admin_profile">
                <input id='admin_profile' type="file" style={{display:'none'}} />
                <img className='mt-2' src="https://tse3.mm.bing.net/th?id=OIP.2hAVCZRMcBjsE8AGQfWCVQHaHa&pid=Api&P=0&h=180" style={{width:'100px',height:'100px',borderRadius:'50%'}}  alt="" />
              </label>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-2'>
            <p className='text-white'>ADD PICTURE</p>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-2'>
            <TextField className='bg-white' id="filled-basic" type='email' label="email" variant="filled" />
            </div>

            <div className='d-flex align-items-center justify-content-center mt-2'>
            <TextField className='bg-white' id="filled-basic" type='password' label="password" variant="filled" />
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <button className='btn btn-info' style={{borderStyle:'dotted'}}>Update Profile</button>
            </div>
         </div>
        </Offcanvas.Body>
      </Offcanvas>

      

      
    </>
  )
}

export default AdminDashBoard