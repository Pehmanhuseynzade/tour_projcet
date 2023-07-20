import React from 'react'
import "./contact.scss"
import {Link} from "react-router-dom"
function Contact() {
    return (
        <>
            <div className='contact-count'>
                <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/contact-title-image.jpg" alt="mainimage" />
                <h1>A Reasonable Place To Visit</h1>
                <p>INCREDIBLE JOURNEY</p>
            </div>

            <div className='voyage'>
                <div><p style={{color:"gray",fontSize:"23px"}}>Voyage / A Reasonable Place To Visit</p></div>
                <div style={{display:"flex",gap:"10px"}}>
                    <Link><div><i style={{color:"blue"}} class="fa-brands fa-facebook-f"></i> Facebook</div></Link>
                    <Link><div><i style={{color:"lightblue"}} class="fa-brands fa-twitter"></i> Twitter</div></Link>
                </div>
            </div>

            <div className='contact-iframe'>
                <div className='contact-part'>
                <h1>Contact Us</h1>
                <p className='prg1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus</p>
                <p className='prg'>vitae condimentum egestas, libero dolor auctor.</p>
                <form>
                    <input placeholder='Name' style={{color:"gray",display:"block",flexDirection:"column",paddingLeft:"10px"}} type="text" />
                    <input placeholder='Surname' style={{color:"gray",display:"block",flexDirection:"column",paddingLeft:"10px"}} type="text" />
                    <input placeholder='Email' style={{color:"gray",display:"block",flexDirection:"column",paddingLeft:"10px"}} type="email" />
                    <textarea placeholder='Comment' style={{color:"gray",fontSize:"15px",display:"block",flexDirection:"column",paddingLeft:"10px",paddingTop:"10px"}} name="message" cols="30" rows="10"></textarea>
                    <button type='submit'>Submit</button>
                </form>
                </div>
                <div className='iframe-part'>
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

export default Contact