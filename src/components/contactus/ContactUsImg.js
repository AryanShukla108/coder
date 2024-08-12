import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import contactusimg from "../../assests/contactusimg.jpg"
import { Galaxy } from '../../assests/Appicons';


const ContactUsImg = () => {
    return (
        <div className='ContactUsImg'>
            <div className='contact-box'>
                <div className="heading-color">Contact Us</div>
                <div className="para">Be a part of the future of work. Boost your career with global clients, ambitious projects and the freedom of working remotely.
                </div>
                <div className='txt'>Remote. Proven. Ready.</div>
                <div>
                    <input type="text" className='input-field' placeholder='Enter your email' />
                    <button className='send-btn'>Send Now <ArrowForwardIcon /></button>
                </div>
            </div>
            <div className='star-box'>
                <div className='svg-star'>
                <Galaxy />
                </div>
                <img src={contactusimg} alt="contactusimg" className='svg-starimg' />
            </div>
        </div>
    )
}

export default ContactUsImg