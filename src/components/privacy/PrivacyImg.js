import React from 'react'
import privacyimg from "../../assests/privacyimg.png"

const PrivacyImg = () => {
    return (
        <>
            <div className='ContactUsImg'>
                <div className='privacy-one'>
                    <div className="heading-color">Privacy Policy</div>
                    <div className="para">We, at SOV Technologies (OPC) PVT Limited , are committed to respecting your online privacy and recognize the need for appropriate protection and management of any personally identifiable information you share with us. This Privacy Policy ("Policy") describes how SOV collects, uses, discloses and transfers personal information of users through its websites and applications, including through www.sovtechnologies.com, mobile applications and online services (collectively, the "Platform"). This policy applies to those who visit the Platform, or whose information SOV otherwise receives in connection with its services (such as contact information of individuals associated with SOV including partners) (hereinafter collectively referred to as "Users"). For the purposes of the Privacy Policy, "You" or "Your" shall mean the person who is accessing the Platform.                  </div>
                </div>
                <div className='privacy-two'>
                    <img src={privacyimg} alt="privacyimg" className='contactusimg' />
                </div>
            </div>
            <div className='company-policy'>
                {/* <div className='main-data'>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">Data Protection Principles</div>
                            <div className="txt">The Company “Coder” follows data protection principles contained therein:</div>
                            <ul>
                                <li>Obtain and process information fairly</li>
                                <li>Keep it only for one or more specified, explicit and lawful purposes</li>
                                <li>Keep it safe and secure</li>
                                <li>Keep it accurate, complete and up to date</li>
                                <li>Ensure it is adequate and relevant but not excessive</li>
                                <li>Retain for no longer than is necessary</li>
                            </ul>
                        </div>
                    </div>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">Data Transfer</div>
                            <ul>
                                <li>Transmission of Company's data is protected from leakage or misuse.</li>
                                <li>Company does not disclose an individual's personal data outside office except:</li>
                                <li>When Company has express consent to do so, or in circumstances as agreed between Company and an individual.</li>
                                <li>When necessary, to our regulatory bodies and auditors</li>
                                <li>When Company is required or permitted to do so by law</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='main-data'>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">Storage of Sensitive Data</div>
                            <ul>
                                <li>The Company's sensitive data is labelled and handled as per section information handling of Asset Management and information classification Policy.</li>
                                <li>The Company’s sensitive data in physical form is stored in lock and key cabinets.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">sensitive Data</div>
                            <div className="txt">Protection of sensitive organization data which consists of information relating to but not limited to:</div>
                            <ul>
                                <li>R&D</li>
                                <li>Vendor contracts and agreements</li>
                                <li>Annual sales figures, monthly Supply chain plan</li>
                                <li>Data Privacy of Employees personal Data, Customer Personal Data, Client Personal Data</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='main-data'>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">Privacy and Protection of Personally Identifiable Information</div>
                            <ul>
                                <li>Strong implementation of privacy safeguards and consistent enforcement of information security controls is ensured to address privacy and personal data protection</li>
                                <li>Only selected authorized personnels have access to information: - employee personal data. The security controls addresses</li>
                                <li>Mechanisms for ensuring that information is obtained and processed fairly, lawfully and properly.</li>
                                <li>Ensuring that information is accurate, complete and up-to-date, adequate </li>
                                <li>Appropriate clearing and deletion of information.</li>
                                <li>Personal records are maintained and stored securely</li>
                            </ul>
                        </div>
                    </div>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">Guidelines for Data Privacy </div>
                            <ul>
                                <li>Access to the sensitive data are provided strictly on the basis of need to know.</li>
                                <li>Controls are implemented to prevent employees and third party staff for accessing the Personal Identifiable information for unauthorized purposes.</li>
                                <li>Personal records are maintained and stored securely and users of the personal records will be liable to ensure the secure storage, retention and disposal of the information. Personal records shall be maintained and stored securely.</li>
                                <li>Backup on a removable storage media are kept in safe and secure environment</li>
                                <li>Appropriate disciplinary actions are taken in case of breach of privacy and protection of Company's data or Personally identifiable information</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='main-data'>
                    <div className="data">
                        <div className='icon-file'>
                            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1394)">
                                    <path d="M26.5144 8.84583H10.8984L9.87435 6.80583C9.49035 5.85383 8.46635 5.17383 7.44235 5.17383H1.42635C-0.109648 5.17383 -1.38965 6.53383 -1.38965 8.16583V29.2458C-1.38965 30.8778 -0.109648 32.2378 1.42635 32.2378H26.3864C27.9224 32.2378 29.2024 30.8778 29.2024 29.2458V11.8378C29.3304 10.2058 28.0504 8.84583 26.5144 8.84583ZM16.1464 24.6218C16.1464 25.0298 15.8904 25.3018 15.6344 25.3018H12.4344C12.0504 25.3018 11.7944 25.0298 11.9224 24.6218L12.5624 20.6778C11.7944 20.1338 11.2824 19.1818 11.2824 18.0938C11.2824 16.3258 12.5624 14.9658 14.2264 14.9658C15.8904 14.9658 17.1704 16.3258 17.1704 18.0938C17.1704 19.1818 16.6584 20.1338 15.8904 20.6778L16.1464 24.6218Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1394">
                                        <rect width="32" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='file-2'>
                            <div className="head-text">Policy for website visitors</div>
                            <div className="txt">Type of information (set of data we collect and we don't collect).</div>
                            <ul>
                                <li>Data we collect your name, email address, date of birth, age, device, device id, contact details, gender, location, pin code, area code, occupation.</li>
                                <li>Data we don't collect such as passwords, bank account details, credit card details, debit card details, secure PIN, banking passwords, physical, physiological and mental health condition, sexual orientation, medical records and history, biometric information, national identification numbers, and such other sensitive personal data or information.</li>
                                <li>      How we use the collected data for users, company & third-party (if any) benefits.</li>
                                <li>For users, we aggregate users to provide better user experience, curated content, premium services, and new release/updates.</li>
                                <li>For clients & company, we used the data to gather insights and user data dynamics analytics, reporting and devising go to market strategy,</li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className='para'>
                    <h1 style={{ fontSize: "18px" }}>
                        Types of Personal Information collected by SOV
                    </h1>


                    "Personal information" (PI) - means any information relating to an identified or identifiable natural person including common identifiers such as a name, an identification number, location data, an online identifier or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person and any other information that is so categorized by applicable laws. We collect information about you and/or your usage to provide better services and offerings. The Personal Information that we collect, and how we collect it, depends upon how you interact with us. We collect the following categories of Personal Information in the following ways: name, email address, password, country, city, contact number and company/organization that you are associated with, when the you sign up for alerts on the Platform; information that one would usually include in a resume, including name, contact details including e-mail address and mobile number, work experience, educational qualifications, data relating to your current and past remuneration or salary, a copy of your resume, etc. when you register on the Platform; information about the services that you use and how you use them, including log information and location information, when you are a user of the services through the Platform; we may collect your Personal Information such as name, age, contact details, preferences, etc. through surveys and forms, when you choose to participate in these surveys etc.; we may also collect information relating to your caste and information about whether you are eligible for any affirmative action programmes or policies, if you opt to provide such information; when you communicate with SOV or use the Platform to communicate with other Users (such as partners), we collect information about your communication and any information you choose to provide; when you visit the Platform, we use cookies to automatically collect, store and use technical information about your system and interaction with our Platform; when you use a device to access the Platform, SOV may collect technical or other related information from the device as well as the device location; To the extent permitted by law, SOV may record and monitor your communications with us to ensure compliance with our legal and regulatory obligations and our internal policies. This may include the recording of telephone conversations; If you choose to sign in with your social media account to access the Platform, or otherwise connect your social media account with the services of the Platform, you consent to our collection, storage, and use, in accordance with this Privacy Policy, of the information that you make available to us through the social media interface. Please see your social media provider's privacy policy and help centre for more information about how they share information when you choose to connect your account.

                    <h1 style={{ fontSize: "18px" }}> How SOV may use your Personal Information</h1>

                    We will only use your personal data in a fair and reasonable manner, and where we have a lawful reason to do so. Our use of your personal data depends on the purpose for which you interact with us. We may process your Personal Information for the following purposes: Providing our services and products to you including to send you job alerts, calendar alerts, relevant search results, recommended jobs and/or candidates (as the case maybe), and other social media communication facilities; Protecting our Users and providing you with customer support; We use information collected from cookies and other technologies, to improve your user experience and the overall quality of our services (for more information please refer to paragraph 4 below). When showing you tailored ads, we will not associate an identifier from cookies or similar technologies with sensitive categories, such as those based on race, religion, sexual orientation or health. Improving the Platform and its content to provide better features and services. Conducting market research and surveys with the aim of improving our products and services. Sending you information about our products and services for marketing purposes and promotions; Preventing, detecting, investigating and taking action against crimes (including but not limited to fraud and other financial crimes), any other illegal activities, suspected fraud, or violations of SOV’s Terms of Use in any jurisdiction To the extent required for identity verification, government sanctions screening and due diligence checks. Establishing, exercising or defending legal rights in connection with legal proceedings (including any prospective legal proceedings) and seeking professional or legal advice in relation to such legal proceedings.

                    <h1 style={{ fontSize: "18px" }}> Cookies and Other Tracking Technologies</h1>

                    Some of our web pages utilize "cookies" and other tracking technologies. A "cookie" is a small text file that may be used, for example, to collect information about web-site activity. Some cookies and other technologies may serve to recall Personal Information previously indicated by a user. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them.

                    You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser, but please note that if you choose to erase or block your cookies, you will need to re-enter your original user ID and password to gain access to certain parts of the Platform.

                    Tracking technologies may record information such as Internet domain and host names; Internet protocol (IP) addresses; browser software and operating system types; clickstream patterns; and dates and times that our site is accessed. Our use of cookies and other tracking technologies allows us to improve our Platform and the overall website experience. We may also analyse information that does not contain Personal Information for trends and statistics.

                    For more information about our use of cookies please refer to our Cookie Policy.

                    The Basis/ Grounds which we rely on for collection and processing of your Personal Information:

                    Your Personal Information is collected and processed by SOV based on the following legal grounds depending upon the nature of Personal Information and the purposes for which it is processed. Consent:

                    SOV relies on your consent in order to process your Personal Information in certain situations. If SOV requires your consent to collect and process certain Personal Information, as per the requirements under the applicable data protection laws, your consent is sought at the time of collection of your Personal Information and such processing will only be performed where consent is secured.

                    <h1 style={{ fontSize: "18px" }}> Compliance with a legal obligation:</h1>

                    Your Personal Information may be processed by SOV, to the extent that such processing is necessary to allow SOV to comply with a legal obligation. An example of this would be if SOV is required to disclose your Personal Information to respond to a court order or if SOV is required to retain specific records for a fixed period to comply with requirements under any applicable law.

                    <h1 style={{ fontSize: "18px" }}>Information Sharing and Disclosure </h1>

                    We restrict access to your Personal Information to employees who we believe reasonably need to know/or that information to fulfil their jobs to provide, operate, develop, or improve our products or services.

                    SOV does not disclose, transfer or share your Personal Information with others except with: Our affiliates and group companies to the extent required for our internal business and/or administrative purposes and/or general corporate operations and for provision of services aimed at helping you in your career enhancement; Potential recruiters if we determine that your resume matches a particular job description/ vacancy available with such recruiters. By registering on the Platform and consenting to the terms of this Privacy Policy, you agree that SOV may contact you or forward your resume to potential recruiters; Third parties including enforcement, regulatory and judicial authorities, if we determine that disclosure of your Personal Information is required to

                    a) respond to subpoenas, court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims;

                    or

                    b) investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of SOV’s Terms of Use or as otherwise required by law; In the event of a merger, acquisition, financing, or sale of assets or any other situation involving the transfer of some or all of SOV’s business assets we may disclose Personal Information to those involved in the negotiation or transfer.

                    Third party service providers and marketing partners that SOV engages to

                    a) provide services over the Platform on SOV’s behalf;

                    b) maintain the Platform and mailing lists; or

                    c) communicate with you on SOV’s behalf about offers relating to its products and/or services. SOV will take reasonable steps to ensure that these third-party service providers are obligated to protect your Personal Information and are also subject to appropriate confidentiality / non-disclosure obligations. Third party advertisers to display advertisements to you when you visit the Platform. The third-party advertisers include financial service providers (such as banks, insurance agents, stock brokers and mortgage lenders) and non-financial companies (such as stores, airlines, and software companies). These companies may use information about you and your visits to this Platform and other web sites to provide advertisements on this Platform. The Company does not provide any Personal Information to the advertiser when you interact with or view a targeted advertisement. However, if you interact with or view an advertisement, the advertiser may make certain assumptions and, in the process, learn certain Personal Information about you. For instance, if you view and click an advertisement that is targeted towards women in the age group 18- 24 from a specific geographic area, the advertiser may assume that you meet the relevant criteria.

                    SOV does not intend to transfer Personal Information without your consent to third parties who are not bound to act on SOV's behalf unless such transfer is legally required.

                    If your Personal Information is transferred outside India, we take the necessary steps to protect your Personal Information in accordance with applicable data protection laws.

                    <h1 style={{ fontSize: "18px" }}>Third Party Content: </h1>

                    Please be aware that the Platform sometimes contains links to other sites that are not governed by this Privacy Policy. Users may be directed to third-party sites for more information, such as advertisers, blogs, content sponsorships, vendor services, social networks, etc.

                    SOV makes no representations or warranties regarding how your information is stored or used on third-party servers. We recommend that you review the applicable privacy statements and policies of each third-party site linked from the Platform to determine their use of your personal information.

                    <h1 style={{ fontSize: "18px" }}>Employee/Employeer </h1>

                    To use the Platform, you agree that you must be the minimum age (described in this paragraph below) or older.

                    The minimum age for these purposes shall be eighteen (18), however if local laws require that you must be older for SOV to be able to lawfully provide the services over the Platform to you then that older age shall apply as the applicable minimum age.

                    If you are under the age of 18 or the age of majority in your jurisdiction, you must use the Platform under the supervision of your parent, legal guardian or responsible adult.

                    <h1 style={{ fontSize: "18px" }}>Retention of Personal Information </h1>

                    Your Personal Information will not be retained by SOV any longer than it is necessary for the purposes for which the Personal Information is processed and/or in accordance with legal, regulatory, contractual or statutory obligations as applicable.

                    At the expiry of such periods, your Personal Information will be deleted or archived in compliance with applicable laws

                    <h1 style={{ fontSize: "18px" }}> Controlling your personal information</h1>

                    You have the right to invoke your rights which are available to data principals or data subjects (as per applicable laws and regulations) in relation to your Personal Information which is being processed by SOV.

                    SOV provides you the ability to keep your Personal Information accurate and up-to-date. If at any time you would like to a) rectify, update or correct your Personal Information; b) obtain confirmation on whether or not your Personal Information is processed by it; c) access your Personal Information or exercise your right to data portability; or d) exercise your right to restrict the continuing disclosure of your Personal Information to any third party by SOV in certain circumstances, you are requested to contact us using the contact details mentions in paragraph 14 below. We will require you to provide a valid proof of your identity, in order to ensure that your rights are respected.

                    For the exercise of certain rights, you may be required to approach the relevant authority / designated officer as per the provisions of the applicable data protection laws/ SOV may in accordance with the provisions of applicable data protection laws, charge a fee for fulfilling your request, in particular in case of excessive or manifestly unfounded request. Further you acknowledge that the above mentioned rights are not absolute and are subject to limitations as per the applicable data protection laws.

                    At any time, if you wish to delete your account on sovtechnologies.com, you may do so by using the settings available in your account.

                    <h1 style={{ fontSize: "18px" }}> Confidentiality and Security</h1>

                    The security and confidentiality of your Personal Information is important to us and SOV has invested significant resources to protect the safekeeping and confidentiality of your personal data. When using external service providers acting as processors, we require that they adhere to the same standards as SOV does. Regardless of where your Personal Information is transferred or stored, we take all steps reasonably necessary to ensure that personal data is kept secure. We seek to ensure compliance with the requirements of the Information Technology Act, 2000 and Rules made there under to ensure the protection and preservation of your privacy. We have physical, electronic, and procedural safeguards that comply with the laws prevalent in India to protect your Personal Information, details of which are available at the following link: trust.sovtechnologies.com. By accepting the terms of this Privacy Policy, you agree that the standards and practices being implemented by us, are reasonable and sufficient for the protection of your Personal Information.

                    <h1 style={{ fontSize: "18px" }}>Social media</h1>

                    SOV operates channels, pages and accounts on some social media sites to inform, assist and engage with customers. SOV monitors and records comments and posts made on these channels about itself in order to improve its products and services.

                    Please note that you must not communicate the following information to SOV through such social media sites:

                    - sensitive personal data including (i) special categories of personal data meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation and (ii) other sensitive personal data such as criminal convictions and offences and national identification number ; - Excessive, inappropriate, offensive or defamatory content. SOV is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. SOV is only responsible for its own use of the Personal Information received through such sites.

                    <h1 style={{ fontSize: "18px" }}> Changes to this Privacy Policy</h1>

                    SOV reserves the right to update, change or modify this Privacy Policy at any time. The Privacy Policy shall come to effect from the date of publication of such update, change or modification.

                    <h1 style={{ fontSize: "18px" }}>Disclaimer </h1>

                    SOV does not store any account related information or any credit / debit card details. SOV shall not be liable for any loss or damage sustained by Users as a result of any disclosure (inadvertent or otherwise) of any information concerning the User's account, credit cards or debit cards in the course of any online transactions or payments made for any products and/or services offered through the Platform.

                    In case any Personal Information is shared by you with SOV, which is not requested by SOV during registration, (whether mandatorily or optionally), SOV will not be liable for any information security breach or disclosure in relation to such information.

                    If you have any questions regarding this Privacy Policy or the protection of your Personal Information, please contact SOV’s Data Protection Officer/ Grievance Officer at the following:

                    Data Protection Officer/ Grievance Officer In case you have any complaints and/or grievances in relation to the processing of your Personal Information you can send your complaints via e-mail to our grievance officer: privacy@sovtechnologies.com

                    <h1 style={{ fontSize: "18px" }}> Cookie Policy </h1>

                    <h1 style={{ fontSize: "18px" }}> Introduction </h1>

                    This Cookie Policy ("Policy") explains that we believe in being open and clear about how we use your information. In the spirit of transparency, this Policy provides detailed information about how and when we use cookies on our Websites. This cookie policy applies to any sovtechnologies.com product or service that links to this policy or incorporates it by reference.

                    <h1 style={{ fontSize: "18px" }}> Does sovtechnologies.com uses cookies?</h1>

                    sovtechnologies.com uses cookies, tags and other technologies when you use any of the sovtechnologies.com websites, mobile sites or mobile apps (collectively "the services"). Cookies are used to ensure everyone has their best possible experience. Cookies also help us keep your account safe. By continuing to visit or use our services, you are agreeing to the use of cookies and similar technologies for the purposes we describe in this policy. If you prefer not to receive cookies or web beacons, then you should stop using our site, or consult your browsing and third party cookie settings as described below.

                    <h1 style={{ fontSize: "18px" }}>What is a cookie? </h1>

                    Cookies are small pieces of text stored by a website you visit in your browser and subsequently sent by your web browser in every request to the website. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you. Essentially, cookies are a user’s identification card for the sovtechnologies.com servers. Cookies allow sovtechnologies.com to serve you better and more efficiently, and to personalize your experience on our site. Web beacons, tags and scripts may be used in the Websites or in emails to help us to deliver cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. We may analyse or perform analysis based on the use of these technologies and generate reports on an individual and aggregated basis.

                    Cookies can be "persistent" or "session" cookies. A persistent cookie helps us recognize you as an existing user, so it’s easier to return to sovtechnologies.com or interact with our services without signing in again. After you sign in, a persistent cookie stays in your browser and will be read by sovtechnologies.com when you return to one of our sites or a partner site that uses our services. Session cookies only last for as long as the session (usually the current visit to a website or a browser session).

                    <h1 style={{ fontSize: "18px" }}>What are cookies used for? </h1>

                    When you visit our Websites, we may place a number of cookies in your browser. These are known as First Party Cookies and are required to enable to hold session information as you navigate from page to page within the website. For example, we use cookies on our Websites to understand visitor and user preferences, improve their experience, and track and analyse usage, navigational and other statistical information. Additionally, cookies allow us to bring you advertising both on and off the sovtechnologies.com site, and bring customized features to you. You can control the use of cookies at the individual browser level. If you elect not to activate the cookie or to later disable cookies, you may still visit our Websites, but your ability to use some features or areas of the Websites may be limited. We may use any of the following categories of cookies on the Websites as detailed below. Each cookie falls within one of the four following categories:

                    Analytics Cookies: These cookies track information about visits to the sovtechnologies.com and partner (recruiter websites) websites so that we can make improvements and report our performance. For example: analyse visitor and user behaviour so as to provide more relevant content or suggest certain activities. They collect information about how visitors use the Websites, which site the user came from, the number of each user’s visits and how long a user stays on the Websites. We might also use analytics cookies to test new ads, pages, or features to see how users react to them.

                    Functionality or Preference Cookies : During your visit to the Websites, cookies are used to remember information you have entered or choices you make (such as your username, language or your region) on the Websites. They also store your preferences when personalizing the Websites to optimize your use of sovtechnologies.com. These preferences are remembered, through the use of the persistent cookies, and the next time you visit the Websites you will not have to set them again.

                    Targeting or Advertising Cookies:These Cookies are placed by third party advertising platforms or networks or sovtechnologies.com in order to, deliver ads and track ad performance, enable advertising networks to deliver ads that may be relevant to you based upon your activities (this is sometimes called "behavioural" "tracking" or "targeted" advertising) on the Websites. They may subsequently use information about your visit to target you with advertising that you may be interested in, on sovtechnologies.com websites or other websites. For example, these cookies remember which browsers have visited the websites.

                    <h1 style={{ fontSize: "18px" }}>When does sovtechnologies.com place cookies? </h1>

                    We use cookies on our websites, mobile sites and mobile applications. Any browser visiting these sites will receive cookies from us which helps us identify you more quickly when you return. Cookies help us to determine which pages or information you find most useful or interesting on our own websites.

                    sovtechnologies.com may also have some cookies for its own analytics i.e. analytics not part of Google Analytics. Such cookies help generate statistics and reports about visitors and their activities on the website or app.

                    <h1 style={{ fontSize: "18px" }}> How cookies are used for online analytics purposes?</h1>

                    We may use web analytics services on sovtechnologies.com, such as those of Google Analytics. These services help us analyse how users use the services, including by noting the third-party website from which you arrive. The information collected by the technology will be disclosed to or collected directly by such service providers, who use the information to evaluate your use of the services. We also use Google Analytics for certain purposes related to online marketing, as described in the following sections.

                    How are cookies used for advertising purposes?

                    Cookies and other ad technology such as beacons, pixels, and tags help us serve relevant ads to you more effectively. They also help us provide aggregated auditing, research, and reporting for advertisers, understand and improve our service, and know when content has been shown to you. We work with website analytics and advertising partners, including Google Display Network, Facebook, etc. to deliver sovtechnologies.com advertisements on third party publisher websites - these partners may set cookies on your computer's web browser. These cookies allow our partners to recognize your computer so that the ad server can show you sovtechnologies.com advertisements elsewhere on the Internet, and so that our analytics software can measure your engagement and interactions while using sovtechnologies.com services. In this way, ad servers may compile anonymous, de-identified information about where you, or others who are using your computer, saw our advertisements, whether or not you interacted with our advertisements, and actions performed on subsequent visits to sovtechnologies.com websites and applications. This information allows an ad network to deliver targeted advertisements that they believe will be of most interest to you, and it allows sovtechnologies.com to optimize the performance of our advertising campaigns and the usability of our website. In other words, we use analytics data in concert with data about our online ads that have been shown using the Google Display Network, Facebook for Advertisers, or other online advertising networks. By doing so, we can understand how anonymous users interacted with our website after seeing our ads.

                    <h1 style={{ fontSize: "18px" }}> What third-party cookies does sovtechnologies.com use?</h1>

                    Please note that the third parties (advertising networks and providers of external services like web traffic analysis services) may also use cookies on our Services. Cookies on our sites. Also, note that the names of cookies, pixels and other technologies may change over time.

                    We also use Google Analytics on our Services to help us analyse how our Services are used. Google Analytics uses performance cookies to track customer’s interactions. For example, by using cookies, Google can tell us which pages our users view, which are most popular, what time of day our websites are visited, whether visitors have been to our websites before, what website referred the visitor to our websites, and other similar information. All of this information is anonymized.

                    <h1 style={{ fontSize: "18px" }}>What are Web Beacons? </h1>

                    sovtechnologies.com occasionally advertises on third party websites. As part of our effort to track the success of our advertising campaigns, we may at times use a visitor identification technology such as "web beacons," or "action tags," which count visitors who have come to our site after being exposed to a sovtechnologies.com banner ad on a third party site. Our partners may also use web beacons to collect data in the aggregate as provided by your browser while you are on our site or another site where sovtechnologies.com is third party.

                    By navigating on our site, you agree that we can place cookie and web beacons on your computer or device. If you prefer not to receive web beacons, then you should stop using our site, or consult your browsing settings.

                    <h1 style={{ fontSize: "18px" }}>How to control cookies? </h1>

                    Most browsers allow you to control cookies through their settings preferences. However, if you choose to turn off these cookies, you will still see advertising on the internet but it may not be tailored to your interests. It does not mean that you won't be served any advertisements whilst you are online. Whilst we have mentioned most of the third parties involved in using targeting or advertising cookies in the preceding section , the list is not exhaustive and is subject to change. Therefore, even if you choose to turn off all the third-party cookies listed in section , you may still receive some tailored advertisements and recommendations.

                    There are a number of ways you can manage what cookies are set on your devices. Essential cookies, however, cannot be disabled. If you do not allow certain cookies to be installed, the website may not be accessible to you and/or the performance, features, or services of the website may be compromised.

                    You can also manage this type of cookie in the privacy settings on the web browser you are using. Please note that if you use your browser settings to block all cookies you may not be able to access parts of our or others' websites. Please see below for more information.

                    Changing your Cookie Settings: The browser settings for changing your cookies settings are usually found in the 'options' or 'preferences' menu of your internet browser. In order to understand these settings, the following links may be helpful. Otherwise you should use the 'Help' option in your internet browser for more details.

                    <h2>Cookie settings in Internet Explorer </h2>

                    <h2>Cookie settings in Firefox </h2>

                    <h2>Cookie settings in Chrome </h2>

                    <h2> Cookie settings in Safari</h2>

                    More information: To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.
                </div>
            </div>
        </>
    )
}

export default PrivacyImg