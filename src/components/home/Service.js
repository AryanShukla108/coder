import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import closebracket from "../../assests/closebracket.png"
import { ServiceIconOffer9, ServiceIconOffer7, ServiceIconOffer1, ServiceIconOffer8, ServiceIconOffer6, ServiceIconOffer12, ServiceIconOffer11, ServiceIconOffer10 } from '../../assests/Appicons';

const Service = () => {

    const services = [
        {
            title: "C2C & C2H",
            description: "Our staffing augmentation seamlessly integrates skilled professionals for success and continuity with efficiency.",
            icon: <ServiceIconOffer9 />
        },
        {
            title: "Consultation",
            description: "Technical consultation aids companies and startups in scaling with tailored strategies, optimizing operations for growth.",
            icon: <ServiceIconOffer7 />

        },
        {
            title: "Web Development",
            description: "We offer tailored web development services, ensuring your unique needs are met with precision and expertise.",
            icon: <ServiceIconOffer1 />

        },
        {
            title: "UI Design",
            description: "We provide development-ready UI designs, prioritizing functionality and aesthetics for efficient implementation.",
            icon: <ServiceIconOffer8 />

        },
        {
            title: "Branding",
            description: "We craft compelling brand identities that resonate, blending creativity and strategy for lasting connections.",
            icon: <ServiceIconOffer8 />

        },
        {
            title: "Email Marketing",
            description: "Tailored email marketing services optimize engagement and conversion, delivering impactful campaigns for results.",
            icon: <ServiceIconOffer6 />

        }, {
            title: "Digital Marketing",
            description: "Our digital marketing services drive targeted campaigns, maximizing online presence for exceptional results.",
            icon: <ServiceIconOffer12 />

        },

        {
            title: "Social Media",
            description: "Our digital marketing services drive targeted campaigns, maximizing online presence for exceptional results.",
            icon: <ServiceIconOffer11 />

        }, {
            title: "Bug Fixing",
            description: "Our bug fixing ensures swift, efficient solutions, ensuring optimal performance and user satisfaction.",
            icon: <ServiceIconOffer10 />

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
                    <SwiperSlide key={index} onClick={() => (window.location.href = "service")}>
                        <div className="service-card" >
                            <div className='img-div'>
                                {/* <img src={service.icon} alt={`${service.title} icon`} className="service-icon" /> */}
                                {service.icon}
                            </div>
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