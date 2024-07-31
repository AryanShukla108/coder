import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Customer = () => {
    const testimonials = [
        {
            review:"Happy with their work. Very professional approach and good quality product delivered. Looking forward to have more projects with you."
        },
        {
            review:
                "Got an opportunity to learn way more expected things. Team is really supportive and works really hard."
                },
        {
            review:
                "Very happy with the reliable and cost effective solutions provided by SOV. Would definitely recommend this team to anyone looking for application development, UI/UX and staff augmentation services."
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
                            <div className="review">{testimonial.review}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customer;
