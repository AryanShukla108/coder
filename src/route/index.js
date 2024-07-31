import HomePage from "../components/home/Homepage";
import { NavBar } from "../components/NavBar";
import Landing from "../components/healthcare/Landing";
import Hire from "../components/hire/Hire";
import JobHired from "../components/job/JobHired";
import Project from "../components/project/Project";
import AboutUsMain from "../components/aboutus/AboutUsMain";
import ContactUsMain from "../components/contactus/ContactUsMain";
import PrivacyMain from "../components/privacy/PrivacyMain";
import ServiceMain from "../components/service/ServiceMain";
import ServiceOneMain from "../components/serviceOne/ServiceOneMain";
import { Terms } from "../components/privacy/Terms";


export const router = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/navbar',
    element: <NavBar />
  },
  {
    path: '/healthcare',
    element: <Landing />
  },
  {
    path: '/hire',
    element: <Hire />
  },

  {
    path: '/job',
    element: <JobHired />
  },

  {
    path: '/project',
    element: <Project />
  },

  {
    path: '/about-us',
    element: <AboutUsMain />
  },

  {
    path: '/contact-us',
    element: <ContactUsMain />
  },

  {
    path: '/privacy',
    element: <PrivacyMain />
  }, {
    path: '/terms',
    element: <Terms />
  },

  {
    path: '/service',
    element: <ServiceMain />
  },

  {
    path: '/service-other',
    element: <ServiceOneMain />
  },

  {
    path: '/healthcare-enterprise',
    element: <Landing />
  },

  {
    path: '/healthcare-companies',
    element: <Landing />
  },


  {
    path: '/healthcare-fintech',
    element: <Landing />
  },

  {
    path: '/healthcare-startup',
    element: <Landing />
  },

  {
    path: '/healthcare-startup-bussinesses',
    element: <Landing />
  },

  {
    path: '/healthcare-salesforce',
    element: <Landing />
  },

  {
    path: '/healthcare-portfolio',
    element: <Landing />
  },

  {
    path: '/healthcare-pharma',
    element: <Landing />
  },

  {
    path: '/healthcare-service',
    element: <Landing />
  },

  {
    path: '/healthcare-workday',
    element: <Landing />
  },

  {
    path: '/healthcare-sap',
    element: <Landing />
  },


  {
    path: '/service-ui',
    element: <ServiceOneMain />
  },

  {
    path: '/service-web',
    element: <ServiceOneMain />
  },

  {
    path: '/service-email',
    element: <ServiceOneMain />
  },

  {
    path: '/service-consultation',
    element: <ServiceOneMain />
  },

  {
    path: '/service-branding',
    element: <ServiceOneMain />
  },

  {
    path: '/service-C2C-C2H',
    element: <ServiceOneMain />
  },

  {
    path: '/service-bugs-fixing',
    element: <ServiceOneMain />
  },

  {
    path: '/service-social-media',
    element: <ServiceOneMain />
  },

  {
    path: '/service-degital-marketing',
    element: <ServiceOneMain />
  },
]  