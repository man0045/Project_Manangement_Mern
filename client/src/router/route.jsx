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
import Profile from "../home/ProfileSec";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import LogOut from "../Components/Logout";

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
 path: '/admin/Dashboard',
 element: <DashboardLayout/>,
 children:[
  {
  path: '/admin/Dashboard/Profile',
  element: <Profile/>
 }
 ]
 },
 {
  path: "sign-up",
  element: <Signup/>
 },{
  path: "login",
  element: <Login/>
 },
 {
  path: "logout",
  element: <LogOut/>
 }
])
export default router;


