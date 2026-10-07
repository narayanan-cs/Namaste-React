
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import AboutUs from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Menu from './components/RestaurantMenu';
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import { lazy } from "react";
import Shimmer from "./components/Shimmer.js";
import { Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Grocery = lazy(()=>import("./components/Grocery.js") );

const AppLayout = () => {

    const [username, setUserName] = useState("");
    
    useEffect(()=>{
    //make anAPI call and get the suer name

    const data = {
        name: "Narayanan Chandrasekar"
    }

    setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: username, setUserName}}>
        <div className="app">
        
            <UserContext.Provider value={{loggedInUser: "Satish"}}>
            <Header />
            </UserContext.Provider>
        <Outlet />
        
        </div>
        </UserContext.Provider>
        </Provider>
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
    },
    {
        path: '/cart',
        element: <Cart />
    }
        ],
        errorElement: <Error />
    }
    

])
const root = ReactDOM.createRoot((document.getElementById("root")))
root.render(<Provider store={appStore}><RouterProvider router={appRouter} /></Provider>);
