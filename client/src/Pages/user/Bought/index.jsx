import React, { useEffect, useState } from 'react'
import "./bought.scss"
import axios from 'axios'
import { Button, Card } from 'antd';
const Bought = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:7374/api/payment")
        setData(res.data)
        console.log(res.data);
    }
    useEffect(() => {
        getData()
    }, [])
    
const { Meta } = Card;
    return (
        <>
            <div className='div' style={{ paddingTop: 150 }}>
                {data.map((d) => (
                    <div className='card-div'>
                        <img className='img-div' src={d.paymenttourImage} alt=''/>
                        <div className='display'>
                        <p className='p-div'>{d.paymenttourName}</p>
                        <p className='p-div'>{d.paymenttourPrice}$</p>
                        </div>
                        <p className='p-div-1'>{d.paymenttourDesc}</p>
                        <div>
                            <p className="received">Received</p>
                        </div>
                    </div>
                    // <Card
                    //     hoverable
                    //     style={{ width: 240 }}
                    //     cover={<img alt="example" src={d.paymenttourImage} />}
                    // >
                    //     <Meta title={d.paymenttourName} description={d.paymenttourDesc} />
                    // </Card>
                ))}
            </div>
        </>
    )
}

export default Bought