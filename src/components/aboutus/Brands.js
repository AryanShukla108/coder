import React from "react";
import amazon from "../../assests/amazon.png";
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
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>
                <div>
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>{" "}
                <div>
                    <img src={amazon} alt="amazon" className="brands-img" />
                </div>
            </div>
            <div className="box-main">
                <div className="box">
                    <div>
                        <div className="para">
                            For over 12 years, we've been the silent force behind numerous
                            brands, catalyzing their growth through insights, ideas and
                            impact. With a legacy of working on 2000+ projects for 300+ brands
                            and managing over 400+ crores of media budget, we have solidified
                            our position as industry leaders.
                        </div>
                        <div className="para">
                            From our 5 offices spread across India, we offer a vast suite of
                            services. Whether it's digital marketing, brand strategy, PR, or
                            web development, our expertise doesn't just stop at delivering
                            these services. It lies in our nuanced understanding of the
                            industries we serve. By synergising data with creativity, we craft
                            strategies that aren't just effective, but are also tailored to
                            each brand's unique needs.
                        </div>
                        <div className="para">
                            But more than just a service provider, we are partners in your
                            journey. We celebrate your successes, navigate challenges hand in
                            hand with you, and consistently aim for impact. For us, your
                            growth is the compass that guides our actions, and your trust is
                            the reward we hold dearest.
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
                        <div className="vision-para">We envision ourselves as the most reliable digital marketing partner for companies all over the globe. We want to utilize our digital marketing proficiency to synergize with brands and stimulate positive outcomes for their business goals.</div>
                    </div>
                </div>
            </div>
            <div className="vision">
                <div className="inner-vision">
                    <div>
                        <div className="heading-color vision-head">Mission</div>
                        <div className="vision-para">Be the most trusted and value-driven partner of choice for our clients in growing brands to reach global heights by leveraging our integrated marketing expertise and superiority in digital marketing to deliver impactful solutions, ideated based on real insights. </div>
                    </div>
                    <div>
                        <VisionIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
