import React, { useEffect, useRef, useState } from "react";
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
import company14 from "../../assests/company14.png";
import company15 from "../../assests/company15.png";
import company16 from "../../assests/company16.png";
import company17 from "../../assests/company17.png";
import company18 from "../../assests/company18.png";
import company19 from "../../assests/company19.png";
import company20 from "../../assests/company20.png";
import company21 from "../../assests/company21.png";
import company22 from "../../assests/company22.png";
import company23 from "../../assests/company23.png";
import company24 from "../../assests/company24.png";
import company25 from "../../assests/company25.png";
import { LeftArrow, RightArrow } from "../../assests/Appicons";



const CompanyWorking = () => {

  const containerRef = useRef(null);
  const contentWidth = 150; // Width of a single item in pixels

  const scrollLeft = () => {
    if (containerRef.current) {
      const { scrollLeft } = containerRef.current;
      if (scrollLeft === 0) {
        // Scroll to the end if at the start
        containerRef.current.scrollTo({ left: contentWidth * imgData.length, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: -contentWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Scroll to the start if at the end
        containerRef.current.scrollTo({ left: contentWidth, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: contentWidth, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll container to the initial position
    container.scrollTo({ left: contentWidth, behavior: 'auto' });

    const handleScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container;

      if (scrollLeft === 0) {
        // Adjust to the end of duplicated content
        container.scrollLeft = clientWidth * imgData.length;
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        // Adjust to the start of duplicated content
        container.scrollLeft = contentWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
    { banner: company15 },
    { banner: company16 },
    { banner: company18 },
    { banner: company19 },
    { banner: company20 },
    { banner: company21 },
    { banner: company22 },
    { banner: company23 },
    { banner: company24 },
    { banner: company17 },
    { banner: company25 },
    { banner: company14 },


  ];
  return (
    <div className="CompanyWorking">

      <div className="sub-head">
        <div className="head-box">
          <div className="dash"></div>
          <div className="head-1">Meet the Company</div>
          <div className="head-2">We are Working With</div>
        </div>
        <div className="btn-box">
          <button onClick={scrollLeft} className="btn"><LeftArrow /></button>
          <button onClick={scrollRight} className="btn2"><RightArrow /></button>
        </div>

      </div>

      <div className="cards-container" ref={containerRef}>
        {
          imgData.map((item, index) => (
            <div key={index} className="imgcontainer">
              <img src={item.banner} alt="banner" className="img-banner" />
            </div>
          ))
        }
        {
          imgData.map((item, index) => (
            <div key={index} className="imgcontainer">
              <img src={item.banner} alt="banner" className="img-banner" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CompanyWorking;
