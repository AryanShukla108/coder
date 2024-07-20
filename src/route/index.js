import HomePage from "../components/home/Homepage";
import { NavBar } from "../components/NavBar";
import Landing from "../components/healthcare/Landing";
import Hire from "../components/hire/Hire";
import JobHired from "../components/job/JobHired";


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

]  