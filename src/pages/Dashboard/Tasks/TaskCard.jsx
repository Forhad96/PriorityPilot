import {
  CheckCircleIcon,
  ForwardIcon,
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
  Button,
  Option,
  Select,
  Tooltip,
  IconButton,
  Chip,
} from "@material-tailwind/react";

export function TaskCard({ task }) {
  const {
    _id,
    title,
    description,
    status,
    priority,
    deadline_date,
    deadline_time,
    createdBy,
  } = task;
  return (
    <Card className="mt-6 w-80">
      <CardBody>
        <div className="flex items-center justify-between ">
          {(status === "todo" && <RectangleStackIcon color="" className="w-10 text-light-blue-600" />) ||
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
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex  justify-evenly">
        <div className="mx-w-16">
          <Select color="teal" label="Change Status">
            <Option>Todo</Option>
            <Option>Ongoing</Option>
            <Option>Complete</Option>
          </Select>
        </div>

        <Tooltip content="Edit Task">
          <IconButton variant="text">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
        <Tooltip content="Delete Task">
          <IconButton variant="text">
            <TrashIcon color="red" className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
