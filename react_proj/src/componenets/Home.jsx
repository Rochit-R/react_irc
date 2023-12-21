import React from 'react'
import '../assets/css/Home.css'
const Home = () => {
  return (
    <div className='page'>
      <div style={{textAlign:'center'}}>
    <h1 style={{fontSize:'xx-large',fontWeight:'bolder'}}>Service At your Convinience</h1>
    <p style={{fontSize:'large'}}>Car care and maintenace can be a hefty affair with working weekdays and busy weekends. We have partnered with India’s best car servicing partners to fix your car</p>
  </div>
    <div className='flexx'>

      <div className='item'>
        <h3>Garage Services</h3>
        <p>For the fixes that require major overhauls or heavy equipments, our partners offer in-garage services from top qualified experts, all this with industry-best offers.
<p>✔️ Exciting offers and competitive pricing</p>
<p>✔️ Qualified service experts</p>
<p>✔️ Highly rated garages</p></p>
      </div>
      <div className='item'>
        <img src='https://ik.imagekit.io/driveu/Website_New/Garage-Services_D55G6HtfA.png' alt='' width={'350px'} height={'350px'}/>
      </div>
    </div>
    <br/>
    <br/>
    <div className='flexx'>

      <div className='item'>
        <h3>Genuine Spare Parts</h3>
        <p>Our partners offer genuine spare parts at very attractive prices. Your car gets the care it truly deserves. Equip your cars with only trusted spare parts.

<p>✔️ Improve your car performance
</p>
<p>✔️  Genuine & certified spares</p>
<p>✔️ Serviced by qualified experts</p></p>
      </div>
      <div className='item'>
        <img src='https://ik.imagekit.io/driveu/Website_New/Genuine-Spare-Parts_6ppNgloJ_.png' alt='' width={'350px'} height={'350px'}/>
      </div>
    </div>
    </div>
  )
}

export default Home