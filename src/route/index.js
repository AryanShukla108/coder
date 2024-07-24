import HomePage from "../components/home/Homepage";
import { NavBar } from "../components/NavBar";
import Landing from "../components/healthcare/Landing";
import Hire from "../components/hire/Hire";
import JobHired from "../components/job/JobHired";
import Project from "../components/project/Project";
import AboutUsMain from "../components/aboutus/AboutUsMain";


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

]  