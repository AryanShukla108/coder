import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import closebracket from "../../assests/closebracket.png"

const Service = () => {

    const services = [
        {
            title: "Mobile App Development",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket
        },
        {
            title: "Web Design & Development",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket

        },
        {
            title: "Software Testing Service",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket

        },
        {
            title: "Software Testing Service",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket

        },
        {
            title: "Software Testing Service",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket

        },
        {
            title: "Software Testing Service",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket

        }, {
            title: "Software Testing Service",
            description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
            icon: closebracket

        },
    ];

    return (
        <div className="slider-service">
            <div className='service-head'>Services we offer</div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={9}
                loop={false}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="service-card">
                            <div className='img-div'> <img src={service.icon} alt={`${service.title} icon`} className="service-icon" /></div>
                            <div className='title'>{service.title}</div>
                            <div className='des'>{service.description}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Service