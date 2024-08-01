
import React, {  useState } from 'react'
import { Ent, FinTech, Fintechv2, Healthcarev2, SalesForce, SapSvg, Startup, Usa, WorkdayV2 } from '../assests/Appicons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import logoCoder from "../assests/logo-coder.png"
// import sovlogo from "../assests/sovlogo.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseEnterv2 = () => {
    setIsExpand(true);
  };


  const options = [
    { label: "Enterprise software companies", value: 'healthcare-enterprise' },
    { label: "Healthcare Companies", value: 'healthcare-companies' },
    { label: "Fintech Companies", value: 'healthcare-fintech' },
    { label: "Startups", value: 'healthcare-startup' },
    { label: "USA Startups & Businesses", value: 'healthcare-startup-bussinesses' },
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
      { label: 'USA Startups & Businesses', url: 'healthcare-startup-bussinesses', imgSrc:  <Usa /> },
      { label: 'Startups', url: 'healthcare-startup', imgSrc: <Startup />  },
      { label: 'Salesforce', url: 'healthcare-salesforce', imgSrc: <SalesForce />  },
      { label: 'SAP', url: 'healthcare-sap', imgSrc: <SapSvg />  }, 
      { label: 'VC Portfolio', url: 'healthcare-portfolio', imgSrc: < SapSvg/>  }, 
      { label: 'Pharma Industry', url: 'healthcare-pharma', imgSrc: <Healthcarev2 />  }, 
      { label: 'ServiceNow', url: 'healthcare-service', imgSrc: <Healthcarev2 />  }, 
      { label: 'Workday', url: 'healthcare-workday', imgSrc: <WorkdayV2 />  }, 
    ] },
    
    // {
    //   title: 'By Skills',
    //   items: [
    //     { label: 'React', url: 'hire', imgSrc: <Fintechv2 /> },
    //     { label: 'Flutter', url: 'hire', imgSrc: <Healthcarev2 /> }, ]
    // }
  
  ]


  return (
    <div className='navbar'>
      <div className='logo-box' onClick={() => (window.location.href = '/')}>
        {/* <img src={sovlogo} alt="" className='logo'></img> */}
        <svg width="60" height="51" className="logo" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_591_690)">
            <path d="M44.8447 25.3975C43.3252 23.6697 42.1691 22.2665 40.9171 20.9532C36.737 16.5688 31.7341 14.7111 25.7013 16.364C22.2482 17.3128 20.0319 19.9495 19.729 23.2602C19.3807 27.0953 20.5873 29.0229 24.3079 30.9305C27.2057 32.4186 30.0883 33.9516 32.8851 35.6245C34.8691 36.813 36.0353 38.6356 35.7122 41.0526C35.379 43.5793 33.6676 44.8877 31.3655 45.6866C28.5738 46.6554 25.777 46.6754 22.9549 45.9513C17.5077 44.5481 13.3529 41.4071 10.3996 36.6881C9.97556 36.014 9.51615 35.3598 8.62259 35.8142C7.91077 36.1738 8.27425 36.783 8.48124 37.3323C11.5507 45.3621 22.5561 51.9836 31.1788 50.885C35.0761 50.3857 38.4888 48.9525 40.3113 45.1623C42.8304 39.914 41.1544 34.9104 35.798 31.8493C32.9003 30.1914 29.9066 28.6983 26.9684 27.1003C25.7618 26.4412 25.2217 25.4125 25.2974 24.0093C25.3782 22.5062 26.3828 21.842 27.5692 21.3327C30.265 20.1692 32.6327 21.0181 34.8742 22.5661C41.8763 27.395 49.5801 28.7133 57.8594 26.9855C58.6016 26.8307 59.7879 27.1353 59.9798 26.0667C60.1363 25.1978 59.2477 24.6335 58.652 24.0892C57.1173 22.686 55.5826 21.2728 53.9419 19.9994C52.3365 18.751 52.1699 17.4576 53.0332 15.6599C54.2549 13.1232 54.9011 10.3117 57.1325 8.08957C54.0631 8.61889 52.2204 8.03464 51.7761 4.89863C51.6146 3.78006 50.7917 4.63896 50.3172 4.99351C47.4345 7.14078 47.0004 7.02592 45.809 3.81002C45.3344 2.52666 41.1544 0.219596 40.0942 0.823826C37.8275 2.11718 35.6617 1.87748 33.3697 0.943673C29.4674 -0.639309 25.9486 -0.43457 23.3083 3.33562C22.7025 4.19952 21.6727 4.44421 20.7488 4.82872C12.5957 8.19443 7.5069 14.2118 5.326 22.6161C4.95747 24.0392 4.33652 24.9481 3.10471 25.6772C1.87795 26.4012 0.585569 27.1702 0.00500488 29.4823C5.04834 26.0467 10.1825 25.6222 15.8771 26.1565C14.0496 23.3202 14.9331 21.123 16.2658 19.0106C17.0685 17.7423 18.058 16.6187 19.2292 15.6499C25.5952 10.3966 35.0004 10.866 41.7501 16.8584C42.4417 17.4726 43.1081 17.917 43.8956 18.1318C44.3298 18.2516 44.7084 18.2766 44.976 18.2816C45.1527 18.2816 45.289 18.2716 45.3041 18.2716C45.7332 18.2416 48.1817 18.706 53.9469 19.9894C50.3727 19.7297 47.904 19.48 46.435 19.2054C46.1169 19.1455 45.294 18.9857 44.875 19.4151C44.6175 19.6748 44.557 20.1492 44.7135 20.9132C44.976 22.1666 45.4 23.465 44.8498 25.4075L44.8447 25.3975Z" fill="url(#paint0_linear_591_690)" />
            <path d="M12.8531 29.4375C14.5191 36.853 19.9461 41.5321 27.7661 42.4509C28.801 42.5708 30.3508 43.0751 30.7598 42.0464C31.2394 40.833 30.3256 39.5246 29.2856 38.6058C28.9171 38.2812 28.4476 38.0615 28.0033 37.8318C24.1615 35.8144 20.2086 33.9867 16.9221 31.0604C15.8721 30.1266 14.5444 29.5673 12.8531 29.4425V29.4375Z" fill="#FEBF24" />
            <path d="M44.4206 46.7704C47.7526 43.6094 49.7669 39.9441 50.9431 35.7744C51.1148 35.1652 51.0138 34.6309 50.2566 34.4361C48.7269 34.0516 47.2275 33.5423 45.6272 33.5173C44.8093 33.5073 44.4105 33.8469 44.4156 34.6908C44.4307 38.6058 44.4206 42.5258 44.4206 46.7654V46.7704Z" fill="#FEBF24" />
            <path d="M41.0079 30.5458C42.1186 31.8541 43.1384 32.2137 44.3601 32.2636C49.0248 32.4634 53.533 33.2174 57.395 36.1037C57.7736 36.3884 58.1623 36.7629 58.6571 36.1586C59.7627 34.8104 58.8792 31.919 57.1577 31.4996C51.9831 30.2412 46.7227 30.3311 41.013 30.5458H41.0079Z" fill="#FEBF24" />
            <path d="M4.12952 34.8904C5.98732 33.9965 7.35543 33.3174 8.74374 32.6782C10.1371 32.039 8.93053 31.1202 8.99616 30.3462C9.04159 29.8518 9.22333 29.0278 8.33482 29.0528C7.57251 29.0728 6.9869 29.5422 6.61332 30.2762C5.89645 31.6944 5.1089 33.0727 4.12952 34.8904Z" fill="#FEBF24" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_591_690" x1="-4.34972e-05" y1="25.4974" x2="60" y2="25.4974" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FEBF24" />
              <stop offset="1" stop-color="#EA4232" />
            </linearGradient>
            <clipPath id="clip0_591_690">
              <rect width="60" height="51" fill="white" />
            </clipPath>
          </defs>
        </svg>


      </div>

      <ul className='list'>
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
        <li onClick={() => (window.location.href = 'project')}>For Developers  </li>
        {/* <li>Reviews</li> */}
        {/* <li onClick={() => (window.location.href = 'privacy')}>Privacy & Policy</li> */}
        <li onClick={() => (window.location.href = 'hire')}>Schedule a call</li>
        {/* <li onClick={() => (window.location.href = 'service-other')}>Other service</li> */}
      </ul>
      <div className='nav-btn-box'>
        {/* <button className='nav-btn'> Sign In</button> */}
        <button onClick={() => (window.location.href = 'hire')} className='nav-btn'>  Hire Developers</button>
      </div>

    </div>
  )

}