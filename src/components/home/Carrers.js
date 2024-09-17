import React, { useState, useEffect } from "react";
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
            description: "Java, Postgres ",
            Work_From: "Office",
            trending: "Top Trending"
        },
        {
            title: "Java Developer",
            working: "Monday to Friday",
            department: "Information Technologies",
            level: "0-2 Year Exp",
            location: "Goregaon",
            description: "Java, Postgres ",
        },
        {
            title: "Tech Lead",
            department: "Information Technologies",
            level: "5+ Year Exp",
            location: "Goregaon",
            description: "MVC, Rest Api, Angular ",
        },
        {
            title: "Flutter Developer",
            department: "Information Technologies",
            level: "0-1 Year Exp",
            location: "Ghatkopar / Ghansoli",
            description: "Android and iOS integration ",
        },
        {
            title: ".net Developer",
            department: "Information Technologies",
            level: "1-2 Year Exp",
            location: "Goregaon",
            description: "MVC, Rest Api ",
            trending: "Top Trending"
        },
        {
            title: "Angular and .Net Developer",
            department: "Information Technologies",
            level: "5+ Year Exp",
            location: "Goregaon",
            description: "MVC, Rest Api, Angular ",
            trending: "Top Trending"
        }
    ];

    // State for tracking the index of the visible cards
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        // Change cards every 3 seconds
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 1) % jobData.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [jobData.length]);

    // Determine which two cards to display
    const visibleJobs = [
        jobData[startIndex],
        jobData[(startIndex + 1) % jobData.length]
    ];


    return (
        <>
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
                            <div key={index} className="job-card">
                                <div>
                                    <div className="d-flex">

                                        <div className="tittle"> {job.title}</div>

                                    </div>
                                    <div className="sm-title">
                                        Description:  <span>{job.description}</span>
                                    </div>
                                    <div className="sm-title">
                                        Department: <span>{job.department}</span>
                                    </div>
                                    <div className="sm-title">
                                        Level: <span>{job.level}</span>
                                    </div>

                                    <div className="sm-title">
                                        Location:  <span>{job.location}</span>
                                    </div>
                                    <div className="sm-title d-flex">
                                        <button className="btn" onClick={() => (window.location.href = '/job')}>Apply</button>

                                        {
                                            job.trending && <div className="trend"><UpTrend />{job.trending}</div>
                                        }
                                    </div>
                                </div>
                                <div>

                                    {/* <img
                  src={job.logo}
                  alt={`${job.employer} logo`}
                  className="job-logo"
                /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carrers-btn" onClick={() => (window.location.href = 'career')}>Explore more careers →</button>
                </div>
            </div>
            <div className="Carrers-mobile">
                <div className="carrers-card">
                    <div className="head1">SOV Technologies Now Hiring</div>
                    <div className="head2">
                        Each of these Arizona companies is committed to creating an inclusive
                        workplace culture where employees can thrive and grow.{" "}
                        <span>The best companies in SOV Technologies are looking for YOU!</span>
                    </div>
                    <div className="job-cards-container">
                        {visibleJobs.map((job, index) => (
                            <div key={index} className="job-card">
                                <div>
                                    <div className="d-flex">

                                        <div className="tittle"> {job.title}</div>

                                    </div>
                                    <div className="sm-title">
                                        Description:  <span>{job.description}</span>
                                    </div>
                                    <div className="sm-title">
                                        Department: <span>{job.department}</span>
                                    </div>
                                    <div className="sm-title">
                                        Level: <span>{job.level}</span>
                                    </div>

                                    <div className="sm-title">
                                        Location:  <span>{job.location}</span>
                                    </div>
                                    <div className="sm-title d-flex">
                                        <button className="btn" onClick={() => (window.location.href = '/job')}>Apply</button>

                                        {
                                            job.trending && <div className="trend"><UpTrend />{job.trending}</div>
                                        }
                                    </div>
                                </div>
                                <div>

                                    {/* <img
                  src={job.logo}
                  alt={`${job.employer} logo`}
                  className="job-logo"
                /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carrers-btn" onClick={() => (window.location.href = 'career')}>Explore more careers →</button>
                </div>
            </div>
        </>
    );
};

export default Carrers;
