
import React, {  useState } from 'react'
import { Ent, FinTech, Fintechv2, Ham, Healthcarev2, Logos, SalesForce, SapSvg, Startup, Usa, WorkdayV2 } from '../assests/Appicons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import logoCoder from "../assests/logo-coder.png"
// import sovlogo from "../assests/sovlogo.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ArrowDownwardSharp } from '@mui/icons-material';

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };


  const options = [
    { label: "Enterprise software companies", value: 'healthcare-enterprise' },
    { label: "Healthcare Companies", value: 'healthcare-companies' },
    { label: "Fintech Companies", value: 'healthcare-fintech' },
    { label: "Startups", value: 'healthcare-startup' },
    { label: "USA Startups & Businesses", value: 'usa-startup-bussinesses' },
    { label: "Salesforce Need", value: 'healthcare-salesforce' },
    { label: "VC Portfolio Companies", value: 'healthcare-portfolio' },
    { label: "Pharma Industry", value: 'healthcare-pharma' },
    { label: "ServiceNow", value: 'healthcare-service' },
    { label: "Workday", value: 'healthcare-workday' },
    { label: "SAP", value: 'healthcare-sap' }
];

const dropdownCategories = [
  {
    title: 'By Industries',
    items: [
      { label: 'Enterprise software ', url: 'healthcare-enterprise', imgSrc: <Ent /> },
      { label: 'Healthcare ', url: 'healthcare-companies', imgSrc: <Healthcarev2 /> },
      { label: 'Fintech ', url: 'healthcare-fintech', imgSrc: <FinTech /> },
      { label: 'USA Startups & Businesses', url: 'usa-startup-bussinesses', imgSrc:  <Usa /> },
      { label: 'Startups', url: 'healthcare-startup', imgSrc: <Startup />  },
      { label: 'Salesforce', url: 'healthcare-salesforce', imgSrc: <SalesForce />  },
      { label: 'SAP', url: 'healthcare-sap', imgSrc: <SapSvg />  }, 
      { label: 'VC Portfolio', url: 'healthcare-portfolio', imgSrc: < Ent/>  }, 
      { label: 'Pharma Industry', url: 'healthcare-pharma', imgSrc: <Healthcarev2 />  }, 
      { label: 'ServiceNow', url: 'healthcare-service', imgSrc: <Usa />  }, 
      { label: 'Workday', url: 'healthcare-workday', imgSrc: <SalesForce />  }, 
    ] },
    
    // {
    //   title: 'By Skills',
    //   items: [
    //     { label: 'React', url: 'hire', imgSrc: <Fintechv2 /> },
    //     { label: 'Flutter', url: 'hire', imgSrc: <Healthcarev2 /> }, ]
    // }
  
  ]

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); 
  }

  const toggleMenu2 = () => {
    setIsMenuOpen2(prevState => !prevState); 
  }

  const handleItemClick = (url) => {
    window.location.href = url
  };


  return (
    <div className='navbar'>
      <div className='logo-box' onClick={() => (window.location.href = '/')}>
        {/* <img src={sovlogo} alt="" className='logo'></img> */}
        
        <Logos />


      </div>
 
      <ul className='list' >
        {/* <li onClick={() => (window.location.href = 'about-us')}>About Us</li> */}
        <li onClick={() => (window.location.href = 'service')}>Service</li>
        {/* <li onClick={() => (window.location.href = 'project')}>Case Studies</li> */}
        <li onMouseEnter={handleMouseEnter} >
          
           {/* <Dropdown
            value={selectedOption}
            options={options}
            onChange={handleChange}
            placeholder="For companies"
            className="w-full "
        /> */} For Companies  { isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} 

{isOpen && (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          {dropdownCategories.map((category, index) => (
            <div key={index} className="dropdown-category d-flex">
              <div className="category-title" >{category.title} <ChevronRightIcon /></div>
              <div className="category-items">
                {category.items.map((item, idx) => 

                  <div key={idx} onClick={() => (window.location.href = item.url)} className="dropdown-item">
                    {/* <img src={item.imgSrc} alt={item.label} /> */}
                   {item.imgSrc} <span >{item.label}</span>
                  </div>
                  
                  
                )}
              </div>
            </div>
          ))}

          <div className='text-box'>
            <span>Not sure which skills to look for?</span>
            <span>Talk to our experts</span>
            <button className='btn' onClick={() => (window.location.href = '/hire')}>Find me a right Talent</button>
          </div>
        </div>
      )}
        
        </li> 
        <li onClick={() => (window.location.href = 'developer')}>For Developers  </li>
        {/* <li>Reviews</li> */}
        {/* <li onClick={() => (window.location.href = 'privacy')}>Privacy & Policy</li> */}
        <li onClick={() => (window.location.href = 'hire')}>Schedule a call</li>
        {/* <li onClick={() => (window.location.href = 'service-other')}>Other service</li> */}
      </ul>
      <div className='nav-btn-box'>
        {/* <button className='nav-btn'> Sign In</button> */}
        <button onClick={() => (window.location.href = 'hire')} className='nav-btn'>  Hire Developers</button>
      </div>

      <div className='ham' onClick={toggleMenu}>
      <Ham />
      </div>

      <div className={`list-box ${isMenuOpen ? 'active' : ''}`} >
      <ul className='list2' >
      <li onClick={() => (window.location.href = 'service')}>Service</li>
      <div className="dropdown">
      <button className="dropdown-button" onClick={toggleMenu2}>Categories <ArrowDownwardSharp  className='arrow' /> </button>
      {
        isMenuOpen2 &&    <div className="dropdown-content">
        {dropdownCategories.map((category, index) => (
          <div key={index} className="dropdown-category">
            {/* <h4>{category.title}</h4> */}
            <ul>
              {category.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  onClick={() => handleItemClick(item.url)} 
                  className="dropdown-item"
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {item.imgSrc}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      }
   

    </div>
      <li onClick={() => (window.location.href = 'developer')}>For Developers  </li>
      <li onClick={() => (window.location.href = 'hire')}>Schedule a call</li>
      <div className='nav-btn-box2'>
        <button onClick={() => (window.location.href = 'hire')} className='nav-btn'>  Hire Developers</button>
      </div>
      </ul>
        </div>
     

    </div>
  )

}