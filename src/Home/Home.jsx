import React from 'react'
import '../Home/Home.css'
import logo from '../Images/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='bg-image'>
        <div className='d-flex '>
          <img src={logo} style={{ height: '150px', width: '150px' }} alt="" />
          {/* <h1 className='ms-auto me-5 mt-3 text-warning'><i class="fa-solid fa-circle-user"></i></h1>     */}
          <Dropdown className='ms-auto me-5 mt-3' style={{ height: '50px', width: '50px', borderRadius: '25px' }}>
          <Dropdown.Toggle className='mt-2 me-2' style={{ backgroundColor: ' rgba(0, 0, 0, 0)', height: '50px', width: '50px', borderRadius: '25px', borderColor: 'rgba(0, 0, 0, 0)'}} id="dropdown-basic" >
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
          <Link to={'/login'} className=' d-flex justify-content-center align-items-center' style={{textDecoration:'none' }}><button className='btn border text-light w-100' >Get Started</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home