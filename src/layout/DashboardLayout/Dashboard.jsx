import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardNav } from "./DashboardNav";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <div className="flex justify-between mx-auto max-w-7xl mt-2">
        <div className= "hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
