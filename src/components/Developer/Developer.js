import React, { useState } from "react";
import dev from "../../assests/dev.png";
import curve from "../../assests/curve.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import company16 from "../../assests/company14.png";
import company17 from "../../assests/company17.png";
import company18 from "../../assests/company25.png";
import company19 from "../../assests/company22.png";
import company20 from "../../assests/company15.png";
import mob from "../../assests/mob.png";
import mob2 from "../../assests/mob2.png";
import growth from "../../assests/growth1.png";
import growth1 from "../../assests/growth2.png";
import growth2 from "../../assests/growth3.png";
import growth3 from "../../assests/growth4.png";
import client from "../../assests/client.png";
import client1 from "../../assests/client1.png";
import client2 from "../../assests/client2.png";
import { Upload } from "@mui/icons-material";
import boy from "../../assests/boy.png"
import { CommaV3, LeftArrow, LeftArrowv2, RightArrowv2 } from "../../assests/Appicons";
import ReactStars from "react-stars";
// import company23 from "../../assests/company23.png";
// import company24 from "../../assests/company24.png";
// import company25 from "../../assests/company25.png";

export const Developer = () => {


  const slides = [
    {
      imgSrc: growth,
      title: 'Resume Builder',
      text: 'Use our free tool to create an ATS-optimized resume in 3 minutes',
    },
    {
      imgSrc: growth1,
      title: 'Remote Job Discovery',
      text: 'Browse remote engineering job posts matched to your preferences',
    },
    {
      imgSrc: growth2,
      title: 'Virtual Events',
      text: 'Grow your career with online events hosted by tech experts worldwide',
    },
    {
      imgSrc: growth3,
      title: 'Rewards and Incentives',
      text: 'Grow your career with online events hosted by tech experts worldwide',
    },
  ];


  const duplicatedSlides = [...slides, ...slides, ...slides];
  const [currentIndex, setCurrentIndex] = useState(slides.length);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === slides.length ? duplicatedSlides.length - slides.length : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === duplicatedSlides.length - 1 ? slides.length : prevIndex + 1));
  };


  return (
    <div className="developer ">
      <div className="devbox" style={{ backgroundImage: `url(${curve})` }}>
        <div className="devleft">
          <div className="heading-main">
            <h3>&lt;For Devlopers /&gt; </h3>
            Develop your own{" "}
            <span className="heading-color">success story</span>
          </div>
          <p>
            Be a part of the future of work. Boost your career with global
            clients, ambitious projects and the freedom of working remotely.{" "}
          </p>
          <h2>Remote. Proven. Ready.</h2>
          <div>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your email"
            />
            <button className="send-btn" >
              Apply Today <ArrowForwardIcon />
            </button>
          </div>
          <h3 onClick={() => (window.location.href = '/job')}>Or Browse Jobs </h3>
        </div>
        <div className="devright">
          <img src={dev} alt="" />
        </div>
      </div>

      <div className="head-main">
        Brands you Admire and Dream of working with are <span>here! </span>
      </div>

      <div className="landing-bar">
        <div>
          <img src={company16} alt="pythontxt" className="img-homepage" />
        </div>
        <div>
          <img src={company17} alt="swift" className="img-homepage" />
        </div>
        <div>
          <img src={company18} alt="swift" className="img-homepage" />
        </div>
        <div>
          <img src={company19} alt="kotlin" className="img-homepage" />
        </div>
        <div>
          <img src={company20} alt="node" className="img-homepage" />
        </div>
      </div>

      <div className="find-box-main">
        <h2>How it works </h2>
        <div className="head-main">
          Find jobs with us easily by following these <span>simple steps </span>
        </div>

        <div className="find-box">
          <div className="find-box-left ">
            <h3>01.</h3>
            <h2>Create your account</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla dui sed erat pretium, sit amet bibendum est
              luctus.
            </p>
            <div className="img-box">
              <img src={mob} alt="" />
            </div>
          </div>
          <div className="find-box-right">
            <div className="find-sm-box">
              <h3>02.</h3>
              <h2>Update Resume</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fringilla dui sed erat pretium, sit amet bibendum est
                luctus.
              </p>

              <div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="resume.pdf"
                  disabled
                />
                <button className="send-btn">
                  {" "}
                  <Upload /> upload{" "}
                </button>
              </div>
            </div>
            <div className="find-sm-box">
              <h3>03.</h3>
              <h2>Apply for New Jobs</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fringilla dui sed erat pretium, sit amet bibendum est
                luctus.
              </p>
              <div className="img-box">
                <img src={mob2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comm-box">
        <div className="head-main">
          Join the Community of <span>Growth-Focused Developers. </span>
        </div>

        <div className="comm-sm-box">
          <div className="comm">
            <h1>01</h1>
            <h2>Build your Profile</h2>
            <p>Tell us about your preferences, skills, and experience.</p>
          </div>
          <div className="comm">
            <h1>02</h1>
            <h2>Tests & Interviews</h2>
            <p>Go through tests that validate your skill set.</p>
          </div>
          <div className="comm">
            <h1>03</h1>
            <h2>Receive Jobs Offers</h2>
            <p>It takes less than 6 days to match with jobs and projects.</p>
          </div>
          <div className="comm">
            <h1>04</h1>
            <h2>Keep Growing</h2>
            <p>
              Once you’re a part of Coder, you’ll never have to apply for
              another job.
            </p>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <button className="btn1" onClick={() => (window.location.href = '/job')}>Apply Today</button> <span>Or </span>{" "}
        <button className="btn2" onClick={() => (window.location.href = '/job')}>Browse Jobs</button>
      </div>

      <div className="growth-box-main">
        <div className="head-main">
          Take control of your career with tools set <br></br>
          to <span> Supercharge your growth.</span>
        </div>

        <div className="slider-container">
      <div className="growth-box" style={{ transform: `translateX(${-currentIndex * 25}%)` }}>
        {duplicatedSlides.map((slide, index) => (
          <div className="growth-sm-box" key={index}>
            <img src={slide.imgSrc} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button  onClick={handlePrev} disabled={currentIndex === 0}><LeftArrowv2 /> </button>
        <button onClick={handleNext} disabled={currentIndex === slides.length - 1}><RightArrowv2 /> </button>
      </div>
    </div>
      </div>

      <div className="client-box-main">

        <h2>Our Testimonials</h2>
      <div className="head-main">
      What makes our<span> clients happy</span>
        </div>

        <div className="client-box">
       <div className="client-box-sm">
       <CommaV3 />
<ReactStars
                count={5}
                value={5}
                size={24}
                color2="#FFD700"
                edit={false} 
                half={true}
              />

              <p>Happy with their work. Very professional approach and good quality product delivered. Looking forward to have more projects with you.</p>
   
        
       </div>
       <div className="client-box-sm">
 <CommaV3 />
<ReactStars
                count={5}
                value={5}
                size={24}
                color2="#FFD700"
                edit={false} 
                half={true}
              />

              <p>Got an opportunity to learn way more expected things. Team is really supportive and works really hard.</p>
   
        
       </div>
       <div className="client-box-sm">
       <CommaV3 />
<ReactStars
                count={5}
                value={5}
                size={24}
                color2="#FFD700"
                edit={false} 
                half={true}
              />

              <p>Very happy with the reliable and cost effective solutions provided by SOV. Would definitely recommend this team to anyone looking for application development, UI/UX and staff augmentation services.</p>
   
        
       </div>


        </div>
        </div>
    </div>
  );
};
