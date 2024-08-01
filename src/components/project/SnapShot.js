import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import smartboy from "../../assests/smartborderboy.png"
import smartboyother from "../../assests/smartboy2.png"
import smartgirl from "../../assests/smartgirl.png"


const SnapShot = () => {
    return (
        <div className="SnapShot">
            <div className="head">Project Snapshot</div>
            <div className="details">
                <div>
                    <div className="in-head">Team Members</div>
                    <div className="sm-card">
                        <div className="sm-svg">
                            {/* <AccountCircleIcon className="AccountCircleIcon" />  */}
                            <img src={smartboy} alt="smartboy" className="AccountCircleIcon" />
                        </div>
                        <div>
                            <div className="name">Shantanu G</div>
                            <div className="des">SE Developer</div>
                        </div>
                    </div>
                    <div className="sm-card">
                        <div className="sm-svg">
                            {/* <AccountCircleIcon className="AccountCircleIcon" /> */}
                            <img src={smartboyother} alt="smartboy" className="AccountCircleIcon" />

                        </div>
                        <div>
                            <div className="name">Aryan S</div>
                            <div className="des">SE Developer</div>
                        </div>
                    </div><div className="sm-card">
                        <div className="sm-svg">
                            {/* <AccountCircleIcon className="AccountCircleIcon" /> */}
                            <img src={smartgirl} alt="smartboy" className="AccountCircleIcon" />

                        </div>
                        <div>
                            <div className="name">Riya Y</div>
                            <div className="des">SE Developer</div>
                        </div>
                    </div>
                </div>
                <div className="result">
                    <div className="in-head">The results</div>
                    <div className="other-card">
                        <div className="box">
                            <div className="nmu">01</div>
                            <div className="num-text">Released</div>
                        </div>
                        <div className="box">
                            <div className="nmu">04</div>
                            <div className="num-text">Months to Build</div>
                        </div><div className="box">
                            <div className="nmu">60</div>
                            <div className="num-text">Months Contract</div>
                        </div>
                    </div>

                    <div className="small-other-card">
                        <div className="small-box-recatngle">Postgres</div>
                        <div className="small-box-recatngle">AWS</div>
                        <div className="small-box-recatngle">Angular</div>
                        <div className="small-box-recatngle">MQTT</div>
                        <div className="small-box-recatngle">EC2 instance</div>
                        <div className="small-box-recatngle">Flutter</div>
                        <div className="small-box-recatngle">Node.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SnapShot;
