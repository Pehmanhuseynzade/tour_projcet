import React from 'react'
import "./tours.scss"

function Tours() {
    return (
        <>
            <div className='countries-tours'>
                <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
                <h1>Tours Page</h1>
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

            <div className='tour-cards'>
                <div className='my-card'>
                    <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-title-image-8.jpg" alt="mycardimage" />
                    <div className='overlay'></div>
                    <div className='sale'>
                    <h2>Madrid To Rome</h2>
                    <h2 className='blue'><span>$</span>1490</h2>
                    </div>
                    <p className='desc'>Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor.</p>
                    <div className='statistic-icon'>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}><i class="fa-regular fa-calendar"></i><p>7</p><span style={{color:"gray"}}>days</span></div>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}><i class="fa-regular fa-user"></i><p>12</p><span style={{color:"gray"}}>+</span></div>
                        <button style={{marginLeft:100}} className='btn'>Order</button>
                    </div>
                </div>
                <div className='my-card'>
                    <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-title-image-8.jpg" alt="mycardimage" />
                    <div className='overlay'></div>
                    <div className='sale'>
                    <h2>Madrid To Rome</h2>
                    <h2 className='blue'><span>$</span>1490</h2>
                    </div>
                    <p className='desc'>Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor.</p>
                    <div className='statistic-icon'>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}><i class="fa-regular fa-calendar"></i><p>7</p><span style={{color:"gray"}}>days</span></div>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}><i class="fa-regular fa-user"></i><p>12</p><span style={{color:"gray"}}>+</span></div>
                        <button style={{marginLeft:100}} className='btn'>Order</button>
                    </div>
                </div>
                <div className='my-card'>
                    <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-title-image-8.jpg" alt="mycardimage" />
                    <div className='overlay'></div>
                    <div className='sale'>
                    <h2>Madrid To Rome</h2>
                    <h2 className='blue'><span>$</span>1490</h2>
                    </div>
                    <p className='desc'>Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor.</p>
                    <div className='statistic-icon'>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}><i class="fa-regular fa-calendar"></i><p>7</p><span style={{color:"gray"}}>days</span></div>
                        <div style={{display:"flex",justifyContent:"center",gap:"5px"}}><i class="fa-regular fa-user"></i><p>12</p><span style={{color:"gray"}}>+</span></div>
                        <button style={{marginLeft:100}} className='btn'>Order</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Tours