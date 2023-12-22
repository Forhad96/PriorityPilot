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
  TrashIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  GifIcon,
  ChevronDoubleRightIcon,
  WindowIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { DashboardNav } from "./DashboardNav";

export function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {/* <img src="/Black logo - no background.png" alt="" /> */}
        </Typography>
      </div>
      {dashboardLinks}
    </Card>
  );
}
 const dashboardLinks = (
   <List>
     <Link to="/">
       <ListItem>
         <ListItemPrefix>
           <HomeIcon className="h-5 w-5" />
         </ListItemPrefix>
         Home
       </ListItem>
     </Link>
     <Link to="/dashboard/tasks">
       <ListItem>
         <ListItemPrefix>
           <WindowIcon className="h-5 w-5" />
         </ListItemPrefix>
         Tasks
       </ListItem>
     </Link>

     <Link to="/dashboard/addTodo">
       <ListItem>
         <ListItemPrefix>
           <PlusIcon className="h-5 w-5" />
         </ListItemPrefix>
         Create-todo
       </ListItem>
     </Link>

     <Link to="/dashboard/ongoing">
       <ListItem>
         <ListItemPrefix>
           <ChevronDoubleRightIcon className="h-5 w-5" />
         </ListItemPrefix>
         Ongoing Tasks
       </ListItem>
     </Link>
     <ListItem>
       <ListItemPrefix>
         <CheckCircleIcon className="h-5 w-5" />
       </ListItemPrefix>
       <Link to="/dashboard/complete">Completed Tasks</Link>
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <ArchiveBoxArrowDownIcon className="h-5 w-5" />
       </ListItemPrefix>
       <Link to="/dashboard/achieved">Achieved Tasks</Link>
     </ListItem>
     <ListItem>
       <ListItemPrefix>
         <TrashIcon className="h-5 w-5" />
       </ListItemPrefix>
       <Link to="/dashboard/trash"> Trash</Link>
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