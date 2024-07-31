import React, { useRef } from "react";
// import banner1 from "../../assests/banner1.png";
// import banner2 from "../../assests/banner2.png";
// import banner3 from "../../assests/banner3.png";
// import banner4 from "../../assests/banner4.png";
// import banner5 from "../../assests/banner5.png";
// import banner6 from "../../assests/banner6.png";
// import banner7 from "../../assests/banner7.png";
import company1 from "../../assests/company1.png";
import company2 from "../../assests/company2.png";
// import company3 from "../../assests/company3.png";
import hirekhan from "../../assests/hirekhan.png"
import company4 from "../../assests/company4.png";
// import company5 from "../../assests/company5.png";
import datacomp from "../../assests/datacomp.png"
import company6 from "../../assests/company6.png";
import company7 from "../../assests/company7.png";
import company8 from "../../assests/company8.png";
// import company9 from "../../assests/company9.jpg";
import techved from "../../assests/techved.png"
import company10 from "../../assests/company10.png";
import company11 from "../../assests/company11.png";
import company12 from "../../assests/company12.png";
import company13 from "../../assests/company13.png";
import { LeftArrow, RightArrow } from "../../assests/Appicons";



const CompanyWorking = () => {

    const containerRef = useRef(null);

    const scrollLeft = () => {
      containerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      containerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    };


    const imgData = [
        { banner: company1 },
        { banner: company2 },
        { banner: hirekhan },
        { banner: company4 },
        { banner: datacomp },
        { banner: company6 },
        { banner: company7 },
        { banner: company8 },
        { banner: techved },
        { banner: company10 },
        { banner: company11 },
        { banner: company12 },
        { banner: company13 },


        // Add more data as needed
    ];
    return (
        <div className="CompanyWorking">

            <div className="sub-head">
                <div className="head-box">
                <div className="head-1">Meet the Company</div>
                <div className="head-2">We are Working With</div>
                </div>
                <div className="btn-box">
                <button onClick={scrollLeft} className="btn"><LeftArrow /></button>
                <button onClick={scrollRight} className="btn2"><RightArrow /></button>
                </div>
               
            </div>
         
            <div className="cards-container" ref={containerRef}>{
                imgData.map((item, index) => (
                    <div key={index} className="imgcontainer">
                        <img src={item.banner} alt="banner" className="img-banner" />
                    </div>
                ))
            }</div>
        </div>
    );
};

export default CompanyWorking;
