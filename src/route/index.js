import HomePage from "../components/Homepage";
import { NavBar } from "../components/NavBar";


export const router = [
    {
      path: '/',
      element: <HomePage />
    },
    {
        path: '/navbar',
        element: <NavBar />
      },
]  