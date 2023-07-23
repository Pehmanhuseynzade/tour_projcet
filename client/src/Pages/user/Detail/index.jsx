import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./detail.scss";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import Swal from "sweetalert2"
import axios from "axios";

function Detail() {
  const [tour, setTour] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [datecvv, setDateCvv] = useState("");

  const getData = async () => {
    const res = await axios.get(`http://localhost:7374/api/traveltour/${params.id}`);
    setTour(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmitPost = async (e) => {
    e.preventDefault();

    // Assuming tour is an object, not an array
    const payment = {
      paymenttourName: tour.toursname,
      paymenttourPrice: tour.toursprice,
      paymenttourDesc: tour.toursdesc,
      paymenttourImage : tour.toursimg  
    };

    try {
      const response = await axios.post(
        "http://localhost:7374/api/payment",
        payment
      );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        // toast.success("Payment successfully!", {
        //   autoClose: 1000
        // });
        navigate("/");
        window.location.reload();
      }, 3000);
    } catch (error) {
      // Handle the error
    }
  };
  const formatCardNumber = (input) => {
    const cardNumberWithoutSpaces = input.replace(/\s/g, "");

    const formattedCardNumber = cardNumberWithoutSpaces.replace(
      /(.{4})/g,
      "$1 "
    );

    setCardNumber(formattedCardNumber);
  };
  const handleCardNumberChange = (e) => {
    // Girilen değeri formatlamak için her karakter değişikliğinde formatCardNumber fonksiyonunu çağır
    formatCardNumber(e.target.value);
  };
  const handleDateInput = (e) => {
    const inputDate = e.target.value.replace(/\s/g, "");

    if (inputDate.length > 5) {
      // En fazla 4 karakter alıyoruz (MM/YY)
      setDate(inputDate.slice(0, 5));
    } else {
      setDate(inputDate);
    }
  };
  const handleDateInputCvv = (e) => {
    const inputDate = e.target.value.replace(/\s/g, "");

    if (inputDate.length > 3) {
      setDateCvv(inputDate.slice(0, 3));
    } else {
      setDateCvv(inputDate);
    }
  };

  return (
    <>
      <div className='tour-det'>
        <img src={tour.toursimg} alt="mainimage" />
        <h1>{tour.toursname}</h1>
      </div>
      <div className='voyage'>
        <div><p style={{ color: "gray", fontSize: "23px" }}>Voyage / A Reasonable Place To Visit</p></div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link><div><i style={{ color: "blue" }} className="fa-brands fa-facebook-f"></i> Facebook</div></Link>
          <Link><div><i style={{ color: "lightblue" }} className="fa-brands fa-twitter"></i> Twitter</div></Link>
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
            <input placeholder="Email" style={{ width: 300, height: 35, paddingLeft: "10px", color: "gray" }} type="email" />
            <h2>Card Information</h2>
            <input placeholder="Card Number" style={{ width: 300, height: 30, paddingLeft: "10px", color: "gray" }} 
            type="text"
            onChange={handleCardNumberChange}
              value={cardNumber} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input placeholder="Date" style={{ width: 150, height: 30, paddingLeft: "10px", color: "gray" }}
               type="text"
               onInput={handleDateInput}
              value={date}
              pattern="^(0[1-9]|1[0-2])\/\d{2}$" />
              <input placeholder="cvv" style={{ width: 150, height: 30, paddingLeft: "10px", color: "gray" }} type="text" 
              value={datecvv}
              onInput={handleDateInputCvv}
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"/>
            </div>
            <input placeholder="Card Name" style={{ width: 300, height: 30, paddingLeft: "10px", color: "gray" }} type="text" />
            <button
              onClick={handleFormSubmitPost}
              type="submit">Pay</button>
          </form>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}

export default Detail;
