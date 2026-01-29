import { createBrowserRouter, Router } from "react-router-dom";
import Routes from "./components/routes";
import Contact from "./pages/contact";
import Home from "./pages/home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 style={{ color: "red" }}>ROUTER WORKS</h1>,
  },{
    path:"/dashboard",
    element:<Routes/>,
    children:[
      {
        index:true,
        element:< Home/>
      },{
        path:"contact",
        element:<Contact/>
      },{
        path:""
      }
    ]
  }
]);
