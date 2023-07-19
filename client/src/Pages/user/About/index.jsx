import React from 'react'
import "./about.scss"
// import { getAboutdatas } from '../../../api/httpsrequests'
// import { Helmet } from "react-helmet";

function About() {
    //   const [about, setAbout] = useState([])
    //   useEffect(() => {
    //     getAboutdatas().then((data) => {
    //       setAbout(data)
    //       console.log(data)
    //     })
    //   }, [])
    return (
        <>
            {/* <Helmet>
        <title>About</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet> */}
            <div>
                <div className='about-page'>
                    <div className='about-image'>
                        <img src="https://mksdmcdn-9b59.kxcdn.com/trawell/wp-content/uploads/2018/03/trawell_about.jpg" alt="aboutimage" />
                    </div>
                    <div>
                        <h1 className='resort'>About Site</h1>
                        <div className='line'></div>
                        <p className='content-2'>
                            Keeping one’s self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing. Self-motivation is something that does not come easy to a lot of people and that means that there are some steps that need to be taken before you can become motivated to the fullest extent.</p>
                        <p className='content-2'>Of course, there are some other matters that first need to be taken care of. If there are a lot of distractions that keep you from doing what you need to be doing then you need to make some changes. This is really the first step towards becoming self-motivated in any form.</p>
                        {/* <p style={{ color: "rgba(255, 255, 255, 0.833)" }}>* * * * *</p> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default About