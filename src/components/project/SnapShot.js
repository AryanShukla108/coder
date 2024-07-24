import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SnapShot = () => {
    return (
        <div className="SnapShot">
            <div className="head">Project Snapshot</div>
            <div className="details">
                <div>
                    <div className="in-head">Team Members</div>
                    <div className="sm-card">
                        <div className="sm-svg">
                            <AccountCircleIcon className="AccountCircleIcon" />
                        </div>
                        <div>
                            <div className="name">Shantanu Gupta</div>
                            <div className="des">Flutter Developer</div>
                        </div>
                    </div>
                    <div className="sm-card">
                        <div className="sm-svg">
                            <AccountCircleIcon className="AccountCircleIcon" />
                        </div>
                        <div>
                            <div className="name">Shantanu Gupta</div>
                            <div className="des">Flutter Developer</div>
                        </div>
                    </div><div className="sm-card">
                        <div className="sm-svg">
                            <AccountCircleIcon className="AccountCircleIcon" />
                        </div>
                        <div>
                            <div className="name">Shantanu Gupta</div>
                            <div className="des">Flutter Developer</div>
                        </div>
                    </div>
                </div>
                <div className="result">
                    <div className="in-head">The results</div>
                    <div className="other-card">
                        <div className="box">
                            <div className="nmu">02</div>
                            <div className="num-text">Apps Released</div>
                        </div>
                        <div className="box">
                            <div className="nmu">02</div>
                            <div className="num-text">Apps Released</div>
                        </div><div className="box">
                            <div className="nmu">02</div>
                            <div className="num-text">Apps Released</div>
                        </div>
                    </div>

                    <div className="small-other-card">
                        <div className="small-box-recatngle">Edtech</div>
                        <div className="small-box-recatngle">Edtech</div>
                        <div className="small-box-recatngle">Edtech</div>
                        <div className="small-box-recatngle">Edtech</div>
                        <div className="small-box-recatngle">Edtech</div>
                        <div className="small-box-recatngle">Edtech</div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SnapShot;
