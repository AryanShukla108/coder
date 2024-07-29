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




const Companies = () => {
    return (
        <div className='Companies-care '>
            <div className='d-flex justify-content-center align-items-center head-txt'>Trusted by Leading Companies</div>
            <div className='d-flex justify-content-center align-items-center slider-container' style={{ gap: "27px" }}>

                <div >
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div><div>
                    <img src={img3} alt="" />
                </div><div>
                    <img src={img4} alt="" />
                </div><div>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" />
                </div>
                <div>
                    <img src={img7} alt="" />
                </div>
                <div>
                    <img src={img8} alt="" />
                </div>
                <div>
                    <img src={img9} alt="" />
                </div>
                <div>
                    <img src={img10} alt="" />
                </div>
                <div>
                    <img src={img11} alt="" />
                </div>
                <div>
                    <img src={img12} alt="" />
                </div>
                <div>
                    <img src={img13} alt="" />
                </div>
                <div>
                    <img src={img14} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Companies