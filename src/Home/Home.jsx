import React from 'react'
import '../Home/Home.css'
import logo from '../Images/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../Images/img2.png'
import img2 from '../Images/img3.png'
import img7 from '../Images/img7.png'
import img5 from '../Images/img5.png'

function Home() {
  return (
    <>
      <div className='bg-image'>
        <div className='d-flex '>
          <img src={logo} style={{ height: '150px', width: '150px' }} alt="no image" />
          {/* <h1 className='ms-auto me-5 mt-3 text-warning'><i class="fa-solid fa-circle-user"></i></h1>     */}
          <Dropdown className='ms-auto me-5 mt-3' style={{ height: '50px', width: '50px', borderRadius: '25px' }}>
            <Dropdown.Toggle className='mt-2 me-2' style={{ backgroundColor: ' rgba(0, 0, 0, 0)', height: '50px', width: '50px', borderRadius: '25px', borderColor: 'rgba(0, 0, 0, 0)' }} id="dropdown-basic" >
              <h1 className=' text-secondary'><i class="fa-solid fa-circle-user"></i></h1>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Service Provider</Dropdown.Item>
              <Dropdown.Item href=''>Client</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5' >
          <h1 className='text-light  fw-bold mt-5' >Welcome to the wonder of motherhood.</h1>
          <Link to={'/login'} className=' d-flex justify-content-center align-items-center' style={{ textDecoration: 'none' }}><button className='btn border text-light w-100' >Get Started</button></Link>
        </div>
      </div>

      <div className='container mt-5 mb-4'>
        <Row>
          <Col md={6}>
            <img src="https://images.pexels.com/photos/3398674/pexels-photo-3398674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '360px', width: '100%' }} alt="no image" />
          </Col>
          <Col md={6}>
            <h3 className='text-center fw-bold mt-3'>About Us</h3>
            <hr />
            <p className='text-center mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quisquam rerum doloremque molestiae consequatur sint harum possimus cupiditate aliquam excepturi? Ea enim non suscipit quas at odit, doloribus minima numquam! <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus in fugit maxime enim, corrupti quae temporibus voluptate tenetur? Quia dolor minus quibusdam enim sed provident eveniet possimus vel id repellendus. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequuntur eaque nulla voluptatibus obcaecati vel cumque libero nobis quos, omnis explicabo excepturi molestias laborum asperiores, nihil quia veniam labore pariatur?</p>
            <h4 className='text-center fw-bold'>Personalized maternity care,<br /> tailored to your needs.</h4>
          </Col>
        </Row>
      </div>

      <Container>
        <Row>
          <h2 className='text-center mt-4 mb-4'>Our Services</h2>
          <Col md={3} className='text-center mt-3'>
            <img src={img1} style={{ height: '80px ', width: '80px' }} alt="no image" />
            <h4>Pregnancy Care</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.acm libero.</p>
          </Col>
          <Col md={3} className='text-center mt-3'>
            <img src={img7} style={{ height: '80px ', width: '90px' }} alt="no image" />
            <h4>Therapy</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.acm libero.</p>
          </Col>
          <Col md={3} className='text-center mt-3'>
            <img src={img5} style={{ height: '80px ', width: '80px' }} alt="no image" />
            <h4>Doctor Checkup</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.acm libero.</p>
          </Col>
          <Col md={3} className='text-center mt-3'>
            <img src={img2} style={{ height: '80px ', width: '80px' }} alt="no image" />
            <h4>Post Pregnancy Care</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.acm libero.</p>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <Col md={6}>
              <img src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:'300px',width:'100%'}} alt="" />
          </Col>
          <Col md={6} className='mt-5'>
            <h3 className='fw-bold'>Contact Us</h3>
            <h5 className='mt-3 '><i class="fa-solid fa-location-dot me-4" style={{color:'rgb(26, 87, 109)'}}></i>K C Tower, CSEZ, Seaport - Airport Rd near , <br /> <span className='ms-5'>Kakkanad, Ernakulam, Kerala 682037</span></h5>
            <h5 className='mt-3 '><i class="fa-solid fa-phone me-4" style={{color:'rgb(26, 87, 109)'}}></i>+91 8921951119</h5>
            <h5 className='mt-3 '><i class="fa-solid fa-envelope me-4" style={{color:'rgb(26, 87, 109)'}}></i>maternitycare@gmail.com</h5>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Home