import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Impact = () => {
    return (
        <div className="Challenge">
            <div className="inner-challenge">
                <div className="head">the challenge</div>
                <div className="heads">Founder's Hurdle</div>
                <div className="text-space">
                    <div>
                        <div className="para">
                            Having spent years inspiring young minds in underprivileged
                            communities, Bibli's founder saw a stark disparity in access to
                            quality literacy resources. They wanted to make a real impact by
                            building an engaging and affordable app.
                        </div>
                        <div className="para">
                            Having spent years inspiring young minds in underprivileged
                            communities, Bibli's founder saw a stark disparity in access to
                            quality literacy resources. They wanted to make a real impact by
                            building an engaging and affordable app.
                        </div>{" "}
                        <div className="para">
                            Having spent years inspiring young minds in underprivileged
                            communities, Bibli's founder saw a stark disparity in access to
                            quality literacy resources. They wanted to make a real impact by
                            building an engaging and affordable app.
                        </div>
                    </div>
                    <div className="main-box">
                        <div className="box">
                            <div>
                                <div className="number">30+</div>
                                <div className="app">Web application</div>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <div className="number">5+</div>
                                <div className="app">Enterprise application</div>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <div className="number">10+</div>
                                <div className="app">Mobile application</div>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <div className="number">6+</div>
                                <div className="app">Security and test</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-main">
                <button className="button-chalenge" onClick={() => (window.location.href = "/hire")}>Hire Talent <ArrowForwardIcon /> </button>
                <button className="button-chalenge-2" onClick={() => (window.location.href = "/job")}>Find remote jobs <ArrowForwardIcon /></button>
            </div>
        </div>
    );
};

export default Impact;
