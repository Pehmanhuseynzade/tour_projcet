import React, { useState, useEffect } from 'react'
import "./tours.scss"
import { gettourdatas } from "../../../api/httpsrequests"
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";

function Tours() {
    const [tour, setTour] = useState([])
    const [input, setInput] = useState("");
    const [sort, setSort] = useState(true);
    useEffect(() => {
        gettourdatas().then((data) => {
            setTour(data)
            console.log(data)
        })
    })

    function handleSearch(e) {
        setInput(e.target.value);
    }
    function handleSort() {
        if (sort === true) {
            setTour(tour.sort((x, y) => x.toursprice - y.toursprice));
            setSort(false);
        } else {
            setSort(true);
            setTour(tour.sort((x, y) => y.toursprice - x.toursprice));
        }
    }
    return (
        <>
            <div className='countries-tours'>
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80" alt="mainimage" />
                <h1>Tours Page</h1>
            </div>

            <div className='voyage'>
                <div><p style={{ color: "gray", fontSize: "23px" }}>Voyage / A Reasonable Place To Visit</p></div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Link><div><i style={{ color: "blue" }} class="fa-brands fa-facebook-f"></i> Facebook</div></Link>
                    <Link><div><i style={{ color: "lightblue" }} class="fa-brands fa-twitter"></i> Twitter</div></Link>
                </div>
            </div>

            <div className="sentences-tours">
                <h1>You can choose tours</h1>
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
            <div className='tour-cards'>
                {tour && tour.filter((item) => {
              if (item === "") {
                return tour;
              } else if (
                item.toursname
                  .toLowerCase()
                  .trim()
                  .includes(input.toLowerCase().trim())
              ) {
                return item;
              }
              return null;
            })
            .map((tourdata) => (
                    <div key={tourdata._id} className='my-card'>
                        <Link to={`/detail/${tourdata._id}`} ><img src={tourdata.toursimg} alt="mycardimage" /></Link>
                        <div className='overlay'></div>
                        <div className='sale'>
                            <h2>{tourdata.toursname}</h2>
                            <h2 className='blue'><span>$</span>{tourdata.toursprice}</h2>
                        </div>
                        <p className='desc'>{tourdata.toursdesc}</p>
                        <div className='statistic-icon'>
                            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}><i class="fa-regular fa-calendar"></i><p>{tourdata.toursday}</p><span style={{ color: "gray" }}>days</span></div>
                            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}><p>{tourdata.toursdate}</p></div>
                            <button style={{ marginLeft: 50 }} className='btn'>Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Tours