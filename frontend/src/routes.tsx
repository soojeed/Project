import { createBrowserRouter, Router } from "react-router-dom";
import Routes from "./components/routes";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Experience from "./pages/Experience";
import Projects from "./pages/projects";
import HomePage from "./pages/home/home";
import Register from "./pages/register"
import Section from "./components/Home/section";
import Login from "./pages/login";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    children:[{
        index: true,        // 👈 Home page
        element: <Section />
      },{
      path:"register",
      element:<Register/>
    },
    {
  path: "login",
  element: <Login />
}
    ]
    
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
        path:"skills",
        element:<Skills/>
      },{
        path:"Experience",
        element:<Experience/>
      },{
        path:"projects",
        element:<Projects/>
      }
    ]
  }
]);
