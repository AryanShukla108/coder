import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Customer = () => {
    const testimonials = [
        {
            review:"We ensure secure software and business solutions, safeguarding against vulnerabilities for reliable deployment.",
            title:"We’re Safe"
        },
        {
            review:
                "Our commitment to excellence ensures clients receive tailored, dependable solutions, fostering long-term trust.",
            title:"We’re Trustworthy"
                },
        {
            review:
                "We dedicate ourselves to addressing your unique requirements, ensuring our solutions align perfectly with your goals.",
            title:"We Value You"
            }   
    ];

    return (
        <div className="Customer">
            <div className="dash"></div>
            <div className="head1">Why cutomers love</div>
            <div className="head2">working with us</div>
           <Swiper
            slidesPerView={"auto"}
            spaceBetween={9}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <div><h1>{testimonial.title}</h1></div>
                            <div className="review">{testimonial.review}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customer;
