import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/DashboardLayout/Dashboard";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import Home from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Resgister/Register";
import { Tasks } from "../pages/Tasks/Tasks";
import PrivateRoute from "./PrivateRoutes";

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
        path: "addTodo",
        element: <AddTask />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);
export default route;
