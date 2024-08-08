import React from "react";
import { UpTrend } from "../../assests/Appicons";

const Carrers = () => {
    // const jobData = [
    //     {
    //         title: "Senior Instructional Designer (Remote)",
    //         employer: "Axon",
    //         department: "Misc",
    //         level: "Senior (5-8 years)",
    //         location: "Remote/Hybrid",
    //         //   logo: "axon-logo-url", // replace with actual logo URL or path
    //     },
    //     {
    //         title: "Mortgage Agent – Remote",
    //         employer: "Rocket Companies",
    //         department: "Sales",
    //         level: "Senior (5-8 years)",
    //         location: "Remote/Hybrid",
    //         //   logo: "rocket-logo-url", // replace with actual logo URL or path
    //     },
    //     {
    //         title: "Temporary ReStore Associate – Phoenix",
    //         employer: "Habitat for Humanity Central Arizona",
    //         department: "Customer Service",
    //         level: "Entry-level",
    //         location: "Phoenix",
    //         //   logo: "habitat-logo-url", // replace with actual logo URL or path
    //     },
    //     {
    //         title: "Rep, CS Banking Ops",
    //         employer: "Northern Trust",
    //         department: "Customer Service",
    //         level: "Junior (1-2 years)",
    //         location: "Tempe",
    //         //   logo: "northern-trust-logo-url", // replace with actual logo URL or path
    //     },
    //     {
    //         title: "Assistant General Counsel",
    //         employer: "HonorHealth",
    //         department: "Customer Service",
    //         level: "Mid-level (3-4 years)",
    //         location: "Scottsdale",
    //         //   logo: "honorhealth-logo-url", // replace with actual logo URL or path
    //     },
    //     {
    //         title: "VP, Financial Planning & Analysis",
    //         employer: "WillScot Mobile Mini",
    //         department: "Accounting/Finance",
    //         level: "Expert & Leadership (9+ years)",
    //         location: "Phoenix",
    //         //   logo: "willscot-logo-url", // replace with actual logo URL or path
    //     },
    // ];

    const jobData = [
        {
            title: "Java Developer",
            working: "Monday to Friday", 
            department: "Information Technologies",
            level: "0-1 Year Exp",
            location: "Vikhroli",
            description: "Advanced proficiency in coding in Java 8, Spring Boot technologies as well as unit testing/Mockito experience. Familiarity with agile methodologies and continuous integration tools.",
            Work_From:"Office",
            trending: "Top Trending"
        },
        {
            title: "Java Developer",
            working: "Monday to Friday", 
            department: "Information Technologies",
            level: "0-2 Year Exp",
            location: "Goregaon",
            description: "Experience in Java and Postgres required. Strong problem-solving skills and ability to work in a fast-paced environment are essential.",
            Work_From:"Office",
             trending: "Top Trending"
        },
        {
            title: "Tech Lead",
            department: "Information Technologies",
            level: "5+ Year Exp",
            location: "Goregaon",
            description: "MVC, Rest API, and Angular expertise needed. Proven track record of leading projects and mentoring junior developers.",
             trending: "Top Trending"
        },
        {
            title: "Flutter Developer",
            department: "Information Technologies",
            level: "0-1 Year Exp",
            location: "Ghatkopar / Ghansoli",
            description: "Proficient in Flutter and Dart, with experience in Android and iOS integration. Ability to build responsive and high-performance mobile applications. ",
        },
        {
            title: ".net Developer",
            department: "Information Technologies",
            level: "1-2 Year Exp",
            location: "Goregaon",
            description: "Strong understanding of MVC and REST API development . Experience with .NET frameworks and various databases is required .",
        },
        {
            title: "Angular and .Net Developer",
            department: "Information Technologies",
            level: "5+ Year Exp",
            location: "Goregaon",
            description: "Advanced skills in Angular and .NET required. Ability to design and implement complex applications with a focus on performance and scalability.",
        }
    ];


    return (
        <div className="Carrers">
            <div className="carrers-card">
                <div className="head1">SOV Technologies Now Hiring</div>
                <div className="head2">
                    Each of these Arizona companies is committed to creating an inclusive
                    workplace culture where employees can thrive and grow.{" "}
                    <span>The best companies in SOV Technologies are looking for YOU!</span>
                </div>
                <div className="job-cards-container">
  {jobData.map((job, index) => (
    <div key={index} className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="job-card">
            <div>
              <div className="d-flex">
                <div className="tittle"> {job.title}</div>
                {job.trending && <div className="trend"><UpTrend />{job.trending}</div>}
              </div>
              <div className="sm-title">
                Department: <span>{job.department}</span>
              </div>
              <div className="sm-title">
                Level: <span>{job.level}</span>
              </div>
              <div className="sm-title">
                Location: <span>{job.location}</span>
              </div>
              <div className="sm-title">
                <button className="btn" onClick={() => (window.location.href = '/job')}>Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="job-card ">
            <div>
            <div className="sm-title">
              Description: <span>{job.description}</span>
             
            </div>
            <button className="btn" onClick={() => (window.location.href = '/job')}>Apply</button>
            </div>
            <div className="sm-title">
              {/* You can add additional information here if needed */}
            </div>

          </div>
        </div>
      </div>
    </div>
  ))}
</div>
                <button className="carrers-btn" onClick={() => (window.location.href = '/career')}>Explore more careers →</button>
            </div>
        </div>
    );
};

export default Carrers;
