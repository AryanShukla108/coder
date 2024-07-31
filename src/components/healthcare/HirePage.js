import React from 'react'
import boy from "../../assests/boy.png"
import boy1 from "../../assests/boy2.png"
import girl from "../../assests/girl.png"
import girl1 from "../../assests/girl2.png"


const HirePage = () => {

    const cardData = [
        {
            name: 'Shreya',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) |React.js | Healthcare',
            image: girl,
        },
        {
            name: 'Nitish',
            title: 'Sr. Python Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Python - 8 Years (Expert) | Android | Healthcare ',
            image: boy,

        }, {
            name: 'Nikita',
            title: 'Sr. PHP Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'PHP - 12 Years (Expert) |Healthcare',
            image: girl1,

        }, {
            name: 'Raj',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 8 Years (Expert) | React.js| Healthcare',
            image: boy1,

        },
        {
            name: 'Ashish',
            title: 'Sr. PHP Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'PHP - 5 Years (Advance) |Healthcare',
            image: boy,
        },
        {
            name: 'Vinita',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 2 Years (Junior)|Healthcare',
            image: girl,

        }, {
            name: 'Manik',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) |React.js | Healthcare',
            image: boy1,

        }, {
            name: 'Megha',
            title: 'Sr. Python Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Python - 12 Years (Expert) |Flutter | React.js | Healthcare',
            image: girl1,

        },
    ]
    return (
        <div className='HirePage'>
            <div className='heading-main'>Explore Talent on Our <span className='heading-color'>Platform</span></div>
            <div className='HirePage-card'>
                {cardData.map((data, index) => (
                    <div className='hireCard' key={index}>
                        <img src={data.image} alt={data.name} className='img-card' />
                        <div className='name'>{data.name}</div>
                        <div className='title'>{data.title}</div>
                        <div className='pay'>
                            <div className='filled txt-1'>Super <span>Dev</span></div>
                            <div className='filled txt-2'><span className='rate'>{data.rate}</span>/hour</div>
                        </div>
                        <div className='filled space-bott'>
                            {[...Array(Math.floor(data.rating))].map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            <span className='rate'> {data.rating}</span>
                        </div>
                        <div className='skills'>{data.skills}</div>
                        <button className='hire-btn' onClick={() => (window.location.href = '/hire')}>Hire Now</button>
                    </div>
                ))}
            </div>
            <button className='health-submit' onClick={() => (window.location.href = '/hire')}>Schedule a call</button>
        </div>
    )
}

export default HirePage