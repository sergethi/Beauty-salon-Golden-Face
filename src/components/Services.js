import React from 'react'

function Services() {
  return (
    <section section className = "home">
      <h1>Our Services</h1>
      {/* <hr></hr> */}
      <div className = "services-container">

        <div className = "services-items">
          <div className = "pic1"></div>
          <div className = "text1">
             <h3>Hair Care</h3>
          </div>
         
        </div>

        <div className = "services-items">
          <div className = "pic2"></div>
          <div className = "text2">
             <h3>Nail Care</h3>
          </div>
          
        </div>

        <div className = "services-items">
          <div className = "pic3"></div>
          <div className = "text3">
             <h3>Makeup</h3>
          </div>
          
        </div>

      </div>
      
    </section>
  )
}

export default Services
