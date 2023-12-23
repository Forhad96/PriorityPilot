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
        <TimelineIcon className="p-3 cursor-pointer" variant="outlined">
          <XMarkIcon className="h-5 w-5 hover:animate-spin" />
        </TimelineIcon>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <Typography variant="h6" color="blue-gray">
              {task?.title}
            </Typography>

            <div className="flex gap-2">
              <Chip size="sm" value={task?.deadline_date} />
              <Chip size="sm" value={convertTime(task?.deadline_time)} />
            </div>
          </div>
          <div className="space-y-1">
            <div className="w-max text-white">
              <Chip
                className="text-white"
                color={
                  (task?.status === "todo" && "blue") ||
                  (task?.status === "ongoing" && "pink") ||
                  (task?.status === "complete" && "teal")
                }
                value={task?.status}
              />
            </div>

            <div className="w-max">
              <Chip
                className=""
                color={
                  (task?.priority === "high" && "red") ||
                  (task?.priority === "moderate" && "lime") ||
                  (task?.priority === "low" && "blue-gray")
                }
                value={task?.priority}
              />
            </div>
          </div>
        </div>
      </TimelineHeader>
    </TimelineItem>
  );
};

import PropTypes from 'prop-types';
import { convertTime } from "../../../utils/convertTime";

TaskView.propTypes = {
    task: PropTypes.object.isRequired,
};
export default TaskView;
