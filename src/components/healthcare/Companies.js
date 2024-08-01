import React from 'react'
import img1 from "../../assests/company1.png"
import img2 from "../../assests/company2.png"
import img3 from "../../assests/company3.png"
import img4 from "../../assests/company4.png"
import img5 from "../../assests/company5.png"
import img6 from "../../assests/company6.png"
import img7 from "../../assests/company7.png"
import img8 from "../../assests/company8.png"
import img9 from "../../assests/company9.jpg"
import img10 from "../../assests/company10.png"
import img11 from "../../assests/company11.png"
import img12 from "../../assests/company12.png"
import img13 from "../../assests/company13.png"
import img14 from "../../assests/company14.png"
import img15 from "../../assests/company15.png"
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




const Companies = () => {


    const imgData = [
        { banner: img1 },
        { banner: img2 },
        { banner: img3 },
        { banner: img4 },
        { banner: img5 },
        { banner: img6 },
        { banner: img7 },
        { banner: img8 },
        { banner: img9 },
        { banner: img10 },
        { banner: img11 },
        { banner: img12 },
        { banner: img13 },
        { banner: img14 },
        { banner: img15 },
        { banner: company16 },
        { banner: company17 },
        { banner: company18 },
        { banner: company19 },
        { banner: company20 },
        { banner: company21 },
        { banner: company22 },
        { banner: company23 },
        { banner: company24 },
        { banner: company25 },


    ];

    return (
        <div className='Companies-care '>
            <div className='d-flex justify-content-center align-items-center head-txt'>Trusted by Leading Companies</div>
            <div className='d-flex justify-content-center align-items-center slider-container' style={{ gap: "27px" }}>
            {
                imgData.map((data) =>{

                    return(
                    <div >
                    <img src={data.banner} alt="" />
                </div> )
                } )
            }
              
                
            </div>
        </div>
    )
}

export default Companies