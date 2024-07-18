import React from 'react'
import human1 from "../../assests/human1.png"

const HirePage = () => {

    const cardData = [
        {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,
        },
        {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,

        }, {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,

        }, {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,

        },
        {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,
        },
        {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,

        }, {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,

        }, {
            name: 'Shreya Sharma',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) | ReactJs | Healthcare',
            image: human1,

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
                        <button className='hire-btn'>Hire Now</button>
                    </div>
                ))}
            </div>
            <button className='health-submit'>Schedule a call</button>
        </div>
    )
}

export default HirePage