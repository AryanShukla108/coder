import React, { useEffect, useState } from "react";
import Service from "./Service";
import pythontxt from "../../assests/pythontext.png";
import swift from "../../assests/swift.png";
import java from "../../assests/javalogo.png";
import kotlin from "../../assests/kotin.jpg";
import node from "../../assests/node.png";
import Angular from "../../assests/Angular.png";
import LedTeam from "./LedTeam";
import CompanyWorking from "./CompanyWorking";
import Glimpse from "./Glimpse";
import Carrers from "./Carrers";
import Customer from "./Customer";
import bannerhome from "../../assests/bannerhome.png"

export default function HomePage() {

  const images = [
    { src: pythontxt, alt: 'pythontxt' },
    { src: swift, alt: 'swift' },
    { src: java, alt: 'java' },
    { src: kotlin, alt: 'kotlin' },
    { src: node, alt: 'node' },
    { src: Angular, alt: 'Angular' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className="Homepage">
      <div className="landing-box-main">
        <div className="landing-box">
          <div className="landing-box-lext">
            <div className="text-box">
              Great <span className="soft"> software</span> is
              <span className="built"> built by great </span>{" "}
              <span className="team"> teams</span>
              <p>
                We help build and manage a team of world-class developers to
                bring your vision to life
              </p>
            </div>

            <div className="btn-box">
              <button className="start-btn" onClick={() => (window.location.href = 'hire')}>Let's get started!</button>
              <button className="start-btn2" onClick={() => (window.location.href = 'hire')}>
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.999878 21.0002C0.999878 9.95455 9.95418 1.00024 20.9999 1.00024C32.0456 1.00024 40.9999 9.95455 40.9999 21.0002C40.9999 32.0459 32.0456 41.0002 20.9999 41.0002C9.95418 41.0002 0.999878 32.0459 0.999878 21.0002ZM28.4998 17.621C30.7407 19.1151 30.7407 22.8854 28.4998 24.3795L19.607 29.5215C17.5541 30.8903 14.9999 29.1607 14.9999 26.4019L14.9999 15.5985C14.9999 12.8398 17.5541 11.1102 19.607 12.479L28.4998 17.621Z"
                    fill="url(#paint0_linear_81_3963)"
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear_81_3963"
                      x1="20.9999"
                      y1="1.00024"
                      x2="20.9999"
                      y2="41.0002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFCC21" />
                      <stop offset="1" stop-color="#EA4335" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_81_3963"
                      x1="20.9999"
                      y1="1.00024"
                      x2="20.9999"
                      y2="41.0002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFCC21" />
                      <stop offset="1" stop-color="#EA4335" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="landing-box-right">
            <img src={bannerhome} alt='bannerhome' className="bannerhome" />
          </div>
        </div>

        <div className="landing-bar">
          <div>
            <div className="head-main">Our Technology Strengths Fueled by:</div>
          </div>

          <div>
            <img src={pythontxt} alt="pythontxt" className="img-homepage" />
          </div>
          <div>
            <img src={swift} alt="swift" className="img-homepage" />
          </div>
          <div>
            <img src={java} alt="swift" className="img-homepage" />
          </div>
          <div>
            <img src={kotlin} alt="kotlin" className="img-homepage" />
          </div>
          <div>
            <img src={node} alt="node" className="img-homepage" />
          </div>
          <div>
            <img src={Angular} alt="Angular" className="img-homepage" />
          </div>
        </div>

        <div className="landing-bar-mobile">
          <div>
            <div className="head-main">Our Technology Strengths Fueled by:</div>
          </div>

          <div>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="img-homepage"
            />
          </div>

          {/* <div>
            <img src={pythontxt} alt="pythontxt" className="img-homepage" />
          </div>
          <div>
            <img src={swift} alt="swift" className="img-homepage" />
          </div>
          <div>
            <img src={java} alt="swift" className="img-homepage" />
          </div>
          <div>
            <img src={kotlin} alt="kotlin" className="img-homepage" />
          </div>
          <div>
            <img src={node} alt="node" className="img-homepage" />
          </div>
          <div>
            <img src={Angular} alt="Angular" className="img-homepage" />
          </div> */}
        </div>
      </div>

      <div className="review-box-main">
        <div className="review-box">
          <div className="icon-div">
            <svg
              width="52"
              height="58"
              viewBox="0 0 52 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7452 2.14819L1.29419 34.3705H26.0001L23.2549 55.8519L50.706 23.6297H26.0001L28.7452 2.14819Z"
                stroke="url(#paint0_linear_258_2173)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_258_2173"
                  x1="26.0001"
                  y1="2.14819"
                  x2="26.0001"
                  y2="55.8519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEBF24" />
                  <stop offset="1" stop-color="#EA4232" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="safe">
            We're <span>Safe</span>
          </div>
          <div className="para">
            We ensure secure software and business solutions, safeguarding
            against vulnerabilities for reliable deployment.
          </div>
        </div>
        <div className="review-box">
          <div className="icon-div">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.375 12.9167C19.375 15.0569 17.6401 16.7917 15.5 16.7917C13.3599 16.7917 11.625 15.0569 11.625 12.9167C11.625 10.7766 13.3599 9.04175 15.5 9.04175C17.6401 9.04175 19.375 10.7766 19.375 12.9167Z"
                stroke="url(#paint0_linear_81_4220)"
                stroke-width="2"
              />
              <path
                d="M8.9032 22.3654C10.1151 21.0995 12.1585 20.6667 15.5 20.6667C18.8863 20.6667 20.9393 21.0789 22.145 22.3654"
                stroke="url(#paint1_linear_81_4220)"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M21.0333 6.45833C22.2978 6.94961 23.8549 7.29585 24.9797 7.50536C25.8627 7.66982 26.5757 8.36598 26.653 9.26083C27.3471 17.2951 24.0741 23.374 16.2442 26.8117C15.7704 27.0198 15.2295 27.0198 14.7556 26.8117C6.93021 23.376 3.65658 17.3021 4.34575 9.27471C4.42314 8.37326 5.14455 7.6745 6.03596 7.5196C7.23236 7.3117 8.9099 6.96091 10.2036 6.45833C12.0556 5.7388 14.3433 4.512 15.1769 4.05423C15.3788 3.94332 15.6232 3.93942 15.8283 4.04449L15.8473 4.05423C16.7412 4.512 19.1812 5.7388 21.0333 6.45833Z"
                stroke="url(#paint2_linear_81_4220)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_81_4220"
                  x1="15.5"
                  y1="16.7917"
                  x2="15.5"
                  y2="9.04175"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEC023" />
                  <stop offset="1" stop-color="#EF5E32" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_81_4220"
                  x1="15.5241"
                  y1="22.3654"
                  x2="15.5241"
                  y2="20.6667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEC023" />
                  <stop offset="1" stop-color="#EF5E32" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_81_4220"
                  x1="15.5"
                  y1="27.125"
                  x2="15.5"
                  y2="3.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEC023" />
                  <stop offset="1" stop-color="#EF5E32" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="safe">
            We
            <span> Value You</span>
          </div>
          <div className="para">
            We dedicate ourselves to addressing your unique requirements, ensuring our solutions align perfectly with your goals.
          </div>
        </div>{" "}
        <div className="review-box">
          <div className="icon-div">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 17.5C32 25.5081 25.5081 32 17.5 32C9.49187 32 3 25.5081 3 17.5C3 9.49187 9.49187 3 17.5 3C25.5081 3 32 9.49187 32 17.5Z"
                stroke="url(#paint0_linear_81_4231)"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7302 11.1843C14.1109 11.1843 15.2302 12.3036 15.2302 13.6843V13.7021C15.2302 15.0828 14.1109 16.2021 12.7302 16.2021C11.3495 16.2021 10.2302 15.0828 10.2302 13.7021V13.6843C10.2302 12.3036 11.3495 11.1843 12.7302 11.1843ZM10.4122 19.753C10.8538 19.4213 11.4806 19.5104 11.8123 19.952C13.1979 21.7967 15.4007 22.9868 17.8818 22.9868C20.3629 22.9868 22.5657 21.7967 23.9513 19.952C24.283 19.5104 24.9098 19.4213 25.3514 19.753C25.793 20.0847 25.8821 20.7115 25.5504 21.1531C23.8033 23.4791 21.0185 24.9868 17.8818 24.9868C14.7451 24.9868 11.9603 23.4791 10.2132 21.1531C9.8815 20.7115 9.97059 20.0847 10.4122 19.753ZM25.5329 13.6843C25.5329 12.3036 24.4136 11.1843 23.0329 11.1843C21.6522 11.1843 20.5329 12.3036 20.5329 13.6843V13.7021C20.5329 15.0828 21.6522 16.2021 23.0329 16.2021C24.4136 16.2021 25.5329 15.0828 25.5329 13.7021V13.6843Z"
                fill="url(#paint1_linear_81_4231)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_81_4231"
                  x1="17.5"
                  y1="3"
                  x2="17.5"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEBF24" />
                  <stop offset="1" stop-color="#EF6331" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_81_4231"
                  x1="17.8818"
                  y1="11.1843"
                  x2="17.8818"
                  y2="24.9868"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEBF24" />
                  <stop offset="1" stop-color="#EF6331" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="safe">
            We're <span>Trustworthy</span>
          </div>
          <div className="para">
            Our commitment to excellence ensures clients receive tailored, dependable solutions, fostering long-term trust.
          </div>
        </div>
      </div>

      <div>
        <Service />
      </div>
      <div>
        <LedTeam />
      </div>
      <div>
        <CompanyWorking />
      </div>
      <div>
        <Glimpse />
      </div>
      <div>
        <Carrers />
      </div>
      <div>
        <Customer />
      </div>
    </div>
  );
}
