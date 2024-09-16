import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Coder = () => {
    return (
        <div className="Coder-health">
            <div className="heading-main">
                Why Do Businesses Love <span className="heading-color">SOV Technologies</span> to
                Hire Healthcare Developers?
            </div>
            <div className="small-text">
                Access{" "}
                <span className="small-higlight">
                    pre-vetted medical developers to simplify your hiring
                </span>
                , ensuring each addition to your team aligns with your exact needs.
            </div>
            <div className="Candidate-box " style={{ gap: "35px" }}>
                <div className="box">
                    <div className="bolder-red">
                        <ArrowBackIosNewIcon className="ArrowBackIosNewIcon" />
                        1%
                    </div>
                    <div className="text">Candidate Drop out Ratio</div>
                </div>
                <div className="box">
                    <div className="bolder-red">4:1</div>
                    <div className="text">Submit to Hire Ratio</div>
                </div>{" "}
                <div className="box">
                    <div className="bolder-red">90%</div>
                    <div className="text">Less Time in Hiring</div>
                </div>{" "}
                <div className="box">
                    <div className="bolder-red">50%</div>
                    <div className="text">Reduction in Hiring Cost</div>
                </div>
            </div>
        </div>
    );
};

export default Coder;
