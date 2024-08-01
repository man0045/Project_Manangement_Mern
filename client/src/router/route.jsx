import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Home from "../home/Home"
import App from "../App";
import About from "../home/About";
import BookCards from "../home/ProjectCard";
import { Sidebar } from "flowbite-react";
import DashboardLayout from "../home/DashboardLayout";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App/>,
  children:[
   {
    path: "/",
    element: <Home/>
   },
   {
    path: "/about",
    element: <About/>
   },
   {
    path: "/project",
    element: <BookCards/>
   }
  ]
 },
 {
  path: 'admin/Dashboard',
 element: <DashboardLayout/>
 }
])
export default router;


