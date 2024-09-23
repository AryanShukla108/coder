import React from 'react'
import glimpse1 from "../../assests/hezky.png"
import glimpse2 from "../../assests/jedlo.png"
import glimpse3 from "../../assests/kotak.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';




const Glimpse = () => {
    const imgData = [
        { banner: glimpse1, name: "Hezky Tech", tittle: "Monitoring" },
        { banner: glimpse2, name: "jedlo app", tittle: "Food Delivery" },
        { banner: glimpse3, name: "zurich kotak", tittle: "Insurance" },
    ];
    return (
        <div className='Glimpse'>
            <div className="sm-team">Featured Case-Studies</div>
            <div className="b-head">A Glimpse into Our Digital Excellence</div>
            <div className="s-head">
                Explore a gallery of our proudest achievements and witness the seamless fusion of creativity and technology in each project within our diverse portfolio.
            </div>
            <div className="cards-container">{
                imgData.map((item, index) => (
                    <div key={index} className="container">
                        <div className='img-container'> <img src={item.banner} alt="banner" className="img-banner" /></div>
                        <div className='sm-container'>
                            <div className='inner-container'>
                                <div>
                                    <div className='name'>{item.name}</div>
                                    <div className='title'>{item.tittle}</div>
                                </div>
                                <div className='circle' onClick={() => (window.location.href = "project")}>
                                    <div className='inner-circle'><ArrowForwardIcon style={{ color: "white" }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }</div>
            <button onClick={() => (window.location.href = "more-project")} className='project'><ElectricBoltIcon style={{ color: "white" }} /> View All Projects</button>
        </div>
    )
}

export default Glimpse