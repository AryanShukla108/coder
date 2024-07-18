import React from "react";
import banner1 from "../../assests/banner1.png";
import banner2 from "../../assests/banner2.png";
import banner3 from "../../assests/banner3.png";
import banner4 from "../../assests/banner4.png";
import banner5 from "../../assests/banner5.png";
import banner6 from "../../assests/banner6.png";
import banner7 from "../../assests/banner7.png";

const CompanyWorking = () => {
    const imgData = [
        { banner: banner1 },
        { banner: banner2 },
        { banner: banner3 },
        { banner: banner4 },
        { banner: banner5 },
        { banner: banner6 },
        { banner: banner7 },
        // Add more data as needed
    ];
    return (
        <div className="CompanyWorking">
            <div className="sub-head">
                <div className="head-1">Meet the Company</div>
                <div className="head-2">We are Working With</div>
            </div>
            <div className="cards-container">{
                imgData.map((item, index) => (
                    <div key={index} className="container">
                        <img src={item.banner} alt="banner" className="img-banner" />
                    </div>
                ))
            }</div>
        </div>
    );
};

export default CompanyWorking;
