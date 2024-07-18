import HomePage from "../components/home/Homepage";
import { NavBar } from "../components/NavBar";
import Landing from "../components/healthcare/Landing";


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

]  