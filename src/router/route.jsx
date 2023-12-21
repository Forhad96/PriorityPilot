import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/DashboardLayout/Dashboard";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import Home from "../pages/Home/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addTodo",
        element: <AddTask />,
      },
    ],
  },
]);
export default route;
