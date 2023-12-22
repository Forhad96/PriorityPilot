import { BellIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineConnector,
  TimelineHeader,
  Typography,
  Chip,
} from "@material-tailwind/react";
const TaskView = ({ task }) => {
    // console.log(task);
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
              {task?.deadline_date}
            </Typography>
          </div>

          <div>
            <div className="w-max">
              <Chip
                size="sm"
                variant="ghost"
                value={task?.status}
                color={
                  status === "paid"
                    ? "green"
                    : status === "pending"
                    ? "amber"
                    : "red"
                }
              />
            </div>
            <p>Status:{task.status}</p>
            <p>
              Priority:<span>{task.priority}</span>
            </p>
            {/* <p>Created by</p> */}
          </div>
        </div>
      </TimelineHeader>
    </TimelineItem>
  );
};

import PropTypes from 'prop-types';

TaskView.propTypes = {
    task: PropTypes.object.isRequired,
};
export default TaskView;
