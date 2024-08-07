import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/Error";
import Resmenu from "./component/Resmenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const Applayout=()=>(
    <div>
    <Header />
    <Outlet />
    </div>
);

const appRouter=createBrowserRouter([
    {
       path: "/",
       element: <Applayout />,
       children:[
        {
            path:"/",
            element: <Body />
        },
        {
            path: "/Contact",
            element: <Contact />,
            errorElement: <Error />
            
        },
        {
            path: "/About",
            element: <About />,
            errorElement: <Error />

        },
        {
            path:"/Resmenu/:resid",
            element: <Resmenu />,
            errorElement: <Error />

        }
       ],
       errorElement: <Error />
    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);