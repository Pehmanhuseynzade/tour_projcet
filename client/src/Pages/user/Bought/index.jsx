import React, { useEffect, useState } from 'react'
import "./bought.scss"
import axios from 'axios'
import Swal from "sweetalert2"
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
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:7374/api/payment/${id}`);
            setData((prevData) => prevData.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const showDeleteConfirm = (record) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(record._id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <>
            <div className='div' style={{ paddingTop: 150 }}>
                {data.map((d) => (
                    <div className='card-div'>
                        <img className='img-div' src={d.paymenttourImage} alt='' />
                        <div className='display'>
                            <p className='p-div'>{d.paymenttourName}</p>
                            <p className='p-div'>{d.paymenttourPrice}$</p>
                        </div>
                        <p className='p-div-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est.</p>
                        <div>
                            <button
                                onClick={() => showDeleteConfirm(d)}
                                className='btn'>Delete</button>
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