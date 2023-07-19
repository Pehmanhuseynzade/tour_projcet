import React from 'react'
import "./tours.scss"
import { Card } from 'antd';

function Tours() {
    return (
        <>
            <div className='countries-tours'>
                <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/rawpixel-com-191102-unsplash-1920x1254.jpg" alt="mainimage" />
                <h1>Tours</h1>
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
                <Card
                    hoverable
                    style={{
                        width: 300,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    
                </Card>
            </div>
        </>
    )
}

export default Tours