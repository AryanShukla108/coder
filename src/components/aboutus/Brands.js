import React from "react";
// import amazon from "../../assests/amazon.png";
import brand1 from "../../assests/brand1.png";
import brand2 from "../../assests/brand2.png";
import brand3 from "../../assests/brand3.png";
import brand4 from "../../assests/company19.png";
import brand5 from "../../assests/brand5.png";
import brand6 from "../../assests/company20.png";
import brand7 from "../../assests/company14.png";
import abmiss from "../../assests/aboutmission.png";



import { VisionIcon } from "../../assests/Appicons";

const Brands = () => {
    return (
        <div className="aboutus-brands">
            <div className="head">
                Brands you Admire and Dream of working with are{" "}
                <span className="heading-color">here!</span>
            </div>
            <div className="brand-name">
                <div>
                    <img src={brand1} alt="amazon" className="brands-img" />
                </div>
                <div>
                    <img src={brand2} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={brand3} alt="amazon" className="brands-img-3" />
                </div>{" "}
                <div>
                    <img src={brand4} alt="amazon" className="brands-img-3" />
                </div>{" "}
                <div>
                    <img src={brand5} alt="amazon" className="brands-img-4" />
                </div>{" "}
                <div>
                    <img src={brand6} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={brand7} alt="amazon" className="brands-img" />
                </div>
            </div>
            <div className="box-main">
                <div className="box">
                    <div>
                        <div className="para">
                            For over 10 years, we've been the silent force behind numerous brands, catalyzing their growth through insights, ideas and impact. With a legacy of working on 1000+ projects for 50+ brands and managing over 1+ crores of media budget, we have solidified our position as industry leaders.
                        </div>
                        <div className="para">
                            From our 5 offices spread across India, we offer a vast suite of services. Whether it's digital marketing, brand strategy, PR, or web development, our expertise doesn't just stop at delivering these services. It lies in our nuanced understanding of the industries we serve. By synergising data with creativity, we craft strategies that aren't just effective, but are also tailored to each brand's unique needs.
                        </div>
                        <div className="para">
                            But more than just a service provider, we are partners in your journey. We celebrate your successes, navigate challenges hand in hand with you, and consistently aim for impact. For us, your growth is the compass that guides our actions, and your trust is the reward we hold dearest.
                        </div>
                    </div>
                    <div>
                        <div className="heading-txt">
                            <span className="heading-color txt">Join us</span>, and together,
                            let's co-create stories of business success.
                        </div>
                    </div>
                </div>
            </div>
            <div className="vision">
                <div className="inner-vision">
                    <div>
                        <VisionIcon />
                    </div>
                    <div>
                        <div className="heading-color vision-head">Vision</div>
                        <div className="vision-para">We aim to be the trusted manpower partner for companies worldwide,leveraging our expertise to collaboratewith brands and drive positive results aligned with their business objectives.</div>
                    </div>
                </div>
            </div>
            <div className="vision">
                <div className="inner-vision">
                    <div>
                        <div className="heading-color vision-head">Mission</div>
                        <div className="vision-para">Our aim is to be the trusted partner for clients, helping elevate brands globally through marketing expertise and digital solutions based on genuine insights.</div>
                    </div>
                    <div>
                        {/* <VisionIcon /> */}
                        <img src={abmiss} alt="abmiss" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
