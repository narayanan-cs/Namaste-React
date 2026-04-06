
import ReactDOM from "React-DOM/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import AboutUs from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Menu from './components/RestaurantMenu';
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import { lazy } from "react";
import Shimmer from "./components/Shimmer.js";
import { Suspense } from "react";

const Grocery = lazy(()=>import("./components/Grocery.js") );

const AppLayout = () => {
    return (
        <div className="app">
        <Header />
        <Outlet />
        </div>
        

    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        children: [
    {
        path:'/',
        element: <Body />
    },
     {
        path: '/about',
        element: <AboutUs />
    },
    {
        path: '/contact',
        element: <ContactUs />
    },
    {
            path: "/grocery",
            element: <Suspense fallback={<Shimmer />}>  <Grocery /></Suspense>
    },
    {
        path: '/restaurant/:resId',
        element: <Menu />
    }
        ],
        errorElement: <Error />
    }
    

])
const root = ReactDOM.createRoot((document.getElementById("root")))
root.render(<RouterProvider router={appRouter} />);
