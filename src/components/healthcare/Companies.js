import React from 'react'
import img1 from "../../assests/img1.png"
import img2 from "../../assests/img2.png"
import img3 from "../../assests/img3.png"
import img4 from "../../assests/img4.png"
import img5 from "../../assests/img5.png"
import img6 from "../../assests/img6.png"






const Companies = () => {
    return (
        <div className='Companies-care'>
            <div className='d-flex justify-content-center align-items-center head-txt'>Trusted by Leading Healthcare Companies</div>
            <div className='d-flex justify-content-center align-items-center' style={{ gap: "27px" }}>
                <div>
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
                </div><div>
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Companies