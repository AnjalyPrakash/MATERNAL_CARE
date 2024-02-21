import React from 'react'
import '../Home/Home.css'

function Home() {
  return (
    <>
      <div className='bg-image'>
        <div><h2><i class="fa-solid fa-circle-user"></i></h2></div>
          <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'90vh'}}>
            <h1 className='text-light  fw-bold' >Welcome to the wonder of motherhood.</h1>
            <button className='btn btn-danger w-25' style={{borderRadius:'50px'}}>Login</button>
          </div>
      </div>
    </>
  )
}

export default Home