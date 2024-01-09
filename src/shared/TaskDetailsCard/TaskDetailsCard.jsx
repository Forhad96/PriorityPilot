import {
  CheckCircleIcon,
  PencilIcon,
  RectangleStackIcon,
  RocketLaunchIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
  Chip,
} from "@material-tailwind/react";
const TaskDetailsCard = ({task}) => {


      const {
        _id,
        title,
        description,
        status,
        priority,
        deadline_date,
        deadline_time,
        createdBy,
      } = task || "";
  return (
    <>
      <Card className="mt-6 w-80">
        <CardBody>
          <div className="flex items-center justify-between ">
            {(status === "todo" && (
              <RectangleStackIcon
                color=""
                className="w-10 text-light-blue-600"
              />
            )) ||
              (status === "ongoing" && (
                <RocketLaunchIcon color="" className="w-10 text-pink-600" />
              )) ||
              (status === "complete" && (
                <CheckCircleIcon color="teal" className="w-10" />
              ))}
            <div className="w-max text-white">
              <Chip
                className="text-white"
                color={
                  (status === "todo" && "blue") ||
                  (status === "ongoing" && "pink") ||
                  (status === "complete" && "teal")
                }
                value={status}
              />
            </div>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description ? description : ""}</Typography>
          <div className="w-max flex justify-between gap-3">
            <Chip
              size="sm"
              color={
                (priority === "high" && "red") ||
                (priority === "moderate" && "lime") ||
                (priority === "low" && "blue-gray")
              }
              value={priority}
            />
            <Chip size="sm" value={deadline_date} />
            <Chip size="sm" value={convertTime(deadline_time)} />
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex  justify-evenly">
          <select
            value={"change"}
            name="status"
            onChange={(e) => setStatusValue(e.target.value)}
            className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          >
            <option>Change Status</option>
            <option value="todo">Todo</option>
            <option value="ongoing">Ongoing</option>
            <option value="complete">Complete</option>
          </select>

          <Tooltip content="Edit Task">
            <IconButton onClick={() => setOpen(true)} variant="text">
              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Delete Task">
            <IconButton onClick={handleDelete} variant="text">
              <TrashIcon color="red" className="h-4 w-4" />
            </IconButton>
          </Tooltip>
        </CardFooter>
      </Card>

      <Modal open={open} setOpen={setOpen}>
        <UpdateTask setOpen={setOpen} taskId={_id} />
      </Modal>
    </>
  );
};
export default TaskDetailsCard;
