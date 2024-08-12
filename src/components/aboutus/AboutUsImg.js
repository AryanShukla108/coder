import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import aboutimg from "../../assests/aboutfull.png"


const AboutUsImg = () => {
    return (
        <div
            // className='AboutUsImg'
            className='ContactUsImg'
        >
            <div>
                <div className='heading-color-about'>ABOUT US </div>
                <div className="para-about">Mobile designs and builds software for mobile devices, working alongside our clients.</div>
                <button className='enquire'>Enquire Now <ArrowForwardIcon /></button>
            </div>
            <div>
                <img src={aboutimg} alt="aboutimg" className='aboutimg' />
            </div>
        </div>
    )
}

export default AboutUsImg