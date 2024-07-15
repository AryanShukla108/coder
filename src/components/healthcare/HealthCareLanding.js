import React from "react";

const HealthCareLanding = () => {
    return (
        <div className="HealthCareLanding">
            <div className="row">
                <div className="col-6 hire-health">
                    <div className="heading-main">
                        Hire <span className="heading-color">Healthcare</span> Software
                        Developers
                    </div>
                    <div className="small-text">
                        Build disruptive digital healthcare solutions by hiring pre-vetted{" "}
                        <span className="small-higlight">
                            top medical developers with strong technical and communication{" "}
                        </span>{" "}
                        that perfectly aligns with your job requirements.
                    </div>
                    <div className="hireNowContainer">
                        <input
                            type="email"
                            placeholder="Your work email"
                            className="emailInput"
                        />
                        <button className="hireButton">
                            Hire Now
                        </button>
                    </div>
                </div>
                <div className="col-6">dsgsrg</div>
            </div>
        </div>
    );
};

export default HealthCareLanding;
