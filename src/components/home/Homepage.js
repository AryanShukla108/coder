import React from "react";
import Service from "./Service";
import pythontxt from "../../assests/pythontext.png"
import swift from "../../assests/swift.png"
import java from "../../assests/javalogo.png"
import kotlin from "../../assests/kotin.jpg"
import node from "../../assests/node.png"
import Angular from "../../assests/Angular.png"
import LedTeam from "./LedTeam";
import CompanyWorking from "./CompanyWorking";
import Glimpse from "./Glimpse";
import Carrers from "./Carrers";
import Customer from "./Customer";





export default function HomePage() {
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
              <button className="start-btn">Lets's get started!</button>
              <button className="start-btn2">
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
            {/* <img src={group} alt='' /> */}

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
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
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
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>{" "}
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
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
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
