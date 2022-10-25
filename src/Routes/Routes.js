import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Skillcrush/Blog/Blog";
import Courses from "../Skillcrush/Courses/Courses";
import FAQ from "../Skillcrush/FAQ/FAQ";
import GetPremium from "../Skillcrush/GetPremium/GetPremium";
import Home from "../Skillcrush/Home/Home";
import Login from "../Skillcrush/Login/Login/Login";
import Register from "../Skillcrush/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/getpremium',
                element: <GetPremium></GetPremium>
            }
        ]
    }
])