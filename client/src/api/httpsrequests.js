import { BASE_URL1 } from "./base_URL";
import axios from "axios"


//1.Useful Infos

export const getInfodatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/useful`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getAlldatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/useful/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/useful/${id}`)
}

export const getPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/useful`,payload)
}

export const putDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/useful/${id}`,update)
}

//2.For Countries

export const getcountriesdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/countries`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getcountriesdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/countries/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getcountriesDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/countries/${id}`)
}

export const getcountriesPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/countries`,payload)
}

export const putcountriesDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/countries/${id}`,update)
}
//3.For Pop Tours

export const getpoptourdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/poptour`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpoptourdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/poptour/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpoptourDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/poptour/${id}`)
}

export const getpoptourPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/poptour`,payload)
}

export const putpoptourDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/poptour/${id}`,update)
}

//4.For Tour

export const gettourdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/traveltour`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettourdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/traveltour/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettourDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/traveltour/${id}`)
}

export const gettourPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/traveltour`,payload)
}

export const puttourDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/traveltour/${id}`,update)
}
//5.For form

export const getformdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/contactus`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getformdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/contactus/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getformDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/contactus/${id}`)
}

export const getformPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/contactus`,payload)
}

export const putformByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/contactus/${id}`,update)
}

//6.For sendemail

export const getsendemaildatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/sendemail`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getsendemaildatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/sendemail/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getsendemailDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/sendemail/${id}`)
}

export const getsendemailPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/sendemail`,payload)
}

export const putsendemailByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/sendemail/${id}`,update)
}