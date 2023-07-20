import React, { useState,useEffect } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'
import { getInfodatas } from '../../../api/httpsrequests'
function Home() {
  const[use,setUse]=useState()
  useEffect(()=>{
    getInfodatas().then((data)=>{
      setUse(data)
      console.log(data)
    })
  },[])
  return (
    <>
      <main>
        <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
        <h1>Where will you go next?</h1>
        <p>Welcome to Trawell, a WordPress theme carefully crafted for travelers and adventurers. Pack your bags, hit the road and don't forget to write down all of your amazing stories!</p>
      </main>

      <div className="sentences">
        <h1>Most Popular Tours</h1>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium.
        </p>
        <p>
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type.
        </p>
      </div>

      <div className='cards'>
        <div className='card'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-11.jpg" alt="mycardimage" />
          <div class="overlay">
            <div className='pop-tour'>
              <h3>Highlights Of Vietnam</h3>
              <h3><span>$</span>1430</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero…</p>
            <div className='par-cash'>
              <Link><i class="fa-solid fa-parachute-box"></i></Link>
              <Link><i class="fa-solid fa-wallet"></i></Link>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/vietnam-image-gallery-2.jpg" alt="mycardimage" />
          <div class="overlay">
            <div className='pop-tour'>
              <h3>Highlights Of Vietnam</h3>
              <h3><span>$</span>1430</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero…</p>
            <div className='par-cash'>
              <Link><i class="fa-solid fa-parachute-box"></i></Link>
              <Link><i class="fa-solid fa-wallet"></i></Link>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/vietnam-image-gallery-2.jpg" alt="mycardimage" />
          <div class="overlay">
            <div className='pop-tour'>
              <h3>Highlights Of Vietnam</h3>
              <h3><span>$</span>1430</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero…</p>
            <div className='par-cash'>
              <Link><i class="fa-solid fa-parachute-box"></i></Link>
              <Link><i class="fa-solid fa-wallet"></i></Link>
            </div>
          </div>
        </div>
      </div>


      <div className='line-p'>WHERE I'VE BEEN</div>
      <div className='iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26728459.75101552!2d27.561881!3d35.137876!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sus!4v1689767590395!5m2!1str!2sus" style={{ width: 1100, height: 600, border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* <div className='data'>
        <div className='info-div'>
          <div>
            <h1 style={{ textAlign: "center" }}>6</h1>
            <p>Continents visited</p>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>54</h1>
            <p>Countries visited</p>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>26<span>k</span></h1>
            <p>Miles traveled</p>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>678</h1>
            <p>Days traveling</p>
          </div>
        </div>
      </div> */}
      <div className="sentences">
        <h1>Useful Information</h1>
        <div className="line"></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <p>
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type.
        </p>
      </div>

      <div className='my-cards'>
        {use && use.map((usedata)=>(
        <div key={usedata._id} className='my-card'>
        <img src={usedata.useimg} alt="mycardimage" />
        <h2>{usedata.usename}</h2>
        <p>{usedata.usedesc}</p>
      </div>
        ))}
      </div>
    </>

  )
}

export default Home