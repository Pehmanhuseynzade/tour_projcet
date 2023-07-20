import React from 'react'
import "./about.scss"
import {Link} from "react-router-dom"

function About() {

    return (
        <>
            <div className='countries-about'>
                <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
                <h1>About Page</h1>
            </div>
            <div className='voyage'>
                <div><p style={{ color: "gray", fontSize: "23px" }}>Voyage / A Reasonable Place To Visit</p></div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Link><div><i style={{ color: "blue" }} class="fa-brands fa-facebook-f"></i> Facebook</div></Link>
                    <Link><div><i style={{ color: "lightblue" }} class="fa-brands fa-twitter"></i> Twitter</div></Link>
                </div>
            </div>
            <div className="about-page">
                <div className="about-part1">
                <h1>About Us</h1>
                <p className='about1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Pellentesque sodales ipsum nisi.</p>
                <p className='about2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus.</p>
                <p className='about3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Suspendisse ultrices nulla eu volutpat volutpat.</p>
                </div>
                <div className="about-part2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26728459.75101552!2d27.561881!3d35.137876!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sus!4v1689767590395!5m2!1str!2sus" style={{ width: 600, height: 400, border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='london-baku'>
                        <div className='london'>
                            <h2>London Office</h2>
                            <Link><p>198 West 21th Street, New York</p></Link>
                            <Link><p>Phone: +88 (0) 101 0000 000</p></Link>
                            <Link><p>Fax: +88 (0) 202 0000 001</p></Link>
                            <Link><p>Email: voyage@qodeinteractive.com</p></Link>
                        </div>
                        <div className='baku'>
                            <h2>Baku Office</h2>
                            <Link><p>198 Bakixanov 21th Street, Baku</p></Link>
                            <Link><p>Phone: +88 (0) 101 0000 000</p></Link>
                            <Link><p>Fax: +88 (0) 202 0000 001</p></Link>
                            <Link><p>Email: voyage@qodeinteractive.com</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About