import React from "react";
import goggle from "../../assests/gogle.png";
import transfrom from "../../assests/transform.png";
import hand from "../../assests/hand.jpg";
import service from "../../assests/service1.png";
import service1 from "../../assests/service2.png";
import service2 from "../../assests/service3.png";
import service3 from "../../assests/service4.png";
import caseimg from "../../assests/case.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Customer from "../home/Customer";
import serviceAll from "../../assests/service-over-all.png"


const ServiceOneImg = () => {

    const currentURL = window.location.href;

    const checkURL = (substring) => currentURL.includes(substring);

    const getDynamicText = () => {
        if (checkURL("service-ui")) return "UI Design";
        if (checkURL("service-web")) return "Web Development";
        if (checkURL("service-email")) return "Email Marketing";
        if (checkURL("service-consultation")) return "Consultation";
        if (checkURL("service-branding")) return "Branding";
        if (checkURL("service-C2C-C2H")) return "C2C & C2H";
        if (checkURL("service-bugs-fixing")) return "Bug Fixing";
        if (checkURL("service-social-media")) return "Social Media";
        if (checkURL("service-degital-marketing")) return "Digital Marketing";
        return ""; // Default text
    };
    return (
        <>
            <div className="ContactUsImg">
                <div>
                    <div className="serviceonetxt">{getDynamicText()}</div>
                    <div className="heading-color">Company</div>
                    <div className="para">
                        We design and develop tailored websites amalgamating creativity,
                        novelty and aesthetics that can turn the wind in favour of you.
                    </div>
                    <button className="service-contact" onClick={() => (window.location.href = "contact-us")}>Contact Us</button>
                </div>
                <div>
                    <img src={serviceAll} alt="serviceAll" className="contactusimg" />
                </div>
            </div>
            <div className="serviceone">
                <div className="list">
                    <div className="box-data">
                        <div className="txt">{getDynamicText()}</div>
                        <div className="txt1">
                            technology with creativity. Let's design it with thoughtful
                        </div>
                        <button className="service-contact" onClick={() => (window.location.href = "contact-us")}>Contact Us</button>
                    </div>
                    <div>
                        <div className="list-para">
                            <div className="icon">
                                <svg
                                    width="75"
                                    height="75"
                                    viewBox="0 0 75 75"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M36.5625 43.75C33.1969 43.75 30.4688 40.9519 30.4688 37.5C30.4688 34.0481 33.1969 31.25 36.5625 31.25C39.9278 31.25 42.6563 34.0481 42.6563 37.5C42.6563 39.1575 42.0141 40.7472 40.8716 41.9194C39.7288 43.0916 38.1788 43.75 36.5625 43.75Z"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52.7628 50.1969V46.0031C52.7628 44.9647 53.165 43.9688 53.8809 43.2344L56.7725 40.2687C58.2634 38.7397 58.2634 36.2603 56.7725 34.7313L53.8809 31.7656C53.165 31.0313 52.7628 30.0353 52.7628 28.9968V24.8C52.7628 22.6374 51.0534 20.8843 48.945 20.8843H44.8531C43.8406 20.8843 42.8694 20.4718 42.1534 19.7375L39.2619 16.7718C37.7709 15.2427 35.3537 15.2427 33.8628 16.7718L30.9715 19.7375C30.2555 20.4718 29.2844 20.8843 28.2719 20.8843H24.18C23.1669 20.8843 22.1954 21.2973 21.4793 22.0323C20.7633 22.7673 20.3614 23.7641 20.3622 24.8031V28.9968C20.3622 30.0353 19.96 31.0313 19.244 31.7656L16.3526 34.7313C14.8616 36.2603 14.8616 38.7397 16.3526 40.2687L19.244 43.2344C19.96 43.9688 20.3622 44.9647 20.3622 46.0031V50.1969C20.3622 52.3594 22.0715 54.1125 24.18 54.1125H28.2719C29.2844 54.1125 30.2555 54.525 30.9715 55.2594L33.8628 58.225C35.3537 59.7541 37.7709 59.7541 39.2619 58.225L42.1534 55.2594C42.8694 54.525 43.8406 54.1125 44.8531 54.1125H48.9419C49.955 54.1134 50.9269 53.7013 51.6434 52.9666C52.36 52.2322 52.7628 51.2359 52.7628 50.1969Z"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="head-color">Custom Application Development</div>
                                <div className="headpara">
                                    Are you looking for a custom application or software to run
                                    your business effectively and increase your efficiency?
                                    Automate your business using software tailored to your
                                    specific requirements.
                                </div>
                            </div>
                        </div>
                        <div className="list-para">
                            <div className="icon">
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.16602 6.25L4.71791 6.43396C7.46799 7.35067 8.84304 7.809 9.62952 8.90021C10.416 9.9914 10.416 11.4408 10.416 14.3397V19.7917C10.416 25.6842 10.416 28.6304 12.2466 30.461C14.0772 32.2917 17.0235 32.2917 22.916 32.2917H39.5827"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M15.625 37.5C17.3509 37.5 18.75 38.8992 18.75 40.625C18.75 42.3508 17.3509 43.75 15.625 43.75C13.8991 43.75 12.5 42.3508 12.5 40.625C12.5 38.8992 13.8991 37.5 15.625 37.5Z"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M34.375 37.5002C36.1008 37.5002 37.5 38.8992 37.5 40.6252C37.5 42.3511 36.1008 43.7502 34.375 43.7502C32.6492 43.7502 31.25 42.3511 31.25 40.6252C31.25 38.8992 32.6492 37.5002 34.375 37.5002Z"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M22.916 18.75H16.666"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M10.416 12.5H34.271C38.5523 12.5 40.6927 12.5 41.6191 13.9047C42.5454 15.3094 41.7021 17.277 40.0156 21.2121L39.1227 23.2954C38.3354 25.1325 37.9416 26.051 37.1589 26.5673C36.3762 27.0833 35.3768 27.0833 33.3781 27.0833H10.416"
                                        stroke="#5840D8"
                                        stroke-width="3.75"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="head-color">ECommerce Solutions</div>
                                <div className="headpara">
                                    Embark on a successful business journey by exploring the
                                    possibilities of e-commerce platforms. Launch a magnificently
                                    designed, seamlessly interactive, website with robust
                                    structure to get the clients on board effortlessly.
                                </div>
                            </div>
                        </div>
                        <div className="list-para">
                            <div className="icon">
                                <svg
                                    width="58"
                                    height="30"
                                    viewBox="0 0 58 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M42.5097 10.7981H40.3009L39.0916 17.0025H41.0547C41.1597 17.01 41.2834 17.0156 41.4072 17.0156C42.3578 17.0156 43.2409 16.7362 43.9834 16.2562L43.9647 16.2675C44.6603 15.6487 45.1328 14.7937 45.2547 13.8281L45.2566 13.8093C45.3466 13.5506 45.3991 13.2543 45.3991 12.945C45.3991 12.3993 45.2359 11.8912 44.9566 11.4675L44.9622 11.4768C44.4053 11.0381 43.6947 10.7718 42.9203 10.7718C42.7759 10.7718 42.6316 10.7812 42.4909 10.8L42.5097 10.7981ZM48.5903 14.0362C48.4497 14.7825 48.2003 15.4481 47.8591 16.0537L47.8759 16.0218C47.5122 16.6556 47.0753 17.1993 46.5672 17.6643L46.5616 17.6681C45.9691 18.2343 45.2509 18.6768 44.4522 18.9468L44.4128 18.9581C43.5859 19.2037 42.6372 19.3462 41.6528 19.3462C41.5628 19.3462 41.4747 19.3443 41.3866 19.3425H41.3997H38.6341L37.8672 23.2837H34.6384L37.5203 8.46183H43.7266C43.8634 8.44871 44.0247 8.44121 44.1859 8.44121C45.5997 8.44121 46.8822 9.01121 47.8122 9.93371C48.4103 10.7025 48.7722 11.6831 48.7722 12.7462C48.7722 13.2056 48.7047 13.65 48.5791 14.0681L48.5866 14.0362H48.5903ZM30.7909 19.3443L32.0641 12.7856C32.1297 12.6075 32.1672 12.4031 32.1672 12.1893C32.1672 11.8462 32.0697 11.5256 31.9009 11.2537L31.9047 11.2612C31.5391 10.995 31.0816 10.8337 30.5866 10.8337C30.4834 10.8337 30.3822 10.8412 30.2828 10.8543L30.2941 10.8525H27.7347L26.0847 19.3462H22.8803L25.7622 4.52246H28.9647L28.1978 8.46371H31.0516C31.2259 8.44496 31.4266 8.43371 31.6309 8.43371C32.8028 8.43371 33.8903 8.79559 34.7866 9.41621L34.7678 9.40496C35.2497 9.95058 35.5441 10.6725 35.5441 11.4618C35.5441 11.8143 35.4859 12.1537 35.3772 12.4706L35.3828 12.4481L34.0422 19.3462L30.7909 19.3443ZM21.3616 17.6681C20.7691 18.2362 20.0509 18.6768 19.2522 18.9468L19.2128 18.9581C18.3859 19.2037 17.4372 19.3462 16.4547 19.3462C16.3666 19.3462 16.2766 19.3443 16.1884 19.3425H16.2016H13.4341L12.6672 23.2818H9.43844L12.3203 8.45996H18.5303C18.6672 8.44684 18.8284 8.43934 18.9897 8.43934C20.4034 8.43934 21.6859 9.00933 22.6159 9.93184C23.2141 10.7006 23.5741 11.6812 23.5741 12.7443C23.5741 13.2056 23.5066 13.65 23.3809 14.07L23.3884 14.0381C23.1147 15.4893 22.3891 16.74 21.3653 17.6643L21.3597 17.67L21.3616 17.6681ZM29.0003 0.209961C13.4734 0.209961 0.882812 6.83059 0.882812 15C0.882812 23.1693 13.4716 29.7918 29.0003 29.7918C44.5291 29.7918 57.1178 23.1675 57.1178 15C57.1178 6.83246 44.5291 0.209961 29.0003 0.209961ZM17.3078 10.7981H15.0953L13.8878 17.0025H15.8509C15.9559 17.01 16.0778 17.0156 16.2016 17.0156C17.1522 17.0156 18.0372 16.7362 18.7797 16.2562L18.7609 16.2675C19.4566 15.6506 19.9272 14.7937 20.0472 13.8281L20.0491 13.8093C20.1409 13.5506 20.1934 13.2525 20.1934 12.9431C20.1934 12.3993 20.0322 11.8912 19.7528 11.4693L19.7584 11.4787C19.2016 11.04 18.4909 10.7737 17.7166 10.7737C17.5722 10.7737 17.4278 10.7831 17.2872 10.8018L17.3041 10.8L17.3078 10.7981Z"
                                        fill="#5840D8"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="head-color">PHP Development</div>
                                <div className="headpara">
                                    With a team of experienced professionals, we are a class
                                    apart. Get the experts with exhaustive experience on Ajax,
                                    jQuery, MySQL. JavaScript, CSS, and HTML, for the entire web-
                                    based requirements.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform">
                    <div className="transform-card">
                        <div className="transform-txt">Transforming Businesses</div>
                        <div className="transform-para">
                            Transform your business through thoughtfully created, adequately
                            embellished, social media marketing campaigns with SpiderWorks,
                            the trusted digital marketing company in Kerala. We offer
                            distinctively created campaigns, a beautiful amalgamation of
                            creativity and marketing skills, to mark your presence felt. Let’s
                            make your brand number one in the field.
                        </div>
                        <div className="transform-img">
                            A <img src={goggle} alt="goggle" className="goggle" /> partner
                            Company
                        </div>
                    </div>
                    <div>
                        <img src={transfrom} alt="transfrom" className="transfrom-img" />
                    </div>
                </div>

                <div className="numbers">
                    <div className="num-div">
                        <div className="num">
                            13<span className="spanTag">+</span>
                        </div>
                        <div>
                            <div className="year">Years Of Industry</div>
                            <div className="exp">Experience</div>
                        </div>
                    </div>
                    <div className="num-div">
                        <div className="num">
                            1000<span className="spanTag">+</span>
                        </div>
                        <div>
                            <div className="year">Successful</div>
                            <div className="exp">Projects</div>
                        </div>
                    </div>{" "}
                    <div className="num-div">
                        <div className="num">
                            13<span className="spanTag">+</span>
                        </div>
                        <div>
                            <div className="year">Years In</div>
                            <div className="exp">Digital Agency</div>
                        </div>
                    </div>
                </div>
                <div className="project-behind">
                    <div className="process">
                        PROCESS <span className="behind"> BEHIND</span>
                    </div>
                    <div className="process-para">
                        A brilliant website is the result of utmost dedication from the
                        professionals and strong understanding between creative and
                        technical teams. SpiderWorks web development company in Kerala has a
                        system in place for obtaining awe-inspiring results.
                    </div>
                    <div className="main-rank">
                        <div className="rank">
                            <div className="num-1">1</div>
                            <div>
                                <div className="num-head">Brainstorming</div>
                                <div className="num-para">
                                    A detailed brainstorming session involving all the teams will
                                    precede the preparation of initial draft for web development.
                                    Brand assessment, competitor website analysis, and other
                                    relevant aspects would be considered.
                                </div>
                            </div>
                        </div>
                        <div className="rank">
                            <div className="num-1">2</div>
                            <div>
                                <div className="num-head">Design</div>
                                <div className="num-para">
                                    Design features and basic structure would be prepared by the
                                    teams before commencement of the development process. The
                                    options would be shared with the client for suggestions,
                                    opinions, and final approval.
                                </div>
                            </div>
                        </div>{" "}
                        <div className="rank">
                            <div className="num-1">3</div>
                            <div>
                                <div className="num-head">Development</div>
                                <div className="num-para">
                                    Our team will undertake web development on the lines of the
                                    finalized design. We will deliver the beta version to the
                                    client for the examination of responsiveness, operability, and
                                    performance.
                                </div>
                            </div>
                        </div>{" "}
                        <div className="rank">
                            <div className="num-1">4</div>
                            <div>
                                <div className="num-head">Launch</div>
                                <div className="num-para">
                                    The impeccably designed, developed, and optimized website
                                    would be launched on the predefined date and would be promoted
                                    widely. This would be instrumental in enhancing the reach and
                                    customer engagement.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commitments">
                    <div className="commitments-card">
                        <div className="our">OUR</div>
                        <div className="Guarantee-txt">commitments & Guarantee</div>
                        <div className="para-guareeentee">
                            We guarantee a uniquely designed, responsive website that is
                            optimized optimally to garner the best result for you.
                            SpiderWorks, a reputed web development company pursues a
                            time-bound process to help the clients plan associated activities.
                        </div>
                        <div className="ineer-flex">
                            <div>
                                <div className="txt-inner-one">Design</div>
                                <div className="txt-inner-para">
                                    Exclusive custom-tailored design, implementing most advanced
                                    features, to highlight your brand in the best possible way.
                                </div>
                            </div>
                            <div>
                                <div className="txt-inner-one">Reliability</div>
                                <div className="txt-inner-para">
                                    More than one and half decades of legacy, of unblemished
                                    credibility, we deliver what we promise.
                                </div>
                            </div>{" "}
                            <div>
                                <div className="txt-inner-one">Development</div>
                                <div className="txt-inner-para">
                                    Earmarked team for development, to interact constantly with
                                    the client constantly and create an outstanding website.
                                </div>
                            </div>{" "}
                            <div>
                                <div className="txt-inner-one">Delivery</div>
                                <div className="txt-inner-para">
                                    SpiderWorks assures you the delivery of the developed, tested,
                                    and glitch-free website in the schedule agreed upon.
                                </div>
                            </div>
                            <div>
                                <div className="txt-inner-one">Optimization</div>
                                <div className="txt-inner-para">
                                    We will optimize the website to reach out to potential users
                                    and turn them into customers.
                                </div>
                            </div>{" "}
                            <div>
                                <div className="txt-inner-one">Support</div>
                                <div className="txt-inner-para">
                                    Trust us to provide you with matchless services and render you
                                    with exceptional support round the clock.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trust">
                    <div>
                        <div className="trust-img-div">
                            <img src={hand} alt="hand" className="hand" />
                            <div className="img-inner-txt-blur">
                                <div className="leader">Leaders</div>
                                <div className="us">Trust Us</div>
                            </div>
                            <div className="btn-txt-div">
                                <div className="trust-txt">
                                    Dive-in to learn about our marketing portfolio and creative
                                    skills.
                                </div>
                                <button className="service-contact" onClick={() => (window.location.href = "contact-us")}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="more-img">
                        <div className="service-one-more">
                            <img src={service} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service1} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service2} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service3} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service1} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service2} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service3} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service1} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service2} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service3} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service1} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service2} alt="service" className="service-one-more" />
                        </div>
                        <div className="service-one-more">
                            <img src={service3} alt="service" className="service-one-more" />
                        </div>
                    </div>
                </div>
                <div className="case">
                    <div className="case-txt">Case Studies</div>
                    <div className="case-small-txt">
                        Learn how we executed campaigns to get results
                    </div>
                    <div className="case-img">
                        <div>
                            <img src={caseimg} alt="caseimg" className="caseimg" />
                        </div>
                        <div>
                            <div className="case-head">
                                Moodja
                            </div>
                            <div className="case-para">Sov Technologies web development agency created new
                                design, developed new website to achieve business
                                goals of Moodja.</div>
                            <button className="full-case d-flex align-items-center">see full case <ArrowForwardIcon /></button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="full-case more">more projects</button>
                </div>

                <div>
                    <Customer />
                </div>
            </div>
        </>
    );
};

export default ServiceOneImg;
