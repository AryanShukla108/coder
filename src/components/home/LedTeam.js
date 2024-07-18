import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import developer from "../../assests/developer.png"


const LedTeam = () => {
    const services = [
        {
            title: "Mobile App Development",
            description: "Sr. SDE I ₹***** ",
            icon: developer
        },
        {
            title: "Web Design & Development",
            description: "Sr. SDE I ₹***** ",
            icon: developer

        },
        {
            title: "Software Testing Service",
            description: "Sr. SDE I ₹***** ",
            icon: developer

        },
        {
            title: "Software Testing Service",
            description: "Sr. SDE I ₹***** ",
            icon: developer

        },
        {
            title: "Software Testing Service",
            description: "Sr. SDE I ₹***** ",
            icon: developer

        },
        {
            title: "Software Testing Service",
            description: "Sr. SDE I ₹***** ",
            icon: developer

        }, {
            title: "Software Testing Service",
            description: "Sr. SDE I ₹***** ",
            icon: developer

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
                <div className="button-down">
                    <button className="swiper-btn border-btn">Schedule a call</button>
                    <button className="swiper-btn background-btn">Hire Developers</button>
                </div>
            </div>
        </div>
    );
};

export default LedTeam;
