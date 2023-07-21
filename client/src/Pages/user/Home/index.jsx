import React, { useState, useEffect } from 'react'
import "./home.scss"
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom'
import { getInfodatas, getpoptourdatas } from '../../../api/httpsrequests'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

function Home() {
  const [use, setUse] = useState([])
  const [poptour, setPoptour] = useState([])
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(true);
  useEffect(() => {
    getInfodatas().then((data) => {
      setUse(data)
      console.log(data)
    })
  }, [])
  function handleSearch(e) {
    setInput(e.target.value);
  }
  function handleSort() {
    if (sort === true) {
      setPoptour(poptour.sort((x, y) => x.poptoursprice - y.poptoursprice));
      setSort(false);
    } else {
      setSort(true);
      setPoptour(poptour.sort((x, y) => y.poptoursprice - x.poptoursprice));
    }
  }
  useEffect(() => {
    getpoptourdatas().then((data) => {
      setPoptour(data)
      console.log(data)
    })
  }, [])
  return (
    <>
      <main>
        <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
        <h1>Where will you go next?</h1>
        <p>Welcome to Trawell, a WordPress theme carefully crafted for travelers and adventurers. Pack your bags, hit the road and don't forget to write down all of your amazing stories!</p>
      </main>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}><img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/themes/trawell/assets/img/asseen.jpg" alt="img" /></div>

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
      <div className="search-sort">
        <TextField
          onChange={(e) => handleSearch(e)}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <button onClick={handleSort} >
          Sort By Price
        </button>
      </div>
      <div className='cards'>
        {poptour && poptour.filter((item) => {
          if (item === "") {
            return poptour;
          } else if (
            item.poptoursname
              .toLowerCase()
              .trim()
              .includes(input.toLowerCase().trim())
          ) {
            return item;
          }
          return null;
        })
          .map((poptourdata) => (
            <div key={poptourdata._id} className='card'>
              <Link to={`/detailpop/${poptourdata._id}`} ><img src={poptourdata.poptoursimg} alt="mycardimage" /></Link>
              <div class="overlay">
                <div className='pop-tour'>
                  <h3>{poptourdata.poptoursname}</h3>
                  <h3><span>$</span>{poptourdata.poptoursprice}</h3>
                </div>
                <p>{poptourdata.poptoursdesc}</p>
                <div className='par-cash'>
                  <Link to={`/detailpop/${poptourdata._id}`}  ><i class="fa-solid fa-parachute-box"></i></Link>
                  {/* <Link ><i class="fa-solid fa-wallet"></i></Link> */}
                </div>
              </div>
            </div>
          ))}
      </div>

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
        {use && use.map((usedata) => (
          <div key={usedata._id} className='my-card'>
            <img src={usedata.useimg} alt="mycardimage" />
            <h2>{usedata.usename}</h2>
            <p>{usedata.usedesc}</p>
          </div>
        ))}
      </div>
      <div className='slider'>
        <Swiper
          slidesPerView={4}
          spaceBetween={80}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          className="mySwiper"
        >
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-7.png" alt="sliderimg" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-8.png" alt="sliderimg" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-9.png" alt="sliderimg" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-10.png" alt="sliderimg" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-1.png" alt="sliderimg" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-2.png" alt="sliderimg" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "130px", height: 130 }} src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/carousel-1-3.png" alt="sliderimg" /></SwiperSlide>
        </Swiper>
      </div>
      <div className='line-p'>WHERE I'VE BEEN</div>
      <div className='iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26728459.75101552!2d27.561881!3d35.137876!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sus!4v1689767590395!5m2!1str!2sus" style={{ width: 1100, height: 600, border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>

  )
}

export default Home