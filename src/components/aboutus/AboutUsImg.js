import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import aboutimg from "../../assests/aboutimg.jpg"


const AboutUsImg = () => {
    return (
        <div className='AboutUsImg'>
            <div>
                <div className='heading-color'>ABOUT US </div>
                <div className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</div>
                <button className='enquire'>Enquire Now <ArrowForwardIcon /></button>
            </div>
            <div>
                <img src={aboutimg} alt="aboutimg" className='aboutimg' />
            </div>
        </div>
    )
}

export default AboutUsImg