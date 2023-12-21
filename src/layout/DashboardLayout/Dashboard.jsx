import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { DashboardNav } from "./DashboardNav";

const Dashboard = () => {
  return (
    <div className="flex justify-between mx-auto max-w-7xl">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1">
        <DashboardNav />
        <Outlet/>
      </div>
    </div>
  );
};
export default Dashboard;
