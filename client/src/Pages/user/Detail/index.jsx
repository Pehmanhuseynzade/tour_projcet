import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import "./detail.scss"
// import { gettourdatasID } from "../../../api/httpsrequests";
import { Button } from "@mui/material";
import axios from "axios";
function Detail() {
  const [tour, setTour] = useState({})
  const params = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get(`http://localhost:7374/api/traveltour/${params.id}`);
    setTour(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getData();
  });
  return (
    <>
      <div className='tour-det'>
        <img src={tour.toursimg} alt="mainimage" />
        <h1>{tour.toursname}</h1>
      </div>
      <div className='voyage'>
        <div><p style={{ color: "gray", fontSize: "23px" }}>Voyage / A Reasonable Place To Visit</p></div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link><div><i style={{ color: "blue" }} class="fa-brands fa-facebook-f"></i> Facebook</div></Link>
          <Link><div><i style={{ color: "lightblue" }} class="fa-brands fa-twitter"></i> Twitter</div></Link>
        </div>
      </div>
      <div className="det-pay">
        <div className="det-info">
          <div className="name-price">
            <h2 className="tourname">{tour.toursname}</h2>
            <h2><span style={{ color: "#40c1b9" }}>$</span><span style={{ color: "#40c1b9" }}>{tour.toursprice}</span><span style={{ color: "gray", fontSize: "17px", fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>/{tour.toursdate}</span></h2>
          </div>
          <p style={{ paddingTop: "30px", fontFamily: "sans-serif", color: "gray" }}>{tour.toursdesc}</p>
          <p style={{ paddingTop: "30px", fontFamily: "sans-serif", color: "gray" }}>Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.</p>
        </div>
        <div className="payment">
          <form>
            <h2>BOOK THIS TOUR</h2>
            <input placeholder="First Name" style={{ width: 300, height: 35, paddingLeft: "10px", color: "gray" }} type="text" />
            <input placeholder="Last Name" style={{ width: 300, height: 35, paddingLeft: "10px", color: "gray" }} type="text" />
            <input placeholder="Email" style={{ width: 300, height: 35, paddingLeft: "10px", color: "gray" }} type="text" />
            <h2>Card Information</h2>
            {/* NUMBER ETT */}
            <input placeholder="Card Number" style={{ width: 300, height: 30, paddingLeft: "10px", color: "gray" }} type="text" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input placeholder="Date" style={{ width: 150, height: 30, paddingLeft: "10px", color: "gray" }} type="text" />
              <input placeholder="Cvv" style={{ width: 150, height: 30, paddingLeft: "10px", color: "gray" }} type="text" />
            </div>
            <input placeholder="Card Name" style={{ width: 300, height: 30, paddingLeft: "10px", color: "gray" }} type="text" />
            <button type="submit">Pay</button>
          </form>
        </div>
      </div>
      {/* <div className='tour-cards'>
  
          <div key={tour._id} className='my-card'>
            <img src={tour.toursimg} alt="mycardimage" />
            <div className='overlay'></div>
            <div className='sale'>
              <h2>{tour.toursname}</h2>
              <h2 className='blue'><span>$</span>{tour.toursprice}</h2>
            </div>
            <p className='desc'>{tour.toursdesc}</p>
            <div className='statistic-icon'>
              <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}><i class="fa-regular fa-calendar"></i><p>{tour.toursday}</p><span style={{ color: "gray" }}>days</span></div>
              <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}><p>{tour.toursdate}</p></div>
              <button style={{ marginLeft: 50 }} className='btn'>Order</button>
            </div>
          </div>
          <Button onClick={() => {
              navigate(-1)
            }} variant="contained">Go back</Button>
      </div> */}
    </>
  )
}

export default Detail