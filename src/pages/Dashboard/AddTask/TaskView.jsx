import { BellIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineConnector,
  TimelineHeader,
  Typography,
} from "@material-tailwind/react";
const TaskView = ({ task }) => {
  return (
    <TimelineItem className="h-28">
      <TimelineConnector className="!w-[78px]" />
      <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
        <TimelineIcon className="p-3" variant="ghost">
          <XMarkIcon className="h-5 w-5" />
        </TimelineIcon>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <Typography variant="h6" color="blue-gray">
              {task?.title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {/* 22 DEC 7:20 PM */}
              {task?.deadline}
            </Typography>
          </div>

          <div>
            <p>{task.status}</p>
            <p>{task.priority}</p>
            <p>Created by</p>
          </div>
        </div>
      </TimelineHeader>
    </TimelineItem>
  );
};
export default TaskView;
