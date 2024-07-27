import React from "react";

const Carrers = () => {
    const jobData = [
        {
            title: "Senior Instructional Designer (Remote)",
            employer: "Axon",
            department: "Misc",
            level: "Senior (5-8 years)",
            location: "Remote/Hybrid",
            //   logo: "axon-logo-url", // replace with actual logo URL or path
        },
        {
            title: "Mortgage Agent – Remote",
            employer: "Rocket Companies",
            department: "Sales",
            level: "Senior (5-8 years)",
            location: "Remote/Hybrid",
            //   logo: "rocket-logo-url", // replace with actual logo URL or path
        },
        {
            title: "Temporary ReStore Associate – Phoenix",
            employer: "Habitat for Humanity Central Arizona",
            department: "Customer Service",
            level: "Entry-level",
            location: "Phoenix",
            //   logo: "habitat-logo-url", // replace with actual logo URL or path
        },
        {
            title: "Rep, CS Banking Ops",
            employer: "Northern Trust",
            department: "Customer Service",
            level: "Junior (1-2 years)",
            location: "Tempe",
            //   logo: "northern-trust-logo-url", // replace with actual logo URL or path
        },
        {
            title: "Assistant General Counsel",
            employer: "HonorHealth",
            department: "Customer Service",
            level: "Mid-level (3-4 years)",
            location: "Scottsdale",
            //   logo: "honorhealth-logo-url", // replace with actual logo URL or path
        },
        {
            title: "VP, Financial Planning & Analysis",
            employer: "WillScot Mobile Mini",
            department: "Accounting/Finance",
            level: "Expert & Leadership (9+ years)",
            location: "Phoenix",
            //   logo: "willscot-logo-url", // replace with actual logo URL or path
        },
    ];
    return (
        <div className="Carrers">
            <div className="carrers-card">
                <div className="head1">Coder Companies Now Hiring</div>
                <div className="head2">
                    Each of these Arizona companies is committed to creating an inclusive
                    workplace culture where employees can thrive and grow.{" "}
                    <span>The best companies in Coder are looking for YOU!</span>
                </div>
                <div className="job-cards-container">
                    {jobData.map((job, index) => (
                        <div key={index} className="job-card">
                            <div>
                                <div className="tittle">{job.title}</div>
                                <div className="sm-title">
                                    Employer: <span>{job.employer}</span>
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
                            </div>
                            <div>
                                --
                                {/* <img
                  src={job.logo}
                  alt={`${job.employer} logo`}
                  className="job-logo"
                /> */}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carrers-btn">Explore more careers →</button>
            </div>
        </div>
    );
};

export default Carrers;