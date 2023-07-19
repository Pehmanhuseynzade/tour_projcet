import React from 'react'
import "./countres.scss"
function Countries() {
    return (
        <>
            <div className='countries-count'>
                <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
                <h1>Countries</h1>
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
        <div className='card-count'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-11.jpg" alt="mycardimage" />
          <div class="overlay">
            <h2>Spain</h2>
          </div>
        </div>
        <div className='card-count'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-11.jpg" alt="mycardimage" />
          <div class="overlay">
            <h2>Spain</h2>
          </div>
        </div>
        <div className='card-count'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-11.jpg" alt="mycardimage" />
          <div class="overlay">
            <h2>Spain</h2>
          </div>
        </div>
        <div className='card-count'>
          <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-11.jpg" alt="mycardimage" />
          <div class="overlay">
            <h2>Spain</h2>
          </div>
        </div>
        </div>
        </>
    )
}

export default Countries