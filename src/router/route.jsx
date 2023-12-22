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
import Tasks from "../pages/Dashboard/Tasks/Tasks";
import Complete from "../pages/Dashboard/Complete/Complete";

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
        element: <Tasks />,
      },
      {
        path: "addTodo",
        element: <AddTask />,
      },

      {
        path: "tasks",
        // index:true,
        element: <Tasks />,
      },
      {
        path: "ongoing",
        element: <Ongoing />,
      },
      {
        path: "complete",
        element: <Complete />,
      },
    ],
  },
]);
export default route;
