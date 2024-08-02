import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import boy from "../../assests/boy.png"
import girl from "../../assests/girl.png"
import girl1 from "../../assests/girl2.png"
import ReactStars from 'react-stars';
import { Comma, CommaV2 } from "../../assests/Appicons";

const Customer = () => {
    const testimonials = [
        {
            rating: 4.5,
            svg:girl,
              user:"Anusha Poojary",
            review:"Happy with their work. Very professional approach and good quality product delivered. Looking forward to have more projects with you."
        },
        { svg:girl1,
            rating:5,
            user:"Aditi Rai",
            review:
                "Got an opportunity to learn way more expected things. Team is really supportive and works really hard."
                },
        {
            svg:  boy ,
            rating: 4.2,
            user: "Vivek Purandare",
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
                        <div>

                     
                        <div className="testimonial-card">
                            <div className="review">
                                <div className="svg1" >
                                <Comma />
                                </div>
                     
                                <p>    {testimonial.review}  </p>
                                <div className="svg2">
                                <CommaV2 />
                                </div>
                                </div>
                            <div className="img-box">
                            <img src={testimonial.svg} alt="" style={{width : "100px" , height: "100px"}}></img>
                            <ReactStars
                count={5}
                value={testimonial.rating}
                size={24}
                color2="#FFD700"
                edit={false} 
                half={true}
              />
                            <p  style={{color : "#EA4232" , fontWeight: 700 }}>{testimonial.user}</p>
                        </div>
                            
                        </div>
                     
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Customer;
