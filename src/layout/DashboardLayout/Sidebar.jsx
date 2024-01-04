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

export function Sidebar() {
const navList = (
  <List>
    {navItems.map((item, index) => (
      <Link key={index} to={item.link}>
        <ListItem>
          <ListItemPrefix>{item.icon}</ListItemPrefix>
          {item.text}
        </ListItem>
      </Link>
    ))}
    {/* ... (repeat for other items) */}
  </List>
);



  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {/* <img src="/Black logo - no background.png" alt="" /> */}
          Dashboard
        </Typography>
      </div>

   {navList}
    </Card>
  );
}

 const navItems = [
   { icon: <HomeIcon className="h-5 w-5" />, text: "Home", link: "/" },
   {
     icon: <WindowIcon className="h-5 w-5" />,
     text: "Tasks",
     link: "/dashboard/tasks",
   },
   {
     icon: <PlusIcon className="h-5 w-5" />,
     text: "Create Todo",
     link: "/dashboard/addTodo",
   },
   {
     icon: <ChevronDoubleRightIcon className="h-5 w-5" />,
     text: "Ongoing Tasks",
     link: "/dashboard/ongoing",
   },
   {
     icon: <CheckCircleIcon className="h-5 w-5" />,
     text: "Completed Tasks",
     link: "/dashboard/complete",
   },
   {
     icon: <ArchiveBoxArrowDownIcon className="h-5 w-5" />,
     text: "Achieved Tasks",
     link: "/dashboard/achieved",
   },
   {
     icon: <TrashIcon className="h-5 w-5" />,
     text: "Trash",
     link: "/dashboard/trash",
   },
   { icon: <InboxIcon className="h-5 w-5" />, text: "Inbox", link: "/inbox" },
   {
     icon: <UserCircleIcon className="h-5 w-5" />,
     text: "Profile",
     link: "/profile",
   },
   {
     icon: <Cog6ToothIcon className="h-5 w-5" />,
     text: "Settings",
     link: "/settings",
   },
   {
     icon: <PowerIcon className="h-5 w-5" />,
     text: "Log Out",
     link: "/logout",
   },
 ];