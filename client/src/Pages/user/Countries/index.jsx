import React, { useState, useEffect } from 'react'
import "./countres.scss"
import { getcountriesdatas } from '../../../api/httpsrequests'
import { Link } from 'react-router-dom'
function Countries() {
  const [country, setCountry] = useState([])
  useEffect(() => {
    getcountriesdatas().then((data) => {
      setCountry(data)
      console.log(data)
    })
  }, [])
  return (
    <>
      <div className='countries-count'>
        <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
        <h1>Countries</h1>
      </div>
      <div className='voyage'>
        <div><p style={{ color: "gray", fontSize: "23px" }}>Voyage / A Reasonable Place To Visit</p></div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link><div><i style={{ color: "blue" }} class="fa-brands fa-facebook-f"></i> Facebook</div></Link>
          <Link><div><i style={{ color: "lightblue" }} class="fa-brands fa-twitter"></i> Twitter</div></Link>
        </div>
      </div>

      <div className="sentences-count">
        <h1>Look Your Countries</h1>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium.
        </p>
        <p>
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type.
        </p>
      </div>

      <div className='cards-count'>
        {country && country.map((countrydata) => (
          <div key={countrydata._id} className='card-count'>
            <img src={countrydata.countriesimg} alt="mycardimage" />
            <div class="overlay">
              <h2>{countrydata.countriesname}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Countries