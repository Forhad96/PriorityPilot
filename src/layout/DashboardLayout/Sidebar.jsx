import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
  PlusIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { DashboardNav } from "./DashboardNav";

export function Sidebar() {
  return (
    
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          OrganizeMeNow
        </Typography>

      </div>
    {dashboardLinks}
    </Card>
  );
}
 const dashboardLinks = (
   <List>
     <ListItem>
       <ListItemPrefix>
         <HomeIcon className="h-5 w-5" />
       </ListItemPrefix>
       <Link to="/"> Home</Link>
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <ListBulletIcon className="h-5 w-5" />
       </ListItemPrefix>
       <Link to="/dashboard/tasks">Tasks</Link>
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <PlusIcon className="h-5 w-5" />
       </ListItemPrefix>
       <Link to="/dashboard/addTodo"> Create-todo</Link>
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <InboxIcon className="h-5 w-5" />
       </ListItemPrefix>
       Inbox
       <ListItemSuffix>
         <Chip
           value="14"
           size="sm"
           variant="ghost"
           color="blue-gray"
           className="rounded-full"
         />
       </ListItemSuffix>
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <UserCircleIcon className="h-5 w-5" />
       </ListItemPrefix>
       Profile
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <Cog6ToothIcon className="h-5 w-5" />
       </ListItemPrefix>
       Settings
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <PowerIcon className="h-5 w-5" />
       </ListItemPrefix>
       Log Out
     </ListItem>
   </List>
 );