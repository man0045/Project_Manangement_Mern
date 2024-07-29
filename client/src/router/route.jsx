import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Home from "../home/Home"
import App from "../App";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App/>,
  children:[
   {
    path: "/",
    element: <Home/>
   }
  ]
 }
])
export default router;