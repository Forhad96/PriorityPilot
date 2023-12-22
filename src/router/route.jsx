import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/DashboardLayout/Dashboard";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import Home from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Resgister/Register";
// import { Tasks } from "../pages/Tasks/Tasks";

import PrivateRoute from "./PrivateRoutes";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Ongoing from "../pages/Dashboard/Ongoing/Ongoing";
import TasksNew from "../pages/Dashboard/Tasks/Tasks";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <TasksNew />,
      },
      {
        path: "addTodo",
        element: <AddTask />,
      },

      // {
      //   path: "tasks",
      //   // index:true,
      //   element: <Tasks />,
      // },
      {
        path: "ongoing",
        element: <Ongoing />,
      },
    ],
  },
]);
export default route;
