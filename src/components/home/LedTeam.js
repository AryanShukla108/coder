import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import developer from "../../assests/developer.png"
import smartboy from "../../assests/smartborderboy.png"
import smartboybest from "../../assests/smartboy2.png"
import smartgirl from "../../assests/smartgirl.png"


const LedTeam = () => {
    const services = [
        {
            title: "Haniket Y",
            description: "IOS Developer",
            icon: smartboy
        },
        {
            title: "Pushpender K",
            description: "Android Developer",
            icon: smartboybest

        },
        {
            title: "Anjul K",
            description: "Angular Developer",
            icon: smartgirl

        },
        {
            title: "Rohan S",
            description: "Node JS Developer",
            icon: smartboybest

        },
        {
            title: "Rahul S",
            description: "Backend Developer",
            icon: smartboy

        },

        {
            title: "Rani Y",
            description: "Java Developer",
            icon: smartgirl

        },
    ];
    return (
        <div className="LedTeam">
            <div className="card">
                <div className="sm-team">our team</div>
                <div className="b-head">Led by the best</div>
                <div className="s-head">
                    What began as our founder's vision is now becoming the benchmark for
                    hiring across India. Meet the visionary team who is making it
                    possible, everyday!
                </div>
                {/* swipper */}
                <Swiper
               
                    slidesPerView={'auto'}
                    spaceBetween={9}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="service-card cursor-pointer"  onClick={() => (window.location.href = "/hire")}>
                                <div className='img-div'> <img src={service.icon} alt={`${service.title} icon`} className="service-icon" /></div>
                                <div className='title'>{service.title}</div>
                                <div className='des'>{service.description}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="button-down">
                    <button className="swiper-btn border-btn" onClick={() => (window.location.href = "/hire")}>Schedule a call</button>
                    <button className="swiper-btn background-btn" onClick={() => (window.location.href = "/hire")}>Hire Developers</button>
                </div>
            </div>
        </div>
    );
};

export default LedTeam;
