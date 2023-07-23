import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2"
import axios from 'axios';
function Footer() {
  const formik = useFormik({
    initialValues: {
      sendemail: ''
    },
    validationSchema: Yup.object({
      sendemail: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      axios.post('http://localhost:7374/api/sendemail', values)
        .then(response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your mail has been send',
            showConfirmButton: false,
            timer: 1500
          })
          console.log('Post request successful');
          console.log(response.data);
          formik.resetForm();
        })
        .catch(error => {
          console.error('Post request error:', error);
        });
    },
  });
  return (
    <>
      <footer>
        <div className='foot-div-1'>
          <p>Social Medias</p>
          <div className='foot-icons'>
            <Link to='https://www.facebook.com/marxalresort/' className='circle'><i className="fa-brands fa-facebook"></i></Link>
            <Link to='https://www.instagram.com/marxalresortspa/' className='circle'><i className="fa-brands fa-instagram"></i></Link>
            <Link to='https://www.linkedin.com/company/marxal-resort-and-spa-hotel/?originalSubdomain=ru' className='circle'><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to='https://www.youtube.com/channel/UC453HCc6k0_zzwhu2zd-cOg' className='circle'><i className="fa-brands fa-youtube"></i></Link>
          </div>
          <p style={{ paddingTop: "10px" }}>Travel Company & Tours, Azərbaijan, Baku</p>
          <Link>
            <p>Phone: +994 (012) 314 47 77</p>
          </Link>
          <Link>
            <p>Mobile: +994 (70) 314 47 77</p>
          </Link>
          <Link>
            <p>E-mail: travelazerbaijan@gmail.com</p>
          </Link>
        </div>
        <div className='foot-div-2'>
          <div className='nav-foot'>
            <Link to='about'>
              <p>Home</p>
            </Link>
            <Link to='rooms'>
              <p>About</p>
            </Link>
            <Link to='restaurant'>
              <p>Countries</p>
            </Link>
            <Link to='entertainment'>
              <p>Tours</p>
            </Link>
            <Link to='spa'>
              <p>Contact</p>
            </Link>
          </div>
          {/* <p className='p-sentence'> <i> Yeni kampaniyalar və endirimlərdən xəbərdar olmaq üçün abunə olun...</i></p> */}

          <form onSubmit={formik.handleSubmit}>
            <input
              id="sendemail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sendemail}
              name="sendemail"
              className="email"
              placeholder='Enter your email adress'
            />
            <button type='submit'>Send</button>
          </form>
          {/* <p className='p-sentence'>
            © 2023 Bütün hüquqlar qorunur.
          </p> */}
        </div>

        <div className='foot-div-3'>
        <div className='mainfoot-img'>
            <div className='footimg-1'>
              <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-11.jpg" alt="footimg" />
              <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/brazil-image-gallery-9.jpg" alt="footimg" />
              <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-9.jpg" alt="footimg" />
            </div>
            <div className='footimg-2'>
              <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-6.jpg" alt="footimg" />
              <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/japan-image-gallery-11.jpg" alt="footimg" />
              <img src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/lisbon-image-gallery-7.jpg" alt="footimg" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer