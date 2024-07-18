import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Customer = () => {
    const testimonials = [
        {
            review:
                "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        },
        {
            review:
                "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        },
        {
            review:
                "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        },
        {
            review:
                "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        },
        {
            review:
                "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        },
        {
            review:
                "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn't be hesitated to introduce their work to someone else.",
        },
    ];

    return (
        <div className="Customer">
            <div className="dash"></div>
            <div className="head1">Why cutomers love</div>
            <div className="head2">working with us</div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={9}
                loop={false}
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
                            <div className="review">{testimonial.review}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customer;
